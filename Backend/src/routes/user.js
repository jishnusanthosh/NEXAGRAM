import express from 'express';
const router = express.Router();
import { User, validate } from '../models/user.js';
const bcrypt=require("bcrypt")



router.post("/",async(req,res)=>{
    //creating a new instance of user with data sent by client
    try {
        const {error}=validate(req.body)
        if (error)
            return res.status(400).send(error.details[0].message);
       const user=await User.findOne({email:req.body.email})
       if(user)
       return res.status(409).json({message:"Email is already registered"});
    

        const salt=await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword=await bcrypt.hash(req.body.password,salt)

        await new User({...req.body,password:hashPassword}).save();
        res.status(201).send({message:"User created Successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Internal Server Error"})
        
    }
})
export default router;