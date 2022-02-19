const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    username: {type:String,required:true},
    text: {type:String,required:true},
    createdAt: {type:Date,required:true,default:() => Date.now(),immutable:true},
    updatedAt: {type:Date,required:false,default:() => Date.now()}
})

module.exports = mongoose.model("Post",postSchema);