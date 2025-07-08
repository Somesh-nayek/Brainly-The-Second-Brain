import { useEffect, useState } from "react";
import { Button } from "../components/button";
import { Sidebar } from "../components/sidebar";
import { AddIcon, ShareIcon} from "../icons/icons";
import { AddContent } from "../components/addContent";
import {  useNavigate } from "react-router-dom";
import { ShareBrain } from "../components/shareBrain";
import { Content } from "../components/DashboardContent";
import { getUser } from "../helper function/getUser";
import { Contents } from "../Constants";

export const Dashboard=()=>{
  const navigate=useNavigate();
  const [addContentOpen,setAddContent]=useState(false);
  const [shareOpen,setShare]=useState(false);
  const [content,setContent]=useState<Contents| undefined>(undefined);
  const [userStatus,setUserStatus]=useState<boolean>();
  const [youtube,setYoutube]=useState(true);
  const [twitter,setTwitter]=useState(true);
  useEffect(()=>{
    const fetchUser=async()=>{
      await getUser({navigate,setUserStatus});
    }
    fetchUser();
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
  const ContentOpenToggle=()=>{
    setAddContent(!addContentOpen);
  }
  const ShareToggle=()=>{
    setShare(!shareOpen);
  }
  return (
    <div className="flex w-full animate pulse h-screen relative">
      <AddContent open={addContentOpen} onClose={ContentOpenToggle} navigate={navigate} setContent={setContent}/>
      <ShareBrain open={shareOpen} onClose={ShareToggle} userStatus={userStatus} setUserStatus={setUserStatus} navigate={navigate}/>
      <div>
        <Sidebar AllFiles={AllFiles} twitter={twitter} youtube={youtube} OnlyTwitter={OnlyTwitter} OnlyYoutube={OnlyYoutube} />
      </div>
      <div className="flex-1 overflow-auto h-screen">
        <div className="flex justify-between pl-10 bg-gray-200 w-full items-center p-5">
          <div className="text-[35px] font-bold items-center justify-center">
            All Notes
          </div>
          <div className="flex">
            <Button
              size="md"
              text="Share Brain"
              startIcon={<ShareIcon size="md" />}
              variant="secondary"
              onClick={ShareToggle}

            />
            <Button
              size="md"
              text="Add Content"
              startIcon={<AddIcon size="md"/>}
              variant="primary"
              onClick={ContentOpenToggle}
            />
          </div>
        </div>
        <Content hash="" friendDashboard={false} setContent={setContent} content={content} navigate={navigate} youtube={youtube} twitter={twitter}/>
      </div>
    </div>
  );
}




