const express = require("express");
const tokenobj=require("../middleware/middleware");
module3 =express.Router();

module3.get("/",(req,res)=>{
    const headtoken =req.headers.token;
    if(headtoken == tokenobj.token){
    res.json({"msg":"inside module3 success","token":tokenobj.token});
    }
    else
    {
    res.json({"msg":"inside module3 fail"});
    }
});

module.exports =module3;