import { useForm } from "react-hook-form";
import { Close } from "../icons/icons";
import { errorMessage } from "../helper function/errorMessage";
import { loadContent } from "../helper function/loadContent";
import { NavigateFunction } from "react-router-dom";
import { Contents } from "../Constants";

export interface AddContentProps {
  open: boolean;
  onClose: () => void;
  setContent:(contents:Contents | undefined)=>void;
  navigate:NavigateFunction;
}
export const AddContent = (props: AddContentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate=props.navigate;
  const setContent=props.setContent;
  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3000/api/v1/users";
  return (
    <>
      {props.open && (
        <div className="w-screen h-screen bg-gray-600/80 fixed flex justify-center items-center">
          <div className="p-4 bg-white bg-opacity-100 flex justify-center items-center flex-col gap-2">
            <div className="cursor-pointer " onClick={props.onClose}>
              <Close />
            </div>
            <form
              onSubmit={handleSubmit(async (data) => {
                const token = localStorage.getItem("token");
                if (!token) {
                  alert("You need to be logged in to add content");
                  return;
                }
                const response = await fetch(BASE_URL + "/content", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    authorization: token,
                  },
                  body: JSON.stringify(data),
                });
                const dataResponse = await response.json();
                if (response.ok) {
                  {
                    props.onClose();
                  }
                  alert(dataResponse.message);
                  loadContent({navigate,setContent});
                  return;
                } else {
                  const message=errorMessage(dataResponse.error.errorResponse.errmsg.toString())
                  alert(message);
                  return;
                }
              })}
            >
              <input
                className="flex mb-2 justify-center rounded bg-slate-300 text-black 
                p-[10px] px-[15px] w-[300px] placeholder-gray-800"
                {...register("link", {
                  required: "Link is required",
                  validate: (value) => {
                    const isValidTwitter = value
                      .toLowerCase()
                      .startsWith("https://x.com");
                    const isValidYouTube =
                      value
                        .toLowerCase()
                        .startsWith("https://www.youtube.com") ||
                      value.toLowerCase().startsWith("https://youtu.be");
                    return (
                      isValidTwitter ||
                      isValidYouTube ||
                      "Only Twitter or YouTube links are allowed"
                    );
                  },
                })}
                type="url"
                placeholder="Link(unique)"
              />
              {errors.link?.message && (
                <p className="text-red-500">
                  {typeof errors.link.message === "string" &&
                    errors.link.message}
                </p>
              )}
              <input
                className="flex mb-2 justify-center rounded bg-slate-300 text-black 
                p-[10px] px-[15px] w-[300px] placeholder-gray-800"
                {...register("type", {
                  required: "Type is required",
                  validate: (value) => {
                    const isValid =
                      value.toLowerCase().startsWith("twitter") ||
                      value.toLowerCase().startsWith("youtube");
                    return (
                      isValid || "Type must start with 'twitter' or 'youtube'"
                    );
                  },
                })}
                placeholder={`Type ("twitter" or "youtube" for now)`}
              />
              {errors.type?.message && (
                <p className="text-red-500">
                  {typeof errors.type.message === "string" &&
                    errors.type.message}
                </p>
              )}
              <input
                className="flex mb-2 justify-center rounded bg-slate-300 text-black 
                p-[10px] px-[15px] w-[300px] placeholder-gray-800"
                {...register("title", { required: "Title is required" })}
                placeholder="Title(unique)"
              />
              <input
                className="bg-purple-700 text-purple-500 rounded-lg w-full m-0 p-3 flex justify-center"
                type="submit"
                value={"Add Note"}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
