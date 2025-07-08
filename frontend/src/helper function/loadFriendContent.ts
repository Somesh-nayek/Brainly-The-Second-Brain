import { NavigateFunction } from "react-router-dom";
import { Contents } from "../Constants";

interface Props {
  navigate: NavigateFunction;
  setContent: (content:Contents | undefined)=>void;
  hash: string | undefined;
}
export const loadFriendContent=async (props:Props)=>{
    const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3000/api/v1/users";
    try {
        const response = await fetch(`${BASE_URL}/brain/${props.hash}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        });
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
        alert(data.message);
        props.navigate("/signin");
        return;
        }
        const material = data.contents;
        if (!material || material.length === 0) {
        alert("No content found");
        return;
        }
        props.setContent(material);
        return;
    } catch (error) {
        alert(`Failed to load content(maybe the backend is down):${error}`);
    }
}