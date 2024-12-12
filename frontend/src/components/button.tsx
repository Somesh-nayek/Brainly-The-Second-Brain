import { ReactElement } from "react";

type variants= "primary" | "secondary";
export interface ButtonProps{
    size:"sm" | "md" | "lg";
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    variant:variants;
    onClick?:()=>void;
    styles?:string;
}
const variantStyles={
    primary:"bg-purple-700 text-purple-500 rounded-lg",
    secondary:"bg-purple-500 text-purple-700 rounded-lg"
}
const defaultStyles="cursor-pointer flex gap-2 items-center";

const sizeStyles={
    sm:"p-2 m-1 w-fit",
    md:" p-2 m-3 w-fit",
    lg:"px-2 gap-5 py-3 m-5 w-fit text-[25px]"
}
export const Button=(props:ButtonProps)=>{
    return <div className={`${defaultStyles} ${props.styles} ${variantStyles[props.variant]} ${sizeStyles[props.size]}`} onClick={props.onClick}>
        {props.startIcon}
        {props.size=="sm"?"":props.text}
    </div>
}