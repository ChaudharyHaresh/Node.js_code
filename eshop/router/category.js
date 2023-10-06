const express=require("express");
const insertData=express.Router();
const mongoose=require("mongoose");
const category=require("../models/category");

insertData.post("/categoryinsert",(req,res)=>{
    category.insertMany(req.body,(err,result)=>{
        if(err) throw err;
        else
        {
            res.json({msg:"insert success...!!!"})
        }
    })
})

insertData.get("/categoryget",(req,res)=>{
    category.find({},(err,arr)=>{
        if(err) throw err;
        else{
            res.send(arr);
        }
    })
})

module.exports=insertData;
