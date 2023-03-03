
 const express = require('express')
 const app = express()
 require("dotenv").config()
//  var bodyParser = require('body-parser')
//  app.use(bodyParser.json)

const ordersRoutes=require('./routes/orders')
//  const UsersRoutes=require('./routes/users')

 app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.body);
     next();})

app.use("/orders",ordersRoutes)
    
    //  app.use("/users",UsersRoutes)




 app.listen(process.env.app_port ,()=>{
    console.log("server started on ",process.env.app_port)
 })

// require("dotenv").config();
// const express = require("express");
// const app = express();
// const userRouter = require("./api/user/user.router");

// app.use(express.json());

// app.use("/api/users", userRouter);


// app.listen(process.env.app_port ,()=>{
//     console.log("server started on ",process.env.app_port)
// })