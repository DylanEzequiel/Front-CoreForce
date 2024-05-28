import { ChangeEvent, useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}
const predefinedQuestions = [
  "Consejos para mantenerse activo durante un día ajetreado",
  "Alternativas a los ejercicios cardiovasculares tradicionales",
  "Nutrición adecuada para el crecimiento muscular",
  "¿Por qué es importante el entrenamiento cruzado?",
];

export const Chatbot = () => {
  const [value, setValue] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showPredefinedQuestions, setShowPredefinedQuestions] = useState(true);
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

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const getResponse = async (value: string) => {
    if (value.trim() === "") return;

    setIsButtonDisabled(true);
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
      setIsButtonDisabled(false);
      setValue("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handlePredefinedQuestionClick = (question: string) => {
    setShowPredefinedQuestions(false);
    setValue(question);
    getResponse(question);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-col justify-end items-center overflow-y-auto flex-grow bg-gray-100">
        <section
          className="search-section relative flex flex-col items-center w-full py-10 px-4"
          ref={chatContainerRef}
        >
          <div className="search-result mb-10 w-full max-w-lg">
            {chatHistory.map((chatItem, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                <p className="font-bold text-gray-800">
                  {chatItem.role === "user" ? "You" : "Fitness trainer"}{" "}
                </p>
                <p className="text-gray-800 mb-2">
                  {chatItem.parts.map((part) => part.text).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      {showPredefinedQuestions && (
        <div className="predefined-questions flex justify-center gap-4 mb-4">
          {predefinedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handlePredefinedQuestionClick(question)}
              className="p-4 bg-white rounded-lg shadow-md text-gray-800 hover:bg-blue-200 transition-colors duration-200"
            >
              {question}
            </button>
          ))}
        </div>
      )}
      <div className="input-container flex justify-center py-4">
        <div className="relative w-full max-w-lg">
          <input
            value={value}
            placeholder="Enter a prompt here"
            onChange={handleInputChange}
            className="w-full p-4 bg-white rounded-lg shadow-md border text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300"
          />
          <button
            onClick={() => getResponse(value)}
            disabled={isButtonDisabled}
            className="absolute right-2 top-2 bottom-2 text-white p-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none transition-colors duration-200"
            style={{ backgroundColor: value && !isButtonDisabled ? "#1e293b" : "#a5b4fc" }}
          >
            <IoMdSend className="m-auto text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
