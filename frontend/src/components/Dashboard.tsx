import { useState } from "react";
import { Button } from "../components/button";
import { Sidebar } from "../components/sidebar";
import { AddIcon, ShareIcon} from "../icons/icons";
import { AddContent } from "../components/addContent";
import {  useNavigate } from "react-router-dom";
import { ShareBrain } from "./shareBrain";
import { Content } from "./DashboardContent";
import { getUser } from "../helper function/getUser";

type Content = {
  _id: string;       
  link: string;      
  type: string;      
  title: string;
  userId: string;
  __v: number;
};

export type Contents = Content[];
export const Dashboard=()=>{
  const navigate=useNavigate();
  const [addContentOpen,setAddContent]=useState(false);
  const [shareOpen,setShare]=useState(false);
  const [content,setContent]=useState<Contents| undefined>(undefined);
  const ContentOpenToggle=()=>{
    setAddContent(!addContentOpen);
  }
  const ShareToggle=()=>{
    setShare(!shareOpen);
  }
  const User:boolean=getUser({navigate});
  console.log(User);
  return (
    <div className="flex w-full h-screen relative">
      <AddContent open={addContentOpen} onClose={ContentOpenToggle}/>
      <ShareBrain open={shareOpen} onClose={ShareToggle}/>
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-screen pl-10">
        <div className="flex justify-between  bg-gray-200 w-full items-center p-5">
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
        <Content setContent={setContent} content={content} navigate={navigate}/>
      </div>
    </div>
  );
}




