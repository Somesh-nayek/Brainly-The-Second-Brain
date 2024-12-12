import { FieldValues } from "react-hook-form";
import { NavigateFunction } from "react-router-dom";
import { BASE_URL } from "../App";

export async function signIn(data:FieldValues,navigate:NavigateFunction){
    // console.log(JSON.stringify(data));
    const response=await fetch(BASE_URL+"/signin",{
      method:"POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body:JSON.stringify(data)
    });
    if(response.ok){
      const data=await response.json();
      const token=data.token;
      localStorage.setItem("token",token);
      navigate("/dashboard");
    }
  
  }