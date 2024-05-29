import { ChangeEvent, useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
("use client");

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

export const Chatbot = () => {
  const [value, setValue] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [showFaqs, setShowFaqs] = useState(true);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const faqs = [
    "What is the best way to lose weight?",
    "How often should I exercise?",
    "What are the benefits of strength training?",
    "How can I improve my endurance?",
    "What is the best diet for muscle gain?",
  ];
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const getResponse = async (value: string) => {
    setIsSending(true);

    setShowFaqs(false);

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
      setIsSending(false);
    } catch (error) {
      setIsSending(false);
      console.error(error);
    }
    setIsSending(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isSending && value.trim() !== "") {
      getResponse(value);
    }
  };
  const handleFaqClick = (faq: string) => {
    getResponse(faq);
    setShowFaqs(false);
  };
  const handleOnRecord = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onresult = async (e) => {
      const transcript = e.results[0][0].transcript;
      setValue(transcript);
    };

    recognition.start();
  };

  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex flex-col flex-grow overflow-y-scroll max-h-full"
        ref={chatContainerRef}
      >
        <div className="w-full md:w-1/2 p-4 mx-auto ">
          {chatHistory.map((chatItem, index) => (
            <div key={index} className="mb-4 bg-white rounded-lg shadow-lg">
              <p
                className={`font-bold bg-white p-2 rounded-lg ${
                  chatItem.role === "user" ? "text-blue-500" : "text-green-500"
                }`}
              >
                {chatItem.role === "user" ? "You" : "Fitness trainer"}
              </p>
              <p className="p-2 bg-white rounded-lg">
                {chatItem.parts.map((part, partIndex) => (
                  <span key={partIndex}>{part.text}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      {showFaqs && (
        <div className="w-full p-4 flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow-blue cursor-pointer transition border border-transparent hover:border-blue-500"
                onClick={() => handleFaqClick(faq)}
              >
                {faq}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="w-full p-4 sticky bottom-0">
        <div className="relative w-full md:w-1/2 mx-auto">
          <input
            value={value}
            placeholder="Enter a prompt here"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="w-full p-4 rounded-full border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            disabled={isSending}
          />
          <button
            className="absolute right-14 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full active:bg-gray-300"
            style={{
              backgroundColor: value ? "#1e293b" : "transparent",
            }}
            disabled={isSending || value.trim() === ""}
            aria-label="Send message"
          >
            <IoMdSend
              className="text-xl inline"
              onClick={() => getResponse(value)}
            />
          </button>
          <button className="absolute  inline  -translate-y-1/2 right-2 top-1/2 transform  p-2 rounded-full hover:outline-2 hover:outline hover:outline-blue-500">
            <IoMdMic
              className="text-xl hover:cursor-pointer "
              onClick={handleOnRecord}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
