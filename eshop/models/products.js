const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    // id:{type:String,required:true},
    name:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    images:{type:String,required:true},
    brand:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:mongoose.Schema.Types.ObjectId,required:true},
    countinStock:{type:Number,required:true},
    rating:{type:Number,required:true},
    inFeatured:{type:Boolean,required:true},
    dateCreated:{type:Date,required:true},

    // password:{type:String,required:true},
    // isAdmin:{type:Boolean,required:true},
    // email:{type:String,required:true},

});

productSchema.virtual("id").get(function (){
    return this ._id.toHexString();
});

productSchema.set("toJSON",{
    virtual: true,
});

const products=mongoose.model("products",productSchema);
// const products=mongoose.model("products",userSchema);

module.exports=products;