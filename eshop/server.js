const express=require("express");
const app=express();
// const port=3300;
const morgan=require("morgan");
const mongoose=require("mongoose");
const cors=require("cors");

require("dotenv/config")
app.use(express.json());
app.use(morgan("tiny"));

app.use(cors());
app.options("*", cors());

mongoose.pluralize(null);
mongoose.set("strictQuery",true);


mongoose
.connect(process.env.CONNECTION_STRING,
    {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("connected!"))
.catch((err)=>{
    console.log(err);
});


const users=require("./router/users");
app.use("/users", users);

const products=require("./router/products");
app.use("/products", products);

const category=require("./router/category");
app.use("/category", category);

const orderitems=require("./router/orderitems");
app.use("/orderitems", orderitems);

const orders=require("./router/orders");
app.use("/orders", orders);


const port =process.env.port;
app.listen(port,()=>{
    console.log(`server connected on port ${port}`);
});
