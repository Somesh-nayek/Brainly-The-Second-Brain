import { ReactElement } from "react";
import { defaultStyles, sizeStyles, variants, variantStyles } from "../Constants";

interface ButtonProps{
    size:"sm" | "md" | "lg";
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    variant:variants;
    onClick?:()=>void;
    styles?:string;
}
export const   Button=(props:ButtonProps)=>{
    return <div className={`${defaultStyles} ${props.styles} ${variantStyles[props.variant]} ${sizeStyles[props.size]}`} onClick={props.onClick}>
        {props.startIcon}
        {props.size=="sm"?"":props.text}
    </div>
}