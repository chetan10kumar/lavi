/*This will act as a bridge between node.js server and mongodb server*/
/*Now importing mongoose*/
const mongoose=require('mongoose');
/*Now defining mongoDb url*/
const mongoUrl="mongodb://localhost:27017/hotels";
/*Now establishing connection*/
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
/*Now defining MongoDb object*/
const db=mongoose.connection;
/*Now event listeners,event listeners reacts to different state of mongoDb*/
db.on('connected',()=>
{
    console.log("Connected with MongoDb server");
})
db.on('error',(err)=>
{
    console.log("Error while connecting to MongoDb server");
})
db.on('disconnected',()=>
{
    console.log("Disconnected while connected to MongoDb server");
})
/*Now exporting database connection*/
module.exports=db;
