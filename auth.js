const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Person=require('./models/personSchema');
//Authentication middleware
passport.use(new LocalStrategy(async(username,password,done)=>{
    //authentication logic here
    try{
        console.log("Received Credentials:",username,password);
        const user=await Person.findOne({Username:username});
        if(!user){
            return done(null,false,{message:"Incorrect username."});

        }
        const isPasswordMatch=user.Password===password ?true:false;
        if(isPasswordMatch){
            return done(null,user);
        }
        else{
            return done(user,false,{message:"Incorrect password."})
        }

    }
    catch(err)
    {
        return done(err);
    }
}))
module.exports=passport;    //Export configured passport