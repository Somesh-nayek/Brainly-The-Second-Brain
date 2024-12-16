import { useState } from "react";
import { Button } from "../components/button";
import { Sidebar } from "../components/sidebar";
import { AddIcon, ShareIcon} from "../icons/icons";
import { AddContent } from "../components/addContent";
import {  useNavigate } from "react-router-dom";
import { ShareBrain } from "./shareBrain";
import { Content } from "./DashboardContent";
// import { getUser } from "../helper function/getUser";

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
  // const userStatus=getUser({navigate});
  // console.log(userStatus);
  const ContentOpenToggle=()=>{
    setAddContent(!addContentOpen);
  }
  const ShareToggle=()=>{
    setShare(!shareOpen);
  }
  return (
    <div className="flex w-full h-screen relative">
      <AddContent open={addContentOpen} onClose={ContentOpenToggle} navigate={navigate} setContent={setContent}/>
      <ShareBrain open={shareOpen} onClose={ShareToggle}/>
      <div>
        <Sidebar />
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
        <Content setContent={setContent} content={content} navigate={navigate}/>
      </div>
    </div>
  );
}




