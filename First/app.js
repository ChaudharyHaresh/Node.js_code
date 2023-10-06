const express =require("express");
const app=express();
const port=5050;

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(port,()=>{
    console.log("server is listning");
})

// app.listen(port,()=>{
//     console.log(`server listening on ${port}`)