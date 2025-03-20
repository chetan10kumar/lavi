const express=require('express');
const app=express();
const db=require('./db')
require('dotenv').config();
const Person=require('./models/personSchema');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const passport=require('./auth');
const personRoutes=require('./routes/personRoutes');
const PORT= process.env.PORT || 3000;
//Middleware function (logging)

const logRequest=(req,res,next)=>{
    console.log(`${new Date().toLocaleString()}Request Made to :${req.originalUrl}`);
    next();
}
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local',{session:false});
app.get('/',localAuthMiddleware,(req,res)=>
{
    res.send("Welcome to the hotel");
})
app.use('/person',personRoutes);
app.listen(PORT,()=>
{
    console.log("Server is running on port:3000");
})