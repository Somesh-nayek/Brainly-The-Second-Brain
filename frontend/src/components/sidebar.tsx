import { DocumentIcon, LinkIcon, Logo, Tags, TwitterIcon, VidepIcon } from "../icons/icons";
import { SidebarItem } from "./sidebarItem";

export const Sidebar = () => {
  return (
    <div className="bg-white w-72 h-screen">
      <div className="flex items-end space-x-2 p-2 border-2">
        <div className="w-10 h-10 flex-shrink-0 text-purple-700 items-center justify-center">
          <Logo size="sm" />
        </div>
        <div className="w-fit text-gray-800 text-2xl font-medium items-end">
          Second Brain
        </div>
      </div>
      <div className="mt-5 ml-8">
        <SidebarItem title="Tweets" icon={<TwitterIcon/>}/>
        <SidebarItem title="Youtube" icon={<VidepIcon/>}/>
        <SidebarItem title="Links" icon={<LinkIcon/>}/>
        <SidebarItem title="Documents" icon={<DocumentIcon/>}/>
        <SidebarItem icon={<Tags/>} title="Tags"/>
      </div>
    </div>
  );
};
