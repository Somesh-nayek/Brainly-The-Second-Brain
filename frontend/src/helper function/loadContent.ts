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
    console.log("1");
    const response = await fetch(`${BASE_URL}/content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    console.log("2");
    if (!response.ok) {
      alert("Failed to load content");
      return;
    }
    console.log("3");
    const data = await response.json();
    const material = data.Contents;
    console.log("4");
    if (!material || material.length === 0) {
      alert("No content found");
      return;
    }
    console.log("5");
    props.setContent(material);
    return;
  } catch (error) {
    console.log(error);
    alert(`Failed to load content:${error}`);
  }
}
