const express=require("express");
const insertData=express.Router();
const mongoose=require("mongoose");
const orderitems=require("../models/orderitems");

insertData.post("/orderitemsinsert",(req,res)=>{
    orderitems.insertMany(req.body,(err,result)=>{
        if(err) throw err;
        else
        {
            res.json({msg:"insert success...!!!"})
        }
    })
})

insertData.get("/orderitemsget",(req,res)=>{
    orderitems.find({},(err,arr)=>{
        if(err) throw err;
        else{
            res.send(arr);
        }
    })
})

module.exports=insertData;
