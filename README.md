# AdbAssignment

Advanced Databases Group Assignment NoSQL Databases

## Product Catalogue: MongoDB Atlas prototype (BIT3360)

A small product catalogue showing Create, Read (search + filter), Update and Delete on a document database.

**Stack:** MongoDB Atlas, Node.js + Express, plain HTML/CSS/JS, MongoDB Compass (to inspect data).

```
Browser (public/)  ->  Express API (server.js)  ->  MongoDB Atlas
```
The browser never sees the database credentials. The Atlas Data API was retired in September 2025, so a small backend is used instead.

## Setup
1. Atlas: create a free cluster, a database user, and allow your IP under Network Access.
2. Copy the connection string (Connect > Drivers).
3. `cp .env.example .env` and paste the string into `MONGODB_URI` (replace `<password>`).
4. `npm install`
5. `npm run seed`   (loads 12 sample products into `catalogue.products`)
6. `npm start`  then open http://localhost:3000
7. Optional: connect Compass with the same string to see the `catalogue.products` collection.

## Data structure
One collection, `products`. Each document:
```json
{
  "_id": "ObjectId",
  "name": "Samsung Galaxy A15",
  "category": "Phones",
  "price": 2800,
  "stock": 14,
  "tags": ["android", "budget"],
  "specs": { "storage": "128GB", "ram": "4GB", "battery": "5000mAh" },
  "createdAt": "Date"
}
```
Different categories carry different `specs` fields (phones: storage/ram; clothing: size/color), with no empty columns and no joins. In MySQL this would need nullable columns or an extra attribute table.

## API
| Method | Route | Purpose |
|---|---|---|
| GET | /api/products?search=&category= | Read, search, filter |
| GET | /api/products/:id | Read one |
| POST | /api/products | Create |
| PUT | /api/products/:id | Update |
| DELETE | /api/products/:id | Delete |
| GET | /api/categories | Distinct categories |

## Compass demo queries
```
{ "price": { "$lt": 1000 } }
{ "tags": "budget" }
{ "specs.ram": "8GB" }
{ "stock": 0 }
```
