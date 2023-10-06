const express=require("express");
putData = express.Router();

const mongodb=require("mongodb");
const mongoClient=mongodb.MongoClient;


const url = 'mongodb+srv://admin:admin@cluster0.bvwlyo9.mongodb.net/test'

putData.put("/", (req, res) => {
    console.log("inside getdata");
    mongoClient.connect(url,(err,connection)=>{
        if(err) throw err;
        else
        {
            const db=connection.db("node_8");
            db.collection("stud").updateOne({ "isbn":req.body.isbn},
                {$set:{"title": req.body.title}},
                (err,result)=>{
                if(err) throw err;
                else{
                    console.log(result);
                    res.json({update:"success"})
                }
            })
        }
    })
  });

  module.exports = putData;
