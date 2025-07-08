import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signIn } from "../helper function/SignIn";
import { signUp } from "../helper function/SignUp";
interface Props {
  text: string;
}
export function Page(props: Props) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  return (
    <div className="w-screen h-screen bg-gray-600/80 absolute flex justify-center items-center">
      <form
        className="p-4 gap-4 bg-white bg-opacity-100 flex justify-center items-center flex-col"
        onSubmit={handleSubmit((data) => {
          if (props.text == "SignUp") {
            signUp(data, navigate);
          } else {
            signIn(data, navigate);
          }
        })}
      >
        <h1 className="text-2xl font-bold text-gray-800">
          {props.text == "SignUp" ? "Sign Up" : "Sign In"}
        </h1>
        <input
          className="flex justify-center rounded bg-slate-300 text-black 
                p-[10px] px-[15px] w-[300px] placeholder-gray-800"
          {...register("username")}
          placeholder="Username"
        />
        <input
          className="flex justify-center rounded bg-slate-300 text-black 
                p-[10px] px-[15px] w-[300px] placeholder-gray-800"
          {...register("password")}
          placeholder="Password"
        />
        <input
          className="cursor-pointer p-2 m-3 w-full items-center bg-purple-700 text-purple-500 rounded-lg"
          type="submit"
          value={props.text}
        />
        <div className="">
          {props.text == "SignUp" ? (
            <div className="flex">
              Already have an account,
              <div
                onClick={() => {
                  navigate("/signin");
                }}
                className="text-blue-500 underline"
              >
                {" "}
                SignUp
              </div>
            </div>
          ) : (
            <div className="flex">
              Don't have an account,
              <div
                onClick={() => {
                  navigate("/signup");
                }}
                className="text-blue-500 underline"
              >
                Login
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
