const express = require("express");
const app=express();
const port=5050;

app.use(express.json());

app.get("/",(req,res)=>
{
    res.json({msg:"hello"})
});
const login=require("./login")
app.use("/login",login)

const modul1=require("./modul1")
app.use("/modul1",modul1)

const modul2=require("./modul2")
app.use("/modul2",modul2)

const modul3=require("./modul3")
app.use("/modul3",modul3)

app.listen(port,()=>
{
    console.log(`server listing ${port}`)

});
