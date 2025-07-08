import { NavigateFunction } from "react-router-dom";
import { useEffect } from "react";
import { loadContent } from "../helper function/loadContent";
import { Card } from "./card";
import { YoutubeIcons } from "../icons/icons";
import { Contents } from "../Constants";
import { loadFriendContent } from "../helper function/loadFriendContent";

interface ContentProps {
  navigate: NavigateFunction;
  setContent: (content: Contents | undefined) => void;
  content: Contents | undefined;
  youtube:boolean;
  twitter:boolean;
  friendDashboard:boolean;
  hash: string | undefined;
}
export const Content = (props: ContentProps) => {
  const { setContent, content, navigate,youtube,twitter,friendDashboard,hash } = props;
  useEffect(() => {
    const loadContentAsync = async () => {
      if(!friendDashboard){
        await loadContent({ setContent, navigate });
      }else{
        await loadFriendContent({ setContent, navigate, hash });
      }
    }
    loadContentAsync();
  }, []);
  return (
    <div className="flex flex-wrap bg-gray-200 min-h-screen justify-center">
      <div className="flex flex-col w-full max-w-6xl p-4 gap-4 border-4 border-gray-500 rounded-lg mb-10">
        {/* Youtube */}
        {youtube && <div>
          <div className="flex font-bold font-semibold text-3xl mx-5 my-3 underline">Youtube</div>
          <div className="flex flex-wrap gap-4">
            {content?.map(
              (data, key) =>
                data.type === "youtube" && (
                  <Card
                    key={key}
                    link={data.link}
                    type="youtube"
                    title={data.title}
                    icon={<YoutubeIcons size="md" />}
                    date="7/12/2024"
                    tags={["Learning", "ideas"]}
                  />
                )
            )}
          </div>
        </div>}
        {twitter && youtube && <div className="flex border-b-4 border-gray-400 mx-10 my-5"></div>}
        {/* Twitter */}
        {twitter && <div  className="flex flex-col">
          <div className="flex font-bold font-semibold text-3xl mx-5 my-3 underline">Twitter</div>
          <div className="flex flex-wrap gap-4">
            {content?.map((data, key) => (
              data.type=="twitter" && <Card
                key={key}
                link={data.link}
                type="twitter"
                title={data.title}
                icon={<YoutubeIcons size="md" />}
                date="7/12/2024"
                tags={["Learning", "ideas"]}
              />
            ))}
          </div>
        </div>}
        {/* <div></div> for links*/}
        {/* <div></div> fro docs */}
      </div>
    </div>
  );
};
