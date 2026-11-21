# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Students operating the catalogue and instructors reviewing the MongoDB behavior are equally important users during the Advanced Databases assignment demo.

## Product Purpose

A web prototype for a product catalogue that demonstrates Create, Read (including search and filtering), Update, and Delete with a MongoDB document database.

## Operating Context

The browser frontend sends requests to an Express API, which reads and writes the `catalogue.products` collection in MongoDB Atlas. MongoDB Compass can be used to inspect the collection. The repository includes sample products for demonstrations.

## Capabilities and Constraints

- List products, search names and tags, and filter by category.
- Create, read, update, and delete product documents.
- Product documents include name, category, price, stock, tags, and category-specific specs.
- Database credentials stay on the server in local environment configuration; the browser does not connect to MongoDB directly.
- The user requested a visual redesign that keeps the existing features.
- The redesign should support fast product editing, clear stock and search scanning, and explanation of the MongoDB document model.

## Evidence on Hand

The repository contains the current frontend, Express routes, setup instructions, and `sample-data.json` with 12 illustrative product documents. No production retailer, customer, testimonial, or brand assets are established.
