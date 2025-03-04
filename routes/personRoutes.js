const express=require('express');
const router=express.Router();
const Person=require('./../models/personSchema')
router.post('/',async(req,res)=>
    {
        try{
            /*Asuuming that data is stored in req.body*/
            const data=req.body;
            const newPerson=new Person(data);
            const response=await newPerson.save();
            console.log("Data Saved Successfully");
            res.status(200).json(response);
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
        }
    })
    /*Now writing get method for fetching person's details*/
    router.get('/',async(req,res)=>
    {
        try{
            const response=await Person.find();
            console.log("Person fetched Successfully");
            res.status(200).json(response);
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
            if(workType=='chef'||workType=='manager'||workType=='owner')
            {
                const response=await Person.find({work:workType});
                console.log("Person fetched Successfully");
                res.status(200).json(response);
            }
            else
            {
                res.status(400).json({error:"Invalid WorkType"});
            }
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
        }
    })
    /*Now writing put method to update prson's information*/
    router.put('/:id',async(req,res)=>
    {
        try{
            const personId=req.params.id;
            const updatedPersondata=req.body;
            const response=await Person.findByIdAndUpdate(personId,updatedPersondata,{
        
                new:true,       //this means it will store new response also
                runValidators:true
            });
            if(!response)
            {
                res.status(404).json({error:"Internal Server Error"});
            }
            console.log("Person Data Updated Successfully");
            res.status(200).json(response);
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
        }
    })
    /*Delete method to delete person's information*/
    router.delete('/:id',async(req,res)=>
    {
        try{
            const personId=req.params.id;
            const response=await Person.findByIdAndDelete(personId);
            if(!response)
            {
                return res.status(404).json({error:"User not found Error"});
            }
            console.log("Person deleted Successfully");
            res.status(200).json(response);
        }
        catch(err)
        {
            console.log(response);
            res.status(500).json({error:"Internal Server Error"});
        }
    })
    module.exports=router;