const express = require("express");
const ejs = require("ejs");
var app = express();

app.set("view engine","ejs");

app.get("/",(req, res)=>{
    var model ={ x: 1000, y: 20};
    res.render("index",model);
});

app.get("/login",(req, res)=>{
    let model = { uname: "qode", upwd: "qode@123"};
    res.render("login",model);
});

app.get("/student", (req, res)=>{
    let model ={
        studentId: "S011",
        studentName: "Ramesh",
        studentMarks: 40,
        subject:[
            {name: "math", marks: "54"},
            {name: "sai", marks: "53"},
            {name: "guj", marks: "52"},
        ],
    };
    res.render("student",model);
})

app.listen(5151, () =>{
    console.log("server started at port no. 5151");
});