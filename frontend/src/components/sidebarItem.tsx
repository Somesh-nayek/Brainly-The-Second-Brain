import { ReactElement } from "react";

export interface SidebarItemProps {
  title: string;
  icon: ReactElement;
  onClick: () => void;
  isActive: boolean;
}
export const SidebarItem = (props: SidebarItemProps) => {
  return (
    <div
      className={`flex text-gray-800 gap-3 items-center p-2 text-2xl mb-3 cursor-pointer hover:bg-gray-300 rounded-lg`}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.icon}
      {props.title}
    </div>
  );
};
