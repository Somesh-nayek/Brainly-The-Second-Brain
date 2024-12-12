import {Request,Response,NextFunction} from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const Auth=(req:Request,res:Response,next:NextFunction)=>{
    const token=req.headers.authorization;
    if(!token){
        res.status(401).json({message:"Token does not exist"});
        return;
    }
    const response=jwt.verify(token,process.env.JWT_SECRET!)
    if(response){
        if(typeof response=="string"){
            res.status(401).json({message:"Invalid token"});
            return;
        }
        req.body.userId=response.id;
        next();
    }else{
        res.status(401).json({message:"Incorrect token"});
    }
}
