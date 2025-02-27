import React, { useState } from "react";
// import { io } from "socket.io-client";
import { useAuth } from '../../Context/AuthContext'
// const socket = io("https://foodimetric-backend.onrender.com");

const ChatComponent = () => {
  // const { user } = useAuth()
  // const [messages, setMessages] = useState([]);
  // const [input, setInput] = useState("");

  // useEffect(() => {
  //   // Listen for incoming messages from the server
  //   socket.on("chat_response", (data) => {
  //     setMessages((prev) => [...prev, { sender: "bot", text: data.text }]);
  //   });

  //   return () => {
  //     socket.off("chat_response"); // Cleanup listener on unmount
  //   };
  // }, []);

  // const handleSendMessage = () => {
  //   if (input.trim()) {
  //     const newMessage = { sender: "user", text: input };

  //     setMessages([...messages, newMessage]); // Update frontend UI instantly
  //     socket.emit("chat_message", { text: input, user_id: user._id }); // Send message to backend
  //     setInput("");
  //   }
  // };

  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Fetch messages from the server periodically (polling)
  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     try {
  //       const response = await fetch("https://foodimetric-backend.onrender.com/chat");
  //       if (response.ok) {
  //         const data = await response.json();
  //         setMessages(data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching messages:", error);
  //     }
  //   };

  //   fetchMessages();
  //   const interval = setInterval(fetchMessages, 3000); // Poll every 3 seconds

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  // Send a message to the backend
  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessage = { sender: "user", text: input, user_id: user._id };

      setMessages((prev) => [...prev, newMessage]); // Update UI immediately

      try {
        const response = await fetch("https://foodimetric-backend.onrender.com/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMessage),
        });

        console.log("this is ai response", response);

        if (!response.ok) {
          console.error("Message failed to send");
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }

      setInput("");
    }
  };

  return (
    <div className="relative">
      {/* Hidden Checkbox Toggle */}
      <input type="checkbox" id="chat-toggle" className="hidden" />

      {/* Chat Toggle Button */}
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
            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 4.418-4.03 8-9 8-1.957 0-3.764-.568-5.257-1.538L3 20l1.538-3.743A9.027 9.027 0 0 1 3 12C3 7.582 7.03 4 12 4s9 3.582 9 8z"
          />
        </svg>
      </label>

      {/* Chat Container (sibling of #chat-toggle) */}
      <div className="chat-container">
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <h2 className='text-white'>NutriBot Chat</h2>
            <label htmlFor="chat-toggle" className="close-btn">
              <i className="ti-close"></i>
            </label>
          </div>

          {/* Chat Body */}
          <div className="chat-body w-full flex flex-col items-center justify-center">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center text-gray-500">
                {/* Chat Icon */}
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
                {/* Placeholder Text */}
                <p className="text-center text-lg font-medium">Start a conversation with NutriBot!</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex w-full ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`message ${message.sender === "user" ? "user-message font-heading-font" : "bot-message font-base-font"}`}>
                    {message.text}
                  </div>
                </div>
              ))
            )}
          </div>


          {/* Chat Footer */}
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