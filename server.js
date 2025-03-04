/*Now creating a server using express*/
const express=require('express');
const app=express();
const db=require('./db');
const Person=require('./models/personSchema');
const bodyParser=require('body-parser');
app.use(bodyParser.json())
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes)
/*Now writing get method to get data from the server*/
app.get('/',(req,res)=>
{
    res.send("Hello World");
})

app.listen(3000,(req,res)=>
{
    console.log("Server is running on post:3000");
})