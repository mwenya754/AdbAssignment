require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const client = new MongoClient(process.env.MONGODB_URI);
let products;

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const validId = id => ObjectId.isValid(id);

// Validate and shape the incoming document
function clean(b) {
  const name = String(b.name || '').trim();
  const category = String(b.category || '').trim();
  const price = Number(b.price), stock = Number(b.stock);
  if (!name || !category) return { error: 'Name and category are required.' };
  if (!(price >= 0) || !(stock >= 0) || !Number.isInteger(stock))
    return { error: 'Price must be 0 or more and stock a whole number 0 or more.' };
  const tags = Array.isArray(b.tags) ? b.tags.map(String).filter(Boolean) : [];
  const specs = b.specs && typeof b.specs === 'object' && !Array.isArray(b.specs) ? b.specs : {};
  return { doc: { name, category, price, stock, tags, specs } };
}

// READ all (with optional search + category filter)
app.get('/api/products', async (req, res) => {
  const q = {};
  if (req.query.category) q.category = req.query.category;
  if (req.query.search) {
    const rx = new RegExp(esc(req.query.search), 'i');
    q.$or = [{ name: rx }, { tags: rx }];
  }
  res.json(await products.find(q).sort({ name: 1 }).toArray());
});

app.get('/api/categories', async (_req, res) => res.json(await products.distinct('category')));

// READ one
app.get('/api/products/:id', async (req, res) => {
  if (!validId(req.params.id)) return res.status(400).json({ error: 'Invalid id.' });
  const p = await products.findOne({ _id: new ObjectId(req.params.id) });
  p ? res.json(p) : res.status(404).json({ error: 'Product not found.' });
});

// CREATE
app.post('/api/products', async (req, res) => {
  const { doc, error } = clean(req.body);
  if (error) return res.status(400).json({ error });
  doc.createdAt = new Date();
  const r = await products.insertOne(doc);
  res.status(201).json({ ...doc, _id: r.insertedId });
});

// UPDATE
app.put('/api/products/:id', async (req, res) => {
  if (!validId(req.params.id)) return res.status(400).json({ error: 'Invalid id.' });
  const { doc, error } = clean(req.body);
  if (error) return res.status(400).json({ error });
  doc.updatedAt = new Date();
  const r = await products.findOneAndUpdate(
    { _id: new ObjectId(req.params.id) }, { $set: doc }, { returnDocument: 'after' });
  r ? res.json(r) : res.status(404).json({ error: 'Product not found.' });
});

// DELETE
app.delete('/api/products/:id', async (req, res) => {
  if (!validId(req.params.id)) return res.status(400).json({ error: 'Invalid id.' });
  const r = await products.deleteOne({ _id: new ObjectId(req.params.id) });
  r.deletedCount ? res.json({ deleted: true }) : res.status(404).json({ error: 'Product not found.' });
});

app.use((err, _req, res, _next) => { console.error(err); res.status(500).json({ error: 'Server error.' }); });

client.connect().then(() => {
  products = client.db(process.env.DB_NAME || 'catalogue').collection('products');
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Running at http://localhost:${port}`));
}).catch(e => { console.error('Could not connect to MongoDB Atlas:', e.message); process.exit(1); });
