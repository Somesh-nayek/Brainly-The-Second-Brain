import { FieldValues } from "react-hook-form";
import { NavigateFunction } from "react-router-dom";
import { BASE_URL } from "../App";

export async function signUp(data:FieldValues,navigate:NavigateFunction){
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