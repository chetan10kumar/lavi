const express=require('express');
const router=express.Router();
const Person=require('./../models/personSchema')
router.post('/',async(req,res)=>
{
    try{
        const data=req.body;   //assuming data is stored in req.body
        const newPerson=new Person(data);
        const response=await newPerson.save();
        console.log("Person Saved");
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})
/*Now writing get method for fetching the person*/
router.get('/',async(req,res)=>
{
    try{
        const data= await Person.find();
        console.log("Person fetched succesfully");
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})
/*Now writing parameterized url*/
router.get('/:workType',async(req,res)=>
{
    try{
        const workType=req.params.workType;
        if(workType=='owner' || workType=='manager' || workType=='chef')
        {
            const response=await Person.find({work:workType})
            console.log("Person fetched successfully");
            res.status(200).json(response);
        }
        else
        {
            res.status(400).json({error:"WokType not found Error"});
        }

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})
/*Now updating information using put method*/
router.put('/:id',async(req,res)=>
{
    try{
        const personId=req.params.id;
        const UpdatedPersonData=req.body;
        const response=await Person.findByIdAndUpdate(personId,UpdatedPersonData,{
            new:true,                 //will give updated person data
            runValidators:true        //will run mongoose validators
        })
        if(!response)
        {
            res.status(404).json({error:"Person not found Error"});
        }
        console.log("Person Updated Successfully");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})
/*Now deleting existing person information*/
router.delete('/:id',async(req,res)=>
{
    try{
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId);
        if(!response)
        {
            res.status(404).json({error:"User not found"});
        }
        console.log("Person Deleted Successfully");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})
module.exports=router;