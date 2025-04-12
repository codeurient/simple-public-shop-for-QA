const mysql = require("mysql2/promise");
const fs = require("fs");

async function insertProducts() {


  let rawdata = fs.readFileSync("data/products.json");
  let products = JSON.parse(rawdata);

  for (const product of products) {
    const {
      name,
      description,
      price,
      category,
      manufacturer,
      freeShipping,
      imageUrl,
    } = product;
    const sql = `INSERT INTO products (name, description, price, category, manufacturer, freeShipping, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      name,
      description,
      price,
      category,
      manufacturer,
      freeShipping,
      imageUrl,
    ];
    await connection.execute(sql, values);
  }

  await connection.end();
}

insertProducts().catch(console.error);
