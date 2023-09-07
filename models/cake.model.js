const mongoose=require("mongoose")
const Schema=mongoose.Schema
const todoSchema=new Schema({
    image:String,
    title:String
    
})

const Todo=mongoose.model('collection1',todoSchema) //collection name
module.exports=Todo