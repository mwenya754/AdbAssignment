const $ = id => document.getElementById(id);
let selectedId = null, timer;

async function api(path, opts = {}) {
  const res = await fetch('/api' + path, { headers: { 'Content-Type': 'application/json' }, ...opts });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed.');
  return data;
}

function say(text, type = '') { const m = $('msg'); m.textContent = text; m.className = type; }

// ---------- READ ----------
async function load() {
  const p = new URLSearchParams();
  if ($('search').value.trim()) p.set('search', $('search').value.trim());
  if ($('category').value) p.set('category', $('category').value);
  const items = await api('/products?' + p);
  const tbody = $('rows');
  tbody.replaceChildren();
  for (const it of items) {
    const tr = document.createElement('tr');
    if (it._id === selectedId) tr.className = 'sel';
    const cells = [it.name, it.category, it.price.toLocaleString(), it.stock];
    cells.forEach((v, i) => {
      const td = document.createElement('td');
      td.textContent = v;
      if (i >= 2) td.className = 'num';
      if (i === 3) td.classList.add(it.stock === 0 ? 'out' : it.stock < 5 ? 'low' : 'x');
      tr.append(td);
    });
    tr.onclick = () => select(it);
    tbody.append(tr);
  }
  $('empty').hidden = items.length > 0;
  $('count').textContent = `${items.length} product${items.length === 1 ? '' : 's'} shown`;
}

async function loadCategories() {
  const cats = await api('/categories');
  const keep = $('category').value;
  $('category').replaceChildren(new Option('All categories', ''), ...cats.sort().map(c => new Option(c, c)));
  $('category').value = keep;
  $('cats').replaceChildren(...cats.map(c => new Option(c)));
}

// ---------- form <-> document ----------
function specsToText(s) {
  return Object.entries(s || {}).map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`).join('\n');
}
function parseValue(v) {
  v = v.trim();
  try { return JSON.parse(v); } catch { return v; }   // numbers, true/false, ["S","M"] become real types
}
function textToSpecs(t) {
  const out = {};
  for (const line of t.split('\n')) {
    const i = line.indexOf(':');
    if (i > 0 && line.slice(i + 1).trim()) out[line.slice(0, i).trim()] = parseValue(line.slice(i + 1));
  }
  return out;
}

function select(it) {
  selectedId = it._id;
  const f = $('form');
  f.name.value = it.name; f.category.value = it.category; f.price.value = it.price;
  f.stock.value = it.stock; f.tags.value = (it.tags || []).join(', ');
  f.specs.value = specsToText(it.specs);
  $('formTitle').textContent = 'Edit product';
  $('saveBtn').textContent = 'Update product';
  $('delBtn').hidden = false;
  $('json').textContent = JSON.stringify(it, null, 2);
  say('');
  load();
}

function reset() {
  selectedId = null;
  $('form').reset();
  $('formTitle').textContent = 'Add product';
  $('saveBtn').textContent = 'Save product';
  $('delBtn').hidden = true;
  $('json').textContent = 'Select a product to see how MongoDB stores it.';
  say('');
  load();
}

// ---------- CREATE / UPDATE ----------
$('form').onsubmit = async e => {
  e.preventDefault();
  const f = e.target;
  const body = {
    name: f.name.value, category: f.category.value, price: f.price.value, stock: f.stock.value,
    tags: f.tags.value.split(',').map(t => t.trim()).filter(Boolean),
    specs: textToSpecs(f.specs.value)
  };
  try {
    const saved = selectedId
      ? await api('/products/' + selectedId, { method: 'PUT', body: JSON.stringify(body) })
      : await api('/products', { method: 'POST', body: JSON.stringify(body) });
    const verb = selectedId ? 'Updated' : 'Added';
    await loadCategories();
    select(saved);
    say(`${verb} “${saved.name}”.`, 'ok');
  } catch (err) { say(err.message, 'err'); }
};

// ---------- DELETE ----------
$('delBtn').onclick = async () => {
  if (!confirm('Delete this product? This cannot be undone.')) return;
  try {
    await api('/products/' + selectedId, { method: 'DELETE' });
    await loadCategories();
    reset();
    say('Product deleted.', 'ok');
  } catch (err) { say(err.message, 'err'); }
};

$('newBtn').onclick = reset;
$('cancelBtn').onclick = reset;
$('search').oninput = () => { clearTimeout(timer); timer = setTimeout(load, 250); };
$('category').onchange = load;

Promise.all([loadCategories(), load()]).catch(e => { $('count').textContent = 'Could not load products: ' + e.message; });
