import { AllFilesIcon, DocumentIcon, LinkIcon, Logo, Profile, Tags, TwitterIcon, VidepIcon } from "../icons/icons";
import { SidebarItem } from "./sidebarItem";
interface SidebarProps {
  OnlyYoutube: () => void;
  OnlyTwitter: () => void;
  AllFiles:()=>void;
  twitter: boolean;
  youtube: boolean;
}
export const Sidebar = ({OnlyYoutube,OnlyTwitter,twitter,youtube,AllFiles}:SidebarProps) => {
  return (
    <div className="bg-white w-72 h-screen overflow-hidden">
      <div className="flex items-end w-full space-x-2 p-2 border-2">
        <div className="w-10 h-10 flex-shrink-0 text-purple-700 items-center justify-center">
          <Logo size="sm" />
        </div>
        <div className="w-full text-gray-800 text-2xl font-medium items-end">
          Second Brain
        </div>
      </div>
      <div className="m-4">
        <SidebarItem title="All Files" onClick={AllFiles} isActive={true} icon={<AllFilesIcon/>}/>
        <SidebarItem onClick={OnlyTwitter} isActive={twitter} title="Tweets" icon={<TwitterIcon/>}/>
        <SidebarItem title="Youtube" onClick={OnlyYoutube} isActive={youtube} icon={<VidepIcon/>}/>
        <SidebarItem title="Links" onClick={()=>{}} isActive={true} icon={<LinkIcon/>}/>
        <SidebarItem title="Documents" onClick={()=>{}} isActive={true} icon={<DocumentIcon/>}/>
        <SidebarItem icon={<Tags/>} onClick={()=>{}} isActive={true} title="Tags"/>
        <SidebarItem icon={<Profile/>} onClick={()=>{}} isActive={true} title="Profile"/>
      </div>
    </div>
  );
};
