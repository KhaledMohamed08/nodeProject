const express = require('express')
const router = express.Router();
const { getAllProducts, createNewProduct, deleteProduct ,updateProduct } = require("../Controller/products")


router.get('/', (req, res) => {
    getAllProducts().then(([ele]) => {
        res.status(200).json(ele)
    }).catch((err) => {
        res.status(500).json({ message: err.message })
    })
})
router.post('/', (req, res)=>{
    var product = req.body;
    createNewProduct(product).then(([ele])=>{
        res.status(200).json(ele)
    }).catch((err)=>{
        res.status(422).json({message: err.message})
    })
})
router.delete("/:id", (req, res)=>{
    var {id} = req.params;
    deleteProduct(id).then(([ele])=>{
        res.status(200).json(ele)
    }).catch((err)=>{
        res.status(500).json({message: err.message})
    })
})
router.patch("/:id", (req, res)=>{
    var {id} = req.params;
    var {name,image,description,seller_id} = req.body
  
    updateProduct(id,name,image,description,seller_id)
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch(() => {
      res.status(500).json({ message: err.message });
    });
});


module.exports = router;