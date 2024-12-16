import { NavigateFunction } from "react-router-dom";
import { BASE_URL } from "../App";

interface Props{
    navigate:NavigateFunction;
}
export const getUser=async (props:Props)=>{
    const token=localStorage.getItem("token");
    if(!token){
        alert("You need to be logged in");
        props.navigate("/signin");
        return;
    }
    const response=await fetch(BASE_URL+"/getUser",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            authorization:token
        }
    });
    if(!response.ok){
        return;
    }
    const data=await response.json();
    return data.user.status;
}