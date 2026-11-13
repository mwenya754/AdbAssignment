require('dotenv').config();
const { MongoClient } = require('mongodb');
const data = require('./sample-data.json');

(async () => {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const col = client.db(process.env.DB_NAME || 'catalogue').collection('products');
  await col.deleteMany({});
  const now = new Date();
  const r = await col.insertMany(data.map(d => ({ ...d, createdAt: now })));
  await col.createIndex({ category: 1 });
  console.log(`Inserted ${r.insertedCount} products.`);
  await client.close();
})().catch(e => { console.error(e.message); process.exit(1); });
