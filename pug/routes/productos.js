const express = require("express");
const router = express.Router();
const { getProductos, postProducto } = require("../controllers/productos.js");

router.get("/", getProductos);
router.post("/", postProducto);

module.exports = router;
