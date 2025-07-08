import { NavigateFunction } from "react-router-dom";
interface Props{
    navigate:NavigateFunction;
    setUserStatus:(val:boolean)=>void
}
export const getUser=async (props:Props)=>{
    const token=localStorage.getItem("token");
    const BASE_URL = import.meta.env.VITE_BASE_URL;
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
    if(response.status==500){
        alert("Server error, try signing in again or later");
        props.navigate("/signin");
    }else if(response.status==404){
        alert("User not found, create a new account");
        props.navigate("/signup");
    }
    const data=await response.json();
    props.setUserStatus(data.status);
    return;
}