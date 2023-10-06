const express=require("express");
postData = express.Router();

const mongodb=require("mongodb");
const mongoClient=mongodb.MongoClient;


const url = 'mongodb+srv://admin:admin@cluster0.bvwlyo9.mongodb.net/test'

postData.post("/", (req, res) => {
    console.log("inside postdata");
    console.log(req.body);
    mongoClient.connect(url,(err,connection)=>{
        if(err) throw err;
        else
        {
            const db=connection.db("node_8");
            db.collection("stud").insertOne({
                                        "isbn":req.body.isbn,
                                     "title":req.body.title
            },(err,arr)=>{
                
                if(err) throw err;
                else{
                    // console.log("msg" = succesful);/
                    res.json({"msg":"succesful"});
                }
                                                        
            })
        }
    })
  });

  module.exports = postData;
