const db = require("../Utils/db");

function getAllseller() {
  return db.execute("SELECT * FROM `seller`");
}

function createNewseller(seller) {
  return db.execute("INSERT INTO seller(name) Values(?)", [seller.name]);
}

function deleteseller(id) {
  return db.execute("DELETE FROM seller WHERE id=?", [id]);
}

function updatesellerById(id, name) {
    return db.execute("UPDATE seller SET name=? WHERE id=?",[name,id])
}

module.exports = { getAllseller, createNewseller, deleteseller,updatesellerById};
