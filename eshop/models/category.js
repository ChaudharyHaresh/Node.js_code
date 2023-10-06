const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    color:{type:String,required:true},
    icon:{type:String,required:true},
    image:{type:String,required:true},

});
const category =mongoose.model("category",categorySchema);

module.exports = category;