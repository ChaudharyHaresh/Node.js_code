const express=require("express");
const insertData=express.Router();
const mongoose=require("mongoose");
const products=require("../models/products");
const category=require("../models/category")

insertData.post("/productsinsert",(req,res)=>{
    products.insertMany(req.body,(err,result)=>{
        if(err) throw err;
        else
        {
            res.json({msg:"insert success...!!!"})
        }
    })
})

insertData.get("/productsget",(req,res)=>{
    products.find({},(err,arr)=>{
        if(err) throw err;
        else{
            res.send(arr);
        }
    })
})

module.exports=insertData;























// const { Router } = require("express");
// const express=require("express");
// const insertData=express.Router();
// const mongoose=require("mongoose");
// const products=require("../models/products");

// insertData.post("/productinsert",(req,res)=>{
//     products.insertMany(req.body,(err,result)=>{
//         if(err) throw err;
//         else
//         {
//             res.json({msg:"insert success...!!!"})
//         }
//     })
// })

// insertData.get("/productget",(req,res)=>{
//     products.find({},(err,arr)=>{
//         if(err) throw err;
//         else{
//             res.send(arr);
//         }
//     })
// })

// Router.post('/',async(req,res)=>{
//     const category=await Category.findById(req.body.category);
//     if(!category) return res.status(400).send("Invalid category");
//     let product =new product({

//         name:req.body.name,
//         description:req.body.description,
//         image:req.body. image,
//         images:req.body. images,
//         brand:req.body.brand,
//         price:req.body.price,
//         category:req.body.category,
//         countinStock:req.body. countinStock,
//         rating:req.body.rating,
//         inFeatured:req.body.inFeatured,
//     });

//     product =await product.save();
//     if(!product) return res.status(500).send("The product cannot be created");
//     res.sen(product);
// })

// module.exports=insertData;
