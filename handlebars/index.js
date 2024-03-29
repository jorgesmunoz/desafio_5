const Contenedor = require("./contenedor.js");
const { log } = require("console");
const express = require("express");
const { engine } = require("express-handlebars");
const fs = require("fs");
// const router = express.Router();
const productos = require("./routes/productos.js");

// create closure
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/productos", productos);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
