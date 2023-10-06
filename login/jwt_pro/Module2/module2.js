const express = require("express");
const tokenobj=require("../middleware/middleware");
module2 =express.Router();

module2.get("/",[middleware],(req,res)=>{
    // const headtoken =req.headers.token;
    // if(headtoken == tokenobj.token){
    res.json({"msg":"inside module2 success","token":tokenobj.token});
    // }
    // else
    // {
    // res.json({"msg":"inside module2 fail"});
    // }
});

module.exports =module2; 