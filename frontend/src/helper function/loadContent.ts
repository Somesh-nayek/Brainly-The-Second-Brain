import { NavigateFunction } from "react-router-dom";
import { BASE_URL } from "../App";
import { Contents } from "../components/Dashboard";

interface Props {
  navigate: NavigateFunction;
  setContent: (content:Contents | undefined)=>void;
}

export async function loadContent(props: Props): Promise<void> {
  const token = localStorage.getItem("token");
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

    if (!response.ok) {
      alert("Failed to load content");
      return;
    }

    const data = await response.json();
    const material = data.Contents;

    if (!material || material.length === 0) {
      alert("No content found");
      return;
    }

    props.setContent(material);
    return;
  } catch (error) {
    console.log(error);
    alert(error);
  }
}
