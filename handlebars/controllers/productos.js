const Contenedor = require("../contenedor.js");
const { log } = require("console");
const fs = require("fs");

let product = new Contenedor("productos.txt");

const personas = [];

// Save objects
(async () => {
  console.log(await product.save({ title: "manzanas", price: 3.5 }));
  console.log(await product.save({ title: "bananas", price: 11.0 }));
  console.log(await product.save({ title: "peras", price: 15.0 }));
  console.log(await product.save({ title: "tomates", price: 13.0 }));
})();

const getProductos = (req, res) => {
  (async () => {
    const ans = await product.getAll();

    res.render("datos", {
      productos: ans,
    });
  })();
  // res.send("<h1>Heading 1 goes here</h1>");
};

const postProducto = (req, res) => {
  personas.push(req.body);
  console.log(personas);
  (async () => {
    const { title, price } = req.body;
    console.log();
    const ans = await product.save({ title: title, precio: price });
    // return res.status(200).json(await product.getById(parseInt(ans)));
  })();
  res.redirect("/datos");
};

module.exports = {
  getProductos,
  postProducto,
};
