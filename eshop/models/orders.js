const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    id:{type:String,required:true},
    orderitems:{type:String,required:true},
    shippingAddress1:{type:String,required:true},
    shippingAddress2:{type:String,required:true},
    city:{type:String,required:true},
    zip:{type:String,required:true},
    country:{type:String,required:true},
    phone:{type:Number,required:true},
    status:{type:String,required:true},
    totalPrice:{type:Number,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,required:true},
    dateOrdered:{type:Date,required:true},

    
});
const orders=mongoose.model("orders",orderSchema);

module.exports=orders;
