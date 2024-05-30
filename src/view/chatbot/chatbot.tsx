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
  const apiUrl= import.meta.env.VITE_API_URL
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

      const response = await fetch(`${apiUrl}/chatbot`, options);
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

    recognition.onresult = async (e:any) => {
      const transcript = e.results[0][0].transcript;
      setValue(transcript);
    };

    recognition.start();
  };

  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex flex-col flex-grow m-0 pr-0 max-h-full overflow-y-scroll"
        ref={chatContainerRef}
      >
        <div className="mx-auto p-4 w-full md:w-1/2">
          {chatHistory.map((chatItem, index) => (
            <div key={index} className="bg-white shadow-lg mb-4 rounded-lg">
              <p
                className={`font-bold bg-white p-2 rounded-lg ${
                  chatItem.role === "user" ? "text-blue-500" : "text-green-500"
                }`}
              >
                {chatItem.role === "user" ? "You" : "Fitness trainer"}
              </p>
              <p className="bg-white p-2 rounded-lg">
                {chatItem.parts.map((part, partIndex) => (
                  <span key={partIndex}>{part.text}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      {showFaqs && (
        <div className="flex justify-center p-4 w-full">
          <div className="flex flex-wrap justify-center gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-blue p-4 border border-transparent hover:border-blue-500 rounded-lg transition cursor-pointer"
                onClick={() => handleFaqClick(faq)}
              >
                {faq}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="bottom-0 sticky p-4 w-full">
        <div className="relative mx-auto w-full md:w-1/2">
          <input
            value={value}
            placeholder="Enter a prompt here"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="border-gray-300 p-4 border focus:border-blue-500 rounded-full w-full text-gray-800 placeholder-gray-500 focus:outline-none"
            disabled={isSending}
          />
          <button
            className="top-1/2 right-14 absolute active:bg-gray-300 p-2 rounded-full text-white transform -translate-y-1/2"
            style={{
              backgroundColor: value ? "#1e293b" : "transparent",
            }}
            disabled={isSending || value.trim() === ""}
            aria-label="Send message"
          >
            <IoMdSend
              className="inline text-xl"
              onClick={() => getResponse(value)}
            />
          </button>
          <button className="inline top-1/2 right-2 absolute p-2 rounded-full transform -translate-y-1/2 hover:outline-2 hover:outline hover:outline-blue-500">
            <IoMdMic
              className="text-xl hover:cursor-pointer"
              onClick={handleOnRecord}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
