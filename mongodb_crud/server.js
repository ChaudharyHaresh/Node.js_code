const express =require("express")
const app = express();
const PORT = 5050;


app.use(express.json());

app.get("/",(req,res)=>{
    res.json({msg:"hello"})
})

const getData = require("./getData/getData");
app.use("/getData",getData);

const postData = require("./postData/postData");
app.use("/postData",postData);

const putData = require("./putData/putData");
app.use("/putData",putData);

const deleteData = require("./deleteData/deleteData");
app.use("/deleteData",deleteData);

app.listen(PORT,()=>{
    console.log(`server listening to port ${PORT}`);
});
