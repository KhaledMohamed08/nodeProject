const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require("./Routes/products");
const sellerRoutes = require("./Routes/seller");

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/seller", sellerRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
app.use("*", (req, res, next) => {
  res.status(404).json({ message: "404 NOT FOUND" });
});
app.listen(3000);
