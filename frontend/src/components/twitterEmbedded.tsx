import { useEffect } from "react";

interface Props{
    type:string,
    embedUrl:string
}
const EmbedComponent = ({ type, embedUrl }:Props) => {
  useEffect(() => {
    if (type === "twitter" && window.twttr?.widgets) {
      // Load or refresh Twitter widgets
      window.twttr.widgets.load();
    }
  }, [type, embedUrl]); // Re-run when `type` or `embedUrl` changes

  return (
    <>
      {type === "twitter" && (
        <blockquote className="twitter-tweet">
          <a href={embedUrl}></a>
        </blockquote>
      )}
    </>
  );
};

export default EmbedComponent;
