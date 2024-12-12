import { Close } from "../icons/icons";
import { Button } from "./button";

interface Props{
    open:boolean;
    onClose:()=>void;
}
export const ShareBrain=(props:Props)=>{
    return(
        <>
        {props.open && (<div className="w-screen h-screen bg-gray-600/80 fixed flex justify-center items-center">
            <div className="bg-white flex flex-col items-center justify-center p-4">
                <div className="cursor-pointer flex items-center justify-center" onClick={props.onClose}>
                    <Close/>
                </div>
                <Button text="Public" size="md" variant="primary" styles="p-3 w-44 flex justify-center"/>
            </div>
        </div>)}
        </>
    )
}