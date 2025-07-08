import { ReactElement } from "react";
import { DeleteIcon, ShareIcon } from "../icons/icons";
import { getEmbedUrl } from "../helper function/youtube_ID";
import EmbedComponent from "./twitterEmbedded";

export interface cardProps {
  icon: ReactElement;
  date: string;
  tags: string[];
  title: string;
  link: string;
  type: "youtube" | "twitter";
}
export const Card = (props: cardProps) => {
  const embedUrl = getEmbedUrl(props.link,props.type);
  return (
    <div className="bg-white border-2 border-gray-300 max-w-[300px] max-h-[400px] rounded-lg shadow-sm p-3 m-5 flex flex-col justify-between">
      <div>
        <div className="flex gap-4 items-center justify-between">
          <div className="flex items-center gap-2 text-[18px] font-medium justify-center">
            {props.icon}
            {props.title}
          </div>
          <div className="flex items-center gap-4">
            <div className="cursor-pointer text-slate-500">
              <ShareIcon size="sm" />
            </div>
            <div className="cursor-pointer text-slate-500">
              <DeleteIcon size="sm" />
            </div>
          </div>
        </div>
        <div className="max-h-60 w-full overflow-y-auto border rounded-lg shadow-md">
          {props.type == "youtube" && (
            <iframe
              className="w-full p-2 h-full"
              width="560"
              height="315"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {props.type === "twitter" && (
            <EmbedComponent type="twitter" embedUrl={embedUrl}/>
          )}
        </div>
      </div>
      <div>
        <div className="flex gap-2 mt-2">
          {props.tags.map((item, index) => (
            <div
              key={index}
              className="bg-purple-500 text-purple-700 p-0.5 rounded-2xl text-[15px]"
            >
              #{item}
            </div>
          ))}
        </div>
        <div className="text-sm mt-2 font-light">
          {`Added on ${props.date}`}
        </div>
      </div>
    </div>
  );
};
