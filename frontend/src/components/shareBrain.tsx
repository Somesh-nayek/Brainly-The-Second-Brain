import { NavigateFunction } from "react-router-dom";
import { Close } from "../icons/icons";
import { Button } from "./button";
import { useEffect, useRef, useState } from "react";
import {
  defaultStyles,
  sizeStyles,
  variantStyles,
} from "../Constants";
import { getHash, switchStatus } from "../helper function/shareBrain";

interface Props {
  open: boolean;
  onClose: () => void;
  userStatus: boolean | undefined;
  setUserStatus: (val: boolean | undefined) => void;
  navigate: NavigateFunction;
}

export const ShareBrain = (props: Props) => {
  const { open, onClose, userStatus, setUserStatus, navigate } = props;
  const baseUrl=window.location.origin;
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>("hii there");
  // 📋 Copy to clipboard
  async function copyToClipboard() {
    if (textAreaRef.current) {
      await navigator.clipboard.writeText(textAreaRef.current.value);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 1000);
    }
  }

  // 🔁 Resize textarea to fit content
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [value]);

  // 🔐 Fetch or block share URL
  useEffect(() => {
    let isMounted = true;

    if (userStatus === true) {
      const fetchHash = async () => {
        const hash = await getHash({ navigate });
        if (isMounted) {
          setValue(`${baseUrl}/YourFriend/${hash}`);
          console.log("Hash:", hash);
        }
      };
      fetchHash();
    } else {
      setValue("You can't share your brain. Please make it public to share.");
    }

    return () => {
      isMounted = false;
    };
  }, [userStatus, navigate]);

  // 🔘 Handle copy click
  const handleCopy = () => {
    if (userStatus) copyToClipboard();
  };

  // 🔄 Handle status toggle
  const handleStatusChange = async () => {
    if (typeof userStatus !== "boolean") return;
    const status = await switchStatus({ userStatus, navigate });
    console.log("Status updated:", status);
    if (status) {
      setUserStatus(!userStatus);
    } else {
      console.error("Failed to update status");
    }
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-xl flex flex-col items-center gap-4">
            {/* ❌ Close Button */}
            <div className="self-end cursor-pointer" onClick={onClose}>
              <Close />
            </div>

            {/* 🔗 Share Box */}
            <div className="w-fit flex flex-col sm:flex-row items-center justify-between gap-4">
              <textarea
                ref={textAreaRef}
                readOnly
                value={value}
                rows={1}
                className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full sm:min-w-[400px] resize-none overflow-hidden text-sm text-gray-800"
              />

              {/* 📋 Copy Button */}
              <div>
                {copySuccess === "" ? (
                  <div
                    className={`${defaultStyles} ${
                      sizeStyles.md
                    } px-4 py-2 rounded-md ml-1 text-white ${
                      !userStatus
                        ? variantStyles.secondary
                        : variantStyles.primary
                    } cursor-pointer transition duration-150 ease-in-out hover:opacity-90`}
                    onClick={handleCopy}
                  >
                    Copy
                  </div>
                ) : (
                  <div className="text-green-600 font-semibold flex items-center gap-1">
                    ✅ {copySuccess}
                  </div>
                )}
              </div>
            </div>

            {/* 🔄 Status Toggle */}
            <div className="mt-2 flex items-center gap-3">
              <span className="text-gray-700 font-medium">Current status:</span>
              <Button
                text={userStatus ? "Public" : "Private"}
                size="md"
                variant="primary"
                styles="px-4 py-2 w-[100px] text-[16px] rounded-lg"
                onClick={handleStatusChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
