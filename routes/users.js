const express=require('express')
var fs=require('fs');
const db= require('../utlis/db')
// const bcryptjs= require('bcryptjs')
const {createuser ,getallusers} =require("../controllers/users");
// const { checkToken } = require("../auth/token_validation");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 
 var router=express.Router();


  

router.post('/signup',(req,res,next)=>{
    var user=req.body

    createuser(user).then(([row])=>{
        res.status(200).json(row)
    
    }).catch((err)=>{
        res.status(422).json({message:err.message})
    })

}),

   


router.get('/',(req,res,next)=>{
    getallusers().then(([row])=>{
        res.status(200).json(row)
    
    }).catch((err)=>{
        res.status(422).json({message:err.message})
    })
})

router.post('/login',(req,res,next)=>{
    var user=req.body

    login(user).then(([row])=>{
        res.status(200).json(row)
    
    }).catch((err)=>{
        res.status(422).json({message:err.message})
    })

}),


module.exports = router
