const Router = require("express");
const express= require("express");
const config=require("config");
const jwt=require("jsonwebtoken");
const authMiddleware = require("../middleware/auth.middleware");
const status = require("../status.js");

const authRouter = new Router();

//Т.к. по умолчанию Express не может распарсить json строку то делаем парсер
const jsonParser = express.json()



authRouter.use('/login', jsonParser, (req,res)=>{

  console.log("you are enter to login req.method=",req.method)  
    // if(req.method != "OPTIONS"){
    // console.log("req.user =", req.user, " req.method =", req.method)
  let ob = {}
  if(req.body.password === config.get("password")){
    ob.permission = true;
    const token=jwt.sign({password: config.get("password")}, config.get("secretKey"), {expiresIn:"1h"})
    ob.token= token;
  }else{
    ob.permission = false
  }  

    // }
    res.json(JSON.stringify({permission: ob, status: status}))
    // res.json((JSON.stringify(res.body)))
})



authRouter.use('/auth', authMiddleware, (req,res)=>{
  console.log("req.permission =", req.permission)
  if(req.permission){
    console.log("req.permission =", req.permission)
    
    
  }
  
  console.log("here method = ",req.method);
  
  // if(req.decoded){
  //   res.json(req.decoded.password)
    
  // }
  // res.json({permission: req.permission})
  res.json({permission: {permission: req.permission}, status: status})
})




module.exports = authRouter