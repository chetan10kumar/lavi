const express=require('express');
const app=express();
const db=require('./db')
require('dotenv').config();
const Person=require('./models/personSchema');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const personRoutes=require('./routes/personRoutes');

app.get('/',(req,res)=>{
    res.status(200).send("Yes the server is working");
})
app.use('/person',personRoutes)


const PORT= process.env.PORT || 3000;


app.listen(PORT,()=>
{
    console.log("Server is running on port:3000");
})