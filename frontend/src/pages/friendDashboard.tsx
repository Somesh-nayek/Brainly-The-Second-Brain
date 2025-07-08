import { useEffect, useRef, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { Content } from "../components/DashboardContent";
import { Contents } from "../Constants";
import { Sidebar } from "../components/sidebar";
export const FriendDashboard=()=>{
  const {hash}=useParams<{hash:string}>();
  const friendDashboard=useRef<boolean>(true);
  const navigate=useNavigate();
  const [content,setContent]=useState<Contents| undefined>(undefined);
  const [youtube,setYoutube]=useState(true);
  const [twitter,setTwitter]=useState(true);
  useEffect(()=>{
  },[]);
  const OnlyYoutube=()=>{
    if(twitter){
      setTwitter(false);
      console.log("Only Youtube");
    }else{
      setTwitter(true);
      console.log("Youtube and Twitter");
    }
    setYoutube(true);
  }
  const OnlyTwitter=()=>{
    if(youtube){
      setYoutube(false);
      console.log("Only Twitter");
    }else{
      setYoutube(true);
      console.log("Youtube and Twitter");
    }
    setTwitter(true);
  }
  const AllFiles=()=>{
    setYoutube(true);
    setTwitter(true);
    console.log("All Files");
  }
  return (
    <div className="flex w-full h-screen relative">
      <div>
        <Sidebar AllFiles={AllFiles} twitter={twitter} youtube={youtube} OnlyTwitter={OnlyTwitter} OnlyYoutube={OnlyYoutube} />
      </div>
      <div className="flex-1 overflow-auto h-screen">
        <div className="flex justify-between pl-10 bg-gray-200 w-full items-center p-5">
          <div className="text-[35px] font-bold items-center justify-center">
            Friends Dashboard
          </div>
        </div>
        <Content hash={hash} friendDashboard={friendDashboard.current} setContent={setContent} content={content} navigate={navigate} youtube={youtube} twitter={twitter}/>
      </div>
    </div>
  );
}




