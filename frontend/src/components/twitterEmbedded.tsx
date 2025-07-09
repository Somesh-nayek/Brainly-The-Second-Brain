import { useEffect } from "react";

interface Props {
  type: string;
  embedUrl: string;
}

const EmbedComponent = ({ type, embedUrl }: Props) => {
  useEffect(() => {
    if (type === "twitter") {
      const existingScript = document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        script.onload = () => {
          if (window.twttr?.widgets) {
            window.twttr.widgets.load();
          }
        };
        document.body.appendChild(script);
      } else {
        // Script already exists — safe to call load
        window.twttr?.widgets?.load();
      }
    }
  }, [type, embedUrl]);

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
