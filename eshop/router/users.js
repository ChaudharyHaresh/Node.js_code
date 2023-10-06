const express=require("express");
const mongoose=require("mongoose");
const User=require("../models/users");

const insertData=express.Router();
insertData.use(express.json())

insertData.post("/userinsert",(req,res)=>{
    User.insertMany(req.body,(err,result)=>{
        if(err) throw err;
        else
        {
            res.json({msg:"insert success...!!!"})
        }
    })
})

insertData.get("/userget",(req,res)=>{
    User.find({},(err,arr)=>{
        if(err) throw err;
        else{
            res.send(arr);
        }
    })
})

module.exports=insertData;
