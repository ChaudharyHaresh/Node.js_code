const express = require("express");
const multer = require("multer");
const app = express();
const port=5050;

app.post("/upload",(req,res) =>{
    res.json("file upload")
});

app.listen(port,()=>{
    console.log("server is upload");
})