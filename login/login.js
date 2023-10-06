const express = require("express");
login =express.Router();


login.get("/",(req,res)=>{
    res.json({"msg":"inside login"})
});


    login.post("/postlogin",(req,res)=>{
    res.json({"msg":"inside post login"})
    console.log(req.body.uname);
    console.log(req.body.upwd);
});

module.exports= login;