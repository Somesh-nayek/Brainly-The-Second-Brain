import { Router } from "express";
import bcrypt from "bcrypt";
import { inputValidation } from "../middlewares/inputValidation";
import { Content, Link, User } from "../database/db";
import jwt from "jsonwebtoken";
import { Auth } from "../middlewares/auth";
import cors from "cors";
import { makeid } from "../utils/hash";
export const  userRouter= Router();
userRouter.use(cors());
userRouter.post('/signup',inputValidation,async (req, res) => {
    
    const username=req.body.username;
    const password=req.body.password;
    try{
        const user=await User.findOne({ username: username})
        if(user){
            res.status(409).json({message:"User already exists"});
            return;
        }
        const hash=await bcrypt.hash(password,10);
        await User.create({ username: username, password: hash,status:false});
        res.json({message:"User signed up"});
        return;
    }
    catch(err){
        res.status(500).json({message:"Server error",
            error:err
        })
        return;
    }
})
userRouter.post('/signin',inputValidation,async (req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    try{
        const response=await User.findOne({username:username });
        if(!response){
            res.status(404).json({message:"User not found"});
            return;
        }
        const passwordMatch=await bcrypt.compare(password,response.password)
        if(passwordMatch){
            const token=jwt.sign({id:response._id},process.env.JWT_SECRET!,{expiresIn:"10h"});
            res.status(200).json({message:"User signed in",token:token});
            return;
        }else{
            res.status(401).json({message:"Incorrect Password"});
            return;
        }
    }catch(err){
        res.status(500).json({message:"Server internal error",
            error:err
        });
        return;
    }
})
userRouter.post('/content',Auth,async (req, res) => {
    const link=req.body.link;
    const type=req.body.type;
    const title=req.body.title;
    const userId=req.body.userId;
    try{
        await Content.create({link:link,type:type,title:title,userId:userId});
        res.status(200).json({message:"Content Added successfully"});
        return;
    }catch(err){
        res.status(500).json({message:"Server error",error:err});
        return;
    }
})
userRouter.get('/content',Auth,async (req, res) => {
    const user = req.body.userId;
    try{
        const response=await Content.find({userId:user});
        if(!response){
            res.status(200).json({message:"No files found"});;
            return;
        }
        res.status(200).json({Contents:response});;
        return;
    }catch(err){
        res.status(500).json({message:"Server error",
            error:err,user:user
        });
        return;
    }
})
userRouter.get('/getUser',Auth,async (req, res) => {
    const userId=req.body.userId;
    const user=await User.findOne({_id:userId});
    if(!user){
        res.status(404).json({message:"User not found"});
        return;
    }
    res.status(200).json({user:user});
    return;
});
userRouter.delete('/delete',Auth,async (req, res) => {
    const title=req.body.title;
    const user=req.body.userId;
    try{
        const response=await Content.deleteOne({title:title,userId:user});
        if(!response){
            res.status(404).json({message:"Content not found or you don't have permission to delete"});
            return;
        }else{
            res.status(200).json({message:"Content deleted successfully"});
            return;
        }
    }catch(err){
        res.status(500).json({message:"Server error",
            error:err
        });
        return;
    }
})
userRouter.post('/brain/share',Auth,async (req, res) => {
    const share=req.body.share;
    try{
        if(share){
            const existing=await Link.findOne({userId:req.body.userId})
            if(existing){
                res.status(200).json({
                    hash:existing.hash
                })
                return;
            }else{
                const hash=makeid(10);
                const user=await Link.create({userId:req.body.userId,hash:hash});
                res.status(200).json({
                    hash:hash
                })
                return;
            }
        }else{
            const user=await Link.findOneAndDelete({userId:req.body.userId});
            res.status(200).json({message:"Link deleted successfully"})
            return;
        }
    }catch(e){
        res.status(500).json({message:"Server error",
            error:e
        })
        return;
    }
})
userRouter.get('/brain/:share',async (req, res) => {
     const hash=req.params.share;
     const link=await Link.findOne({hash:hash});
     if(!link){
         res.status(404).json({message:"Link not found"})
         return;
     }
     const user=await User.findOne({_id:link.userId});
    //  console.log(link.userId);
     const response=await Content.find({userId:link.userId});
    //  console.log(response)
     if(!response){
         res.status(200).json({message:"No files found"});
         return;
     }
     if(!user){
        res.status(404).json({message:"User does not exist"});
        return;
     }
     res.status(200).json({username:user.username,contents:response});
     return;

})