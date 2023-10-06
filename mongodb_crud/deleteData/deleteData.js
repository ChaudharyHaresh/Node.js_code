const express=require("express");
deleteData = express.Router();


const mongodb=require("mongodb");
const mongoClient=mongodb.MongoClient;


const url = 'mongodb+srv://admin:admin@cluster0.bvwlyo9.mongodb.net/test'

deleteData.delete
("/", (req, res) => {
    console.log("inside deletedata");
    mongoClient.connect(url,(err,connection)=>{
        if(err) throw err;
        else
        {
            const db=connection.db("node_8");
            db.collection("").deleteMany({sno:req.body.sno},
                (err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({update:"success"});
                    }
                })
        }
    })
  });

  module.exports = deleteData;