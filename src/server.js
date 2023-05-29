const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const axios = require("axios");

const ejs = require("ejs");

port = process.env.PORT || 3000;
//El arreglo se reinicia cada que use ctrl+s por que el servidor se vuelve a ejecutar
//E inicia el arreglo desde el navegador
//Para que se guarde totalmente se debe guardar en una memoria de almacenamiento o base de datos
let products = [
  {
    id: 1,
    name: "laptop",
    price: 3000,
  },
];
//MiddleWares
app.use(morgan("dev"));
app.use(express.json());
//configurar ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

console.log(path.join(__dirname, "/public "));
/* app.use("/public", express.static("./public")); */

//Si movemos todo a una carpeta llamada src o dist o build se puede ejecutar build/public en path.join
//MiddleWares
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/products", (req, res) => {
  res.json(products);
  /* res.send("Obtaining products"); */
});

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  console.log(newProduct);
  products.push(newProduct);
  res.send("Creating product: " + JSON.stringify(newProduct));
});

app.put("/products/:id", (req, res) => {
  console.log(req.params.id);
  const newData = req.body;
  const productFound = products.find(function (product) {
    return product.id === parseInt(req.params.id);
  });

  if (!productFound)
    return res.status(404).json({
      message: "Product not found",
    });

  products = products.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );
  res.json("Product updated succesfully");
  /* res.send("Actualizing products"); */
});

app.delete("/products/:id", (req, res) => {
  console.log(req.params.id);
  const productFound = products.find(function (product) {
    return product.id === parseInt(req.params.id);
  });

  if (!productFound)
    return res.status(404).json({
      message: "Product not found",
    });
  products = products.filter((p) => p.id !== parseInt(req.params.id));
  console.log(products);
  res.sendStatus(204);

  /* res.send("Deleting products"); */
});

app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const productFound = products.find(function (product) {
    return product.id === parseInt(req.params.id);
  });

  if (!productFound)
    return res.status(404).json({
      message: "Product not found",
    });

  console.log(productFound);
  res.json(productFound);
  /* res.send("Obtaining a product"); */
});

const users = [
  {
    id: 1,
    name: "Sebas",
    numero: 10,
  },
  {
    id: 2,
    name: "Sebas2",
    numero: 101,
  },
];
app.get("/template", (req, res) => {
  const title = "Texto obtenido de la base de datos cof cof";
  const isActive = false;
  res.render("index", { title, isActive, users });
});

app.get("/posts", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  res.render("posts", {
    posts: response.data,
  });
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/users", (req, res) => {
  res.render("users");
});

app.listen(port);
console.log("Server is listening on port", port);
