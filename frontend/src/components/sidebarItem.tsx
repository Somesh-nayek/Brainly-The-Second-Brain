import { ReactElement } from "react";

export interface SidebarItemProps{
    title:string;
    icon:ReactElement;
}
export const SidebarItem=(props:SidebarItemProps)=>{
    return <div className="flex text-gray-800 gap-3 items-center text-2xl mb-3 cursor-pointer">
        {props.icon}
        {props.title}
    </div>
}