import { FieldValues } from "react-hook-form";
import { NavigateFunction } from "react-router-dom";

export async function signUp(data:FieldValues,navigate:NavigateFunction){
  const BASE_URL = import.meta.env.VITE_BASE_URL ;
    const response=await fetch(BASE_URL+"/signup",{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    });
    const dataResponse =await response.json();
    if(response.ok){
      alert(dataResponse.message);
      navigate("/signin")
    }else{
      alert(dataResponse.message);
    }
  }