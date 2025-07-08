import { FieldValues } from "react-hook-form";
import { NavigateFunction } from "react-router-dom";

export async function signIn(data:FieldValues,navigate:NavigateFunction){
  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3000/api/v1/users";
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