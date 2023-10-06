const express =require("express");
const jwt=require("jsonwebtoken");
const tokanobj=require("../token/token");
login =express.Router();

login.get("/login",(req,res)=>{
    res.json({"msg":"inside login"})
    console.log("hello");
});

login.post("/post",(req,res)=>{
    const uname =req.body.uname;
    const upwd =req.body.upwd;
 
    if(uname =="admin" && upwd =="admin123")
    {
        const token =jwt.sing({uname:uname,upwd:upwd},"skill");
        tokanobj.token=token;
        res.json({login:"success",token:token})
    }
    else
    {
        res.json({login:"fail"})
    }
});



module.exports =login;