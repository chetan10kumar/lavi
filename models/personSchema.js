const mongoose=require('mongoose');
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    work:{
        type:String,
        enum:["chef","manager","owner"],
    },
    address:{
        type:String,
        require:true
    },
    salary:{
        type:String,
        require:true
    }
})
//comment
const Person=new mongoose.model("Person",personSchema);
module.exports=Person;