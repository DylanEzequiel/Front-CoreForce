import { useState } from "react";

interface ChatMessage {
  role: "user" | "model";
  parts: string;
}

export const Chatbot = () => {
  const [value, setValue] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

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
        { role: "user", parts: value },
        { role: "model", parts: data },
      ]);
      setValue("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chatbot">
      <section className="search-section">
        <div className="input-container">
          <input
            value={value}
            placeholder="When is Christmas?"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={getResponse}>Ask me</button>
        </div>
        <div className="search-result">
          {chatHistory.map((chatItem, index) => (
            <div key={index}>
              <p className="answer">
                {chatItem.role}: {chatItem.parts}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
