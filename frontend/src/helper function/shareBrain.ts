import { NavigateFunction } from "react-router-dom";

export const getHash = async ({
  navigate,
}: {
  navigate: NavigateFunction;
}): Promise<string> => {
  const token = localStorage.getItem("token");
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  if (!token) {
    navigate("/signin");
    return "";
  }
  const response = await fetch(`${BASE_URL}/brain/getHash`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  });
  const data = await response.json();
  if (response.status === 200) {
    return data.hash;
  }
  return "";
};
export const switchStatus = async ({
  userStatus,
  navigate,
}: {
  userStatus: boolean | undefined;
  navigate: NavigateFunction;
}): Promise<boolean> => {
  const token = localStorage.getItem("token");
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  if (!token) {
    navigate("/signin");
    return false;
  }
  try {
    const response = await fetch(`${BASE_URL}/brain/changeStatus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        status: userStatus,
      }),
    });

    const data = await response.json();
    console.log("🧠 changeStatus response:", data);

    // ✅ Check response status only
    return response.status === 200;
  } catch (err) {
    console.error("❌ switchStatus error:", err);
    return false;
  }
};

