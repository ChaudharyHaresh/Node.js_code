const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");

const data=require("./data");
const User=require("./userModel");

mongoose.set("strictQuery",true);

const port=3300;
app.use(express.json()) ;
app.use(cors());

app.get("/",(req,res)=>{
    res.json({msg:"hello"});
})

mongoose
.connect("mongodb+srv://admin:admin@cluster0.bvwlyo9.mongodb.net/student?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("connected!"))
.catch((err)=>{
    console.log(err);
});

app.post("/insert_records",(req,res)=>{
    console.log(data.users);
    const result=User.insertMany(data.users);
    res.send(result);
});


app.listen(port,()=>{
    console.log(`server connected on port ${port}`);
});









// const express =require("express");
// const cors =require("cors");
// const mongoose =require("mongoose");

// const { appendFile } = require("fs");

// const data =require("./data");
// const User =require("./userModel");


// mongoose.set("strictQuery",true);

// const app = express();
// const PORT = 3300;
// app.use(cors());


// app.use(express.json());

// app.get("/",(req,res)=>{
//     res.json({msg:"hello"})
// })

// mongoose
//     .connect("mongodb://localhost:27017/newskill",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

// .then (()=> console.log("connected!"))
// .catch((err)=>{
//     console.log(err);
// })

// // app.post("/insert_records",(req,res)=>{
// //     console.log(data.users);
// //     const result =User.insertMany(data.users);
// //     res.send(result);
// // });


// app.listen(PORT,()=>{
//     console.log(`server listening to port ${PORT}`);
// });
