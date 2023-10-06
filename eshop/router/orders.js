const express=require("express");
const insertData=express.Router();
const mongoose=require("mongoose");
const orders=require("../models/orders");

insertData.post("/ordersinsert",(req,res)=>{
    orders.insertMany(req.body,(err,result)=>{
        if(err) throw err;
        else
        {
            res.json({msg:"insert success...!!!"})
        }
    })
})

insertData.get("/ordersget",(req,res)=>{
    orders.find({},(err,arr)=>{
        if(err) throw err;
        else{
            res.send(arr);
        }
    })
})

module.exports=insertData;
