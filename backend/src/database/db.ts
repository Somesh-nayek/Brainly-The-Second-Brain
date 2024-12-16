import mongoose, { Schema } from "mongoose";
import { boolean } from "zod";

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true,unique:false},
    status:{type:Boolean,required:true}
});

const contentSchema = new Schema({
    link: { type: String, unique: true,required:true},
    type: { type: String, required: true,unique:false},
    title: { type: String, required: true,unique:true},
    userId: { type: mongoose.Types.ObjectId, ref: 'User',unique:false,required:true},
});

const linkSchema = new Schema({
    hash: { type: String, unique: true, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: 'User',unique:true,required:true},
});

export const User = mongoose.model("User", userSchema);
export const Content = mongoose.model("Content", contentSchema);
export const Link = mongoose.model("Link", linkSchema);
