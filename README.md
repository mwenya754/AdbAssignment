# AdbAssignment

Advanced Databases Group Assignment NoSQL Databases

## Product Catalogue: MongoDB Atlas prototype

A small product catalogue showing Create, Read (search + filter), Update and Delete on a document database.

**Stack:** MongoDB Atlas, Node.js + Express, plain HTML/CSS/JS, MongoDB Compass (to inspect data).

```
Browser (public/)  ->  Express API (server.js)  ->  MongoDB Atlas
```
The browser never sees the database credentials. The Atlas Data API was retired in September 2025, so a small backend is used instead.

## Setup

### 1. Prepare MongoDB Atlas

1. In your Atlas project, create a free cluster or reuse an existing cluster.
2. Open **Security > Database & Network Access > Database Users** and add a password-authenticated database user. Give the app user the built-in `readWrite` role scoped to the `catalogue` database. Leave the collection blank to allow access to collections in that database. The app does not need the `atlasAdmin` role.
3. Open **Network Access > IP Access List** and add your current IP address. Reuse an active entry if it already exists; avoid allowing access from all IPs (`0.0.0.0/0`).
4. On the cluster, choose **Connect > Drivers**, select **Node.js Driver**, and copy the connection string.

### 2. Configure the app

1. Create the local environment file once:
   ```sh
   cp .env.example .env
   ```
2. Put the Atlas driver connection string in `MONGODB_URI` in `.env`. Replace the username and password placeholders with the database user's values, including removing the placeholder angle brackets. If the password contains reserved URI characters such as `@`, `:`, `/`, `?`, or `#`, percent-encode them.
3. Set `DB_NAME=catalogue` and `PORT=3000`. Keep `.env` local: it contains credentials, is ignored by Git, and must not be committed or pasted into chat.

### 3. Install and run

```sh
npm install
npm start
```

Open <http://localhost:3000>. The server connects to Atlas before it starts listening. If it cannot connect, check the URI, database username and password, password encoding, and Atlas IP access list.

### Optional: load sample products

```sh
npm run seed
```

This inserts 12 sample products into `catalogue.products`, but first deletes every document already in that collection. Run it only when the collection is empty or its contents are disposable.

### Optional: inspect data with Compass

Connect MongoDB Compass to the same Atlas connection string and open the `catalogue.products` collection.

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
