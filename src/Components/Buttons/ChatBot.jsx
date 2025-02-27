import React, { useState } from "react";
import { useAuth } from '../../Context/AuthContext'

const ChatComponent = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessage = { sender: "user", text: input, user_id: user._id };
      setMessages((prev) => [...prev, newMessage]); // Add user message

      // Add a loading message for AI response
      const loadingMessage = { sender: "bot", text: "Thinking...", loading: true };
      setMessages((prev) => [...prev, loadingMessage]);

      try {
        const response = await fetch("https://foodimetric-backend.onrender.com/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMessage),
        });

        const data = await response.json();

        setMessages((prev) =>
          prev.map((msg) =>
            msg.loading ? { sender: "bot", text: data.response } : msg
          )
        );
      } catch (error) {
        console.error("Network error:", error);

        setMessages((prev) =>
          prev.map((msg) =>
            msg.loading
              ? { sender: "bot", text: "Network error! Please try again.", error: true }
              : msg
          )
        );
      }

      setInput("");
    }
  };

  return (
    <div className="relative">
      <input type="checkbox" id="chat-toggle" className="hidden" />
      <label
        htmlFor="chat-toggle"
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg cursor-pointer"
        style={{ backgroundColor: "#ed3300b3", color: "#FFFFFF" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 4.418-4 8-9 8-1.957 0-3.764-.568-5.257-1.538L3 20l1.538-3.743A9.027 9.027 0 0 1 3 12c0-4.418 4-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </label>

      <div className="chat-container">
        <div className="chat-window">
          <div className="chat-header">
            <h2 className='text-white'>NutriBot Chat</h2>
            <label htmlFor="chat-toggle" className="close-btn">
              <i className="ti-close"></i>
            </label>
          </div>

          <div className="chat-body w-full flex flex-col items-center justify-center">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 mb-2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 4.418-4 8-9 8-1.957 0-3.764-.568-5.257-1.538L3 20l1.538-3.743A9.027 9.027 0 0 1 3 12c0-4.418 4-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <p className="text-center text-lg font-medium">Start a conversation with NutriBot!</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex w-full ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`message text-pretty ${message.error
                      ? "bg-white text-red-600 border border-red-500 p-2 rounded-md"
                      : message.sender === "user"
                        ? "user-message font-heading-font"
                        : "bot-message font-base-font"
                      } ${message.loading ? "animate-pulse" : ""}`} // Add animation for loading message
                  >
                    {message.text}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}> <i className="ti-location-arrow"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
