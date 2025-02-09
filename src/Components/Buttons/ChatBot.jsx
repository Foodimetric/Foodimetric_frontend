import React from "react";

const ChatbotButton = () => {
    return (
        <button
            className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
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
        </button>
    );
};

export default ChatbotButton;
