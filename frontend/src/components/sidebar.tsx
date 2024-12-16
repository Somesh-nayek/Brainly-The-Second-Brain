import { DocumentIcon, LinkIcon, Logo, Profile, Tags, TwitterIcon, VidepIcon } from "../icons/icons";
import { SidebarItem } from "./sidebarItem";

export const Sidebar = () => {
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
      <div className="mt-5 ml-8">
        <SidebarItem title="Tweets" icon={<TwitterIcon/>}/>
        <SidebarItem title="Youtube" icon={<VidepIcon/>}/>
        <SidebarItem title="Links" icon={<LinkIcon/>}/>
        <SidebarItem title="Documents" icon={<DocumentIcon/>}/>
        <SidebarItem icon={<Tags/>} title="Tags"/>
        <SidebarItem icon={<Profile/>} title="Profile"/>
      </div>
    </div>
  );
};
