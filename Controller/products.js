const db = require("../Utils/db")


function getAllProducts() {
    var products = db.execute("SELECT * FROM products")
    return products
}
function createNewProduct(product) {
    var newProduct = db.execute("INSERT INTO products(name, image, description, seller_id) VALUES(?, ?, ?, ?)", [product.name, product.image, product.description, product.seller_id]);
    return newProduct
}
function deleteProduct(id) {
    var products = db.execute("DELETE FROM products WHERE id=?", [id])
    return products
}
function updateProduct(id) {

}
module.exports = { getAllProducts, createNewProduct, deleteProduct }