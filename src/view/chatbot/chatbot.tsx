import { ChangeEvent, useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

export const Chatbot = () => {
  const [value, setValue] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      role: "user",
      parts: [
        {
          text: "Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu orem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu",
        },
      ],
    },
  ]);
  const [buttonBgColor, setButtonBgColor] = useState("transparent");

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const getResponse = async () => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("http://localhost:3000/chatbot", options);
      const data = await response.text();
      console.log(data);

      setChatHistory((oldChatHistory) => [
        ...oldChatHistory,
        {
          role: "user",
          parts: [{ text: value }],
        },
        {
          role: "model",
          parts: [{ text: data }],
        },
      ]);

      setValue("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setButtonBgColor(e.target.value.trim() === "" ? "transparent" : "#1e293b");
  };

  return (
    <div>
      <div className="chatbot flex flex-col justify-end items-center max-h-[calc(100vh-10rem)] overflow-y-auto">
        <section
          className="search-section bottom-10 relative flex flex-col items-center w-full overflow-y-auto"
          ref={chatContainerRef}
        >
          <div className="search-result mb-10 relative w-1/2">
            {chatHistory.map((chatItem, index) => (
              <div key={index}>
                <p className="answer font-bold">
                  {chatItem.role === "user" ? "You" : "Fitness trainer"} {""}
                </p>
                <p className="mb-10 w-full">
                  {chatItem.parts.map((part) => part.text).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="input-container w-full ">
        <div className="relative w-full flex justify-center">
          <input
            value={value}
            placeholder="Enter a prompt here"
            onChange={handleInputChange}
            className="w-1/2 p-4 bg-gray3 rounded-3xl border text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-gray4"
          />
          <button
            onClick={getResponse}
            className="absolute right-2 top-2 bottom-2 text-white p-2 rounded-full bg-transparent hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-100"
            style={{ backgroundColor: buttonBgColor }}
          >
            <IoMdSend className="m-auto text-xl" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
