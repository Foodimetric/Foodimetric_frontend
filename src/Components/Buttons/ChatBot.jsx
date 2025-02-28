import React, { useState, useEffect } from "react";
import { openDB } from "idb";
import { useAuth } from '../../Context/AuthContext';
import { Helmet } from "react-helmet-async";

const ChatComponent = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Open IndexedDB and create a messages store
  const openDatabase = async () => {
    return openDB("NutriBotDB", 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("messages")) {
          db.createObjectStore("messages", { keyPath: "id", autoIncrement: true });
        }
      },
    });
  };

  // Save messages to IndexedDB with timestamp
  const saveMessageToDB = async (message) => {
    const db = await openDatabase();
    const tx = db.transaction("messages", "readwrite");
    const store = tx.objectStore("messages");
    await store.put({ ...message, timestamp: Date.now() }); // Add timestamp
    await tx.done;
  };

  // Load messages from IndexedDB and delete old ones
  const loadMessages = async () => {
    const db = await openDatabase();
    const tx = db.transaction("messages", "readonly");
    const store = tx.objectStore("messages");
    const allMessages = await store.getAll();

    // Filter out messages older than 7 days
    const now = Date.now();
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
    const recentMessages = allMessages.filter(msg => msg.timestamp >= sevenDaysAgo);

    setMessages(recentMessages);

    // Remove old messages from IndexedDB
    const deleteTx = db.transaction("messages", "readwrite");
    const deleteStore = deleteTx.objectStore("messages");
    for (const msg of allMessages) {
      if (msg.timestamp < sevenDaysAgo) {
        await deleteStore.delete(msg.id);
      }
    }
    await deleteTx.done;
  };

  // Periodically clear messages older than 7 days
  useEffect(() => {
    loadMessages();
    const interval = setInterval(loadMessages, 60 * 60 * 1000); // Run every hour
    return () => clearInterval(interval);
    // eslint-disable-next-line 
  }, []);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessage = { sender: "user", text: input, user_id: user._id };
      setInput("");
      setMessages((prev) => [...prev, newMessage]);
      await saveMessageToDB(newMessage);

      const loadingMessage = { sender: "bot", text: "Thinking...", loading: true };
      setMessages((prev) => [...prev, loadingMessage]);

      try {
        const response = await fetch("https://foodimetric-backend.onrender.com/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMessage),
        });

        const data = await response.json();
        const botMessage = { sender: "bot", text: data.response };

        setMessages((prev) =>
          prev.map((msg) => (msg.loading ? botMessage : msg))
        );
        await saveMessageToDB(botMessage);
      } catch (error) {
        console.error("Network error:", error);
        const errorMessage = { sender: "bot", text: "Network error! Please try again.", error: true };

        setMessages((prev) =>
          prev.map((msg) => (msg.loading ? errorMessage : msg))
        );
        await saveMessageToDB(errorMessage);
      }

    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "NutriBot | Foodimetric",
    "description": "Foodimetric AI-powered chatbot offering personalized nutrition advice, food insights, and dietary recommendations.",
    "url": "https://foodimetric.com/dashboard",
    "applicationCategory": "Health & Fitness",
    "creator": {
      "@type": "Organization",
      "name": "Foodimetric",
      "url": "https://foodimetric.com"
    }
  };
  return (
    <div className="relative">
      <Helmet defer={false}>
        <title>NutriBot - Your Personalized Nutrition Assistant</title>
        <meta name="description" content="Chat with NutriBot for instant nutrition insights, dietary guidance, and food recommendations tailored to your health goals." />
        <meta name="keywords" content="nutrition chatbot, food insights, diet recommendations, healthy eating, personalized nutrition" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
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
