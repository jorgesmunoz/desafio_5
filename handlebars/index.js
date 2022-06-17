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

app.use("/datos", productos);

// app.use("/", router);

// router.get("/api/productos/:id", (req, res) => {
//   (async () => {
//     if (isNaN(parseInt(req.params.id))) {
//       return res.status(400).json({ error: "El parametro no es numerico" });
//     }

//     if ((await product.getById(parseInt(req.params.id))) === null) {
//       return res.status(400).json({ error: "El producto no se encuentra" });
//     } else {
//       res.status(200).json(await product.getById(parseInt(req.params.id)));
//     }
//   })();
//   // res.send("<h1>Heading 1 goes here</h1>");
// });

// router.post("/api/productos/", (req, res) => {
//   (async () => {
//     const { producto, precio } = req.body;
//     const ans = await product.save({ title: producto, precio: precio });
//     return res.status(200).json(await product.getById(parseInt(ans)));
//   })();
// });

// router.put("/api/productos/:id", (req, res) => {
//   (async () => {
//     const { producto, precio } = req.body;

//     const id = parseInt(req.params.id);

//     if (isNaN(id)) {
//       return res.status(400).json({ error: "El parametro no es numerico" });
//     }

//     const ans = await product.getById(id);

//     if (ans === null) {
//       return res.status(400).json({ error: "El producto no se encuentra" });
//     }
//     if (producto !== undefined) {
//       ans["title"] = producto;
//     }

//     if (precio !== undefined) {
//       ans["price"] = precio;
//     }

//     const data = {
//       id: id,
//       producto: ans["title"],
//       precio: ans["price"],
//     };

//     const answer = await product.put(data);
//     return res.status(200).json(await product.getById(parseInt(answer)));
//   })();
// });

// router.delete("/api/productos/:id", (req, res) => {
//   (async () => {
//     if (isNaN(parseInt(req.params.id))) {
//       return res.status(400).json({ error: "El parametro no es numerico" });
//     }

//     const ans = await product.getById(parseInt(req.params.id));

//     if (ans === null) {
//       return res.status(400).json({ error: "El producto no se encuentra" });
//     } else {
//       return res
//         .status(200)
//         .json(await product.deleteById(parseInt(req.params.id)));
//     }
//   })();
// });

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
