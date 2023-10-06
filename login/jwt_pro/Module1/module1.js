const express = require("express");
const middleware =require("../middleware/middleware")
module1 =express.Router();

module1.get("/",[middleware],(req,res)=>{
        res.json({"msg":"inside module1 success"});
// const tokenObj=require("../token/token");


// module1.get("/",(req,res)=>{
//     const headtoken =req.headers.token;
//     if(headtoken == tokenobj.token){
//     }
//     else
//     {
//     res.json({"msg":"inside module1 fail"});
//     }
});

module.exports =module1;


