import { NavigateFunction } from "react-router-dom";
import { Contents } from "./Dashboard";
import { useEffect } from "react";
import { loadContent } from "../helper function/loadContent";
import { Card } from "./card";
import { YoutubeIcons } from "../icons/icons";

interface ContentProps{
    navigate:NavigateFunction;
    setContent:(content:Contents | undefined)=>void;
    content:Contents | undefined;
  }
export const Content=(props:ContentProps)=>{
    const {setContent,content,navigate}=props
    useEffect(()=>{
      loadContent({setContent,navigate});
    },[]);
    return <div className="flex flex-wrap bg-gray-200 min-h-screen justify-center">
    {content?.map((data, key) => (
      <Card
        key={key}
        link={data.link}
        type={data.type === "youtube" ? "youtube" : "twitter"}
        title={data.title}
        icon={<YoutubeIcons size="md" />}
        date="7/12/2024"
        tags={["Learning", "ideas"]}
      />
    ))}
  </div>
  }