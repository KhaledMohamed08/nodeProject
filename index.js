const express = require('express')
const app = express()
const productRoutes = require("./Routes/products")

app.use(express.json());

app.use("/products", productRoutes)

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message })
})
app.use("*", (req, res, next) => {
    res.status(404).json({ message: "404 NOT FOUND" })
})
app.listen(3000)