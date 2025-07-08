type Content = {
  _id: string;
  link: string;
  type: string;
  title: string;
  userId: string;
  __v: number;
};

export type Contents = Content[];
export type variants = "primary" | "secondary";
export const variantStyles = {
  primary: "bg-purple-700 text-purple-500 rounded-lg",
  secondary: "bg-purple-500 text-purple-700 rounded-lg",
};
export const defaultStyles = "cursor-pointer flex gap-2 items-center";

export const sizeStyles = {
  sm: "p-2 m-1 w-fit",
  md: " p-2 m-3 w-fit",
  lg: "px-2 gap-5 py-3 m-5 w-fit text-[25px]",
};
