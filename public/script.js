const $ = id => document.getElementById(id);

let selectedId = null;
let selectedProduct = null;
let tags = [];
let searchTimer;
let requestSequence = 0;
let autoSelectFirstProduct = true;

async function api(path, options = {}) {
  const response = await fetch('/api' + path, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Request failed.');
  return data;
}

function setMessage(text = '', type = '') {
  const message = $('msg');
  message.textContent = text;
  message.className = `form-message${type ? ` ${type}` : ''}`;
}

function showLoadError(error) {
  const notice = $('loadError');
  notice.hidden = false;
  notice.textContent = `Could not load products: ${error.message}`;
}

function stockLabel(stock) {
  if (Number(stock) === 0) return { text: 'Out of stock', state: 'out' };
  if (Number(stock) < 5) return { text: 'Low stock', state: 'low' };
  return { text: 'In stock', state: '' };
}

function formatPrice(price) {
  return `ZMW ${Number(price).toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
}

function groupByFirstCategory(items) {
  if (items.length < 2) return items;
  const firstCategory = items[0].category;
  const categoryOrder = [firstCategory, ...new Set(items.map(item => item.category).filter(category => category !== firstCategory).sort((a, b) => a.localeCompare(b)))];
  const rank = new Map(categoryOrder.map((category, index) => [category, index]));
  return [...items].sort((a, b) => rank.get(a.category) - rank.get(b.category));
}

function makeCell(text, className = '', label = '') {
  const cell = document.createElement('td');
  cell.textContent = text;
  if (className) cell.className = className;
  if (label) cell.dataset.label = label;
  return cell;
}

function renderRows(items) {
  const tbody = $('rows');
  const fragment = document.createDocumentFragment();

  for (const item of items) {
    const row = document.createElement('tr');
    row.tabIndex = 0;
    row.dataset.name = item.name;
    row.setAttribute('aria-label', `${item.name}, ${item.category}, ${formatPrice(item.price)}, ${item.stock} in stock`);
    if ((selectedId !== null && String(item._id) === String(selectedId)) || (selectedId === null && selectedProduct?.name === item.name)) {
      row.classList.add('selected');
      row.setAttribute('aria-selected', 'true');
    }

    row.append(
      makeCell(item.name, '', 'Product'),
      makeCell(item.category, '', 'Category'),
      makeCell(formatPrice(item.price), 'numeric', 'Price'),
      makeCell(String(item.stock), 'numeric', 'Stock')
    );

    const statusCell = document.createElement('td');
    statusCell.dataset.label = 'Status';
    const status = stockLabel(item.stock);
    const badge = document.createElement('span');
    badge.className = `stock-badge${status.state ? ` ${status.state}` : ''}`;
    badge.textContent = status.text;
    statusCell.append(badge);
    row.append(statusCell);

    row.addEventListener('click', () => selectProduct(item));
    row.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectProduct(item);
      }
    });
    fragment.append(row);
  }

  tbody.replaceChildren(fragment);
  $('empty').hidden = items.length !== 0;
}

async function loadProducts() {
  const sequence = ++requestSequence;
  const query = new URLSearchParams();
  const search = $('search').value.trim();
  if (search) query.set('search', search);
  if ($('category').value) query.set('category', $('category').value);

  const items = await api(`/products?${query.toString()}`);
  if (sequence !== requestSequence) return;

  const orderedItems = groupByFirstCategory(items);
  renderRows(orderedItems);

  if (autoSelectFirstProduct && orderedItems.length) {
    autoSelectFirstProduct = false;
    selectProduct(orderedItems[0]);
    return;
  }

  const updatedSelection = orderedItems.find(item => String(item._id) === String(selectedId));
  if (updatedSelection) {
    selectedProduct = updatedSelection;
    renderDocument();
  }
}

async function loadCategories() {
  const categories = await api('/categories');
  const currentFilter = $('category').value;
  const unique = [...new Set(categories)].sort((a, b) => a.localeCompare(b));
  $('category').replaceChildren(
    new Option('All categories', ''),
    ...unique.map(category => new Option(category, category))
  );
  $('category').value = currentFilter;
  $('cats').replaceChildren(...unique.map(category => new Option(category)));
}

function renderTags() {
  const container = $('tagChips');
  const chips = tags.map((tag, index) => {
    const chip = document.createElement('span');
    chip.className = 'tag-chip';
    const text = document.createElement('span');
    text.textContent = tag;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.setAttribute('aria-label', `Remove ${tag} tag`);
    remove.textContent = '×';
    remove.addEventListener('click', () => {
      tags.splice(index, 1);
      renderTags();
      renderDocument();
      $('tagInput').focus();
    });
    chip.append(text, remove);
    return chip;
  });
  container.replaceChildren(...chips);
}

function addTagsFromInput() {
  const input = $('tagInput');
  const additions = input.value.split(',').map(value => value.trim()).filter(Boolean);
  for (const addition of additions) {
    if (!tags.some(tag => tag.toLowerCase() === addition.toLowerCase())) tags.push(addition);
  }
  input.value = '';
  renderTags();
}

function readSpecs() {
  const raw = $('productSpecs').value.trim();
  if (!raw) return {};
  const parsed = JSON.parse(raw);
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('Specs must be a JSON object.');
  }
  return parsed;
}

function formDocument() {
  const form = $('form');
  const document = {};
  if (selectedProduct?._id) document._id = selectedProduct._id;
  Object.assign(document, {
    name: form.elements.name.value.trim(),
    category: form.elements.category.value.trim(),
    price: form.elements.price.value ? Number(form.elements.price.value) : '',
    stock: form.elements.stock.value ? Number(form.elements.stock.value) : '',
    tags: [...tags],
    specs: readSpecs()
  });
  return document;
}

function renderDocument() {
  try {
    $('json').textContent = JSON.stringify(formDocument(), null, 2);
  } catch {
    $('json').textContent = 'Enter a valid JSON object in Specs to preview this document.';
  }
}

function fillForm(item) {
  const form = $('form');
  form.elements.name.value = item.name ?? '';
  form.elements.category.value = item.category ?? '';
  form.elements.price.value = item.price ?? '';
  form.elements.stock.value = item.stock ?? '';
  $('productSpecs').value = JSON.stringify(item.specs || {}, null, 2);
  tags = Array.isArray(item.tags) ? item.tags.map(String) : [];
  renderTags();
}

function selectProduct(item) {
  selectedId = item._id ?? null;
  selectedProduct = item;
  fillForm(item);
  $('formTitle').textContent = 'Edit product';
  $('saveBtn').textContent = 'Save product';
  $('delBtn').hidden = false;
  autoSelectFirstProduct = false;
  setMessage();
  renderDocument();
  document.querySelectorAll('#rows tr').forEach(row => {
    const selected = row.dataset.name === item.name;
    row.classList.toggle('selected', Boolean(selected));
    if (selected) row.setAttribute('aria-selected', 'true');
    else row.removeAttribute('aria-selected');
  });
}

function startNewProduct() {
  selectedId = null;
  selectedProduct = null;
  autoSelectFirstProduct = false;
  tags = [];
  $('form').reset();
  renderTags();
  $('formTitle').textContent = 'Add product';
  $('saveBtn').textContent = 'Save product';
  $('delBtn').hidden = true;
  setMessage();
  renderDocument();
  document.querySelectorAll('#rows tr').forEach(row => {
    row.classList.remove('selected');
    row.removeAttribute('aria-selected');
  });
  $('productName').focus();
}

$('form').addEventListener('input', event => {
  if (event.target.id !== 'tagInput') renderDocument();
});

$('tagInput').addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ',') {
    event.preventDefault();
    addTagsFromInput();
    renderDocument();
  } else if (event.key === 'Backspace' && !event.target.value && tags.length) {
    tags.pop();
    renderTags();
    renderDocument();
  }
});

$('tagInput').addEventListener('blur', () => {
  if ($('tagInput').value.trim()) {
    addTagsFromInput();
    renderDocument();
  }
});

$('form').addEventListener('submit', async event => {
  event.preventDefault();
  addTagsFromInput();

  let specs;
  try {
    specs = readSpecs();
  } catch (error) {
    setMessage(error.message, 'error');
    $('productSpecs').focus();
    return;
  }

  const form = event.currentTarget;
  const body = {
    name: form.elements.name.value.trim(),
    category: form.elements.category.value.trim(),
    price: Number(form.elements.price.value),
    stock: Number(form.elements.stock.value),
    tags: [...tags],
    specs
  };

  try {
    const isUpdate = selectedId !== null;
    const saved = isUpdate
      ? await api(`/products/${encodeURIComponent(selectedId)}`, { method: 'PUT', body: JSON.stringify(body) })
      : await api('/products', { method: 'POST', body: JSON.stringify(body) });
    await loadCategories();
    selectedId = saved._id ?? selectedId;
    selectProduct(saved);
    await loadProducts();
    setMessage(`${isUpdate ? 'Updated' : 'Added'} “${saved.name}”.`, 'success');
  } catch (error) {
    setMessage(error.message, 'error');
  }
});

$('delBtn').addEventListener('click', async () => {
  if (selectedId === null) {
    setMessage('This record has no MongoDB id, so it cannot be deleted from the collection.', 'error');
    return;
  }
  if (!confirm('Delete this product? This cannot be undone.')) return;

  try {
    await api(`/products/${encodeURIComponent(selectedId)}`, { method: 'DELETE' });
    await loadCategories();
    selectedId = null;
    selectedProduct = null;
    await loadProducts();
    if (!selectedId) startNewProduct();
    setMessage('Product deleted.', 'success');
  } catch (error) {
    setMessage(error.message, 'error');
  }
});

$('newBtn').addEventListener('click', startNewProduct);
$('cancelBtn').addEventListener('click', startNewProduct);
$('search').addEventListener('input', () => {
  window.clearTimeout(searchTimer);
  searchTimer = window.setTimeout(() => loadProducts().catch(showLoadError), 160);
});
$('category').addEventListener('change', () => loadProducts().catch(showLoadError));

Promise.all([loadCategories(), loadProducts()]).catch(showLoadError);
