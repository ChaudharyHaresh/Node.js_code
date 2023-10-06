const mongoose=require("mongoose");

const orderitemsSchema=new mongoose.Schema({
    id:{type:String,required:true},
    product:{type:mongoose.Schema.Types.ObjectId,required:true},
    quantity:{type:Number,required:true},
    
});
const orderitems=mongoose.model("orderitems",orderitemsSchema);

module.exports=orderitems;