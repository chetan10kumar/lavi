/*This file will act as a bridge between node js and mongoDb server*/
const mongoose=require('mongoose');
require('dotenv').config();
/*Now defining mongoUrl*/
//const mongoUrl=process.env.MONGODB_URL_LOCAL;

const mongoUrl=process.env.MONGODB_URL;
/*Now establishing connction*/
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
/*Now mongoose maintains a connection object which performs in database connection*/
const db=mongoose.connection;
/*Now event listeners*/
/*Event listeners reacts to the different state of database connection*/
db.on('connected',()=>
{
    console.log("Connected with mongoDb server");
})
db.on('error',(err)=>
{
    console.log("Error while connecting to mongoDb server");
})
db.on('disconnected',()=>
{
    console.log("Disconnected from the mongoDb server");
})
/*Now exporting the mongoDb connection*/
module.exports=db;
