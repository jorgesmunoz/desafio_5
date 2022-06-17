const Contenedor = require("../contenedor.js");
const { log } = require("console");
const fs = require("fs");

let product = new Contenedor("productos.txt");

const productos = [];

// Save some objects
(async () => {
  await product.save({ title: "manzanas", price: 3.5 });
  await product.save({ title: "bananas", price: 11.0 });
  await product.save({ title: "peras", price: 15.0 });
  await product.save({ title: "tomates", price: 13.0 });
})();

const getProductos = async (req, res) => {
  const ans = await product.getAll();

  res.render("inicio", {
    productos: ans,
  });
};

const postProducto = async (req, res) => {
  productos.push(req.body);

  const { title, price } = req.body;
  await product.save({ title: title, price: price });

  res.redirect("/datos");
};

module.exports = {
  getProductos,
  postProducto,
};
