const express=require("express");
getData = express.Router();

const mongodb=require("mongodb");
const mongoClient=mongodb.MongoClient;


const url = 'mongodb+srv://admin:admin@cluster0.bvwlyo9.mongodb.net/test'

getData.get("/", (req, res) => {
    console.log("inside getdata");
    mongoClient.connect(url,(err,connection)=>{
        if(err) throw err;
        else
        {
            const db=connection.db("node_8");
            db.collection("books").find().toArray((err,arr)=>{
                console.log(arr);
            })
        }
    })
  });

  module.exports = getData;
