/*Models are the the blue print of the the database*/
/*It can also represent a collection for example-person*/
const mongoose=require('mongoose');
const personSchema=mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Age:{
        type:Number,
        require:true
    },
    Mobile:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Work:{
        type:String,
        enum:["owner","manager","chef"],
        require:true
    },
    Address:{
        type:String,
        require:true
    },
    Salary:{
        type:Number,
        require:true
    },
    Username:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    }
    
    
})
const Person=mongoose.model("Person",personSchema);
module.exports=Person;