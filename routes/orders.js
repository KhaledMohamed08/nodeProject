const express=require('express')
var fs=require('fs');
const db= require('../utlis/db')

const validator=require("fastest-validator")


var router=express.Router();
const { updateorderById,createorder, getorderById ,getAllorders,deleteorderbyid} =require("../controllers/orders");
const { error } = require('console');
 



router.patch("/:id",(req,res,next)=>{
    var { id } = req.params;
    var { name } = req.body;

 updateorderById(id,name).then(([row])=>{
    res.status(200).json(row)

}).catch((err)=>{
    
     res.status(422).json({message:err.message})
})


})


 




router.post("/",(req,res,next)=>{
    var order=req.body;

    

createorder(order).then(([row])=>{
    res.status(200).json(row)


    
}).catch((err)=>{
   
        
     res.status(422).json({message:err.message})
})

})




router.get("/:id",(req,res,next)=>{
    var { id } = req.params
    getorderById(id).then(([row])=>{
        res.status(200).json(row)

    }).catch((err)=>{
        res.status(500).json({message:err.message})
    })
})
router.get("/",(req,res,next)=>{
    getAllorders().then(([row])=>{
        res.status(200).json(row)
    }).catch((err)=>{
        res.status(500).json({message:err.message});
    })
    
     })

     router.delete("/:id",(req,res,next)=>{
             var { id } = req.params;
             deleteorderbyid(id).then(([row])=>{
                res.status(200).json(row)
            }).catch((err)=>{
                res.status(500).json({message:err.message});
            })
            
             
    })

     module.exports = router ;


