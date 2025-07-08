import { NavigateFunction } from "react-router-dom";
import { Contents } from "../Constants";
interface Props {
  navigate: NavigateFunction;
  setContent: (content:Contents | undefined)=>void;
}

export async function loadContent(props: Props): Promise<void> {
  const token = localStorage.getItem("token");
  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3000/api/v1/users";
  if (!token) {
    alert("Sign in first");
    props.navigate("/signin");
    return;
  }
  try {
    const response = await fetch(`${BASE_URL}/content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      alert(data.message);
      props.navigate("/signin");
      return;
    }
    const material = data.Contents;
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
