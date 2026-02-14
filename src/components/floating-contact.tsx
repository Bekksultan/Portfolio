"use client";

import { useState } from "react";

export default function FloatingContact() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMainButtonHovered, setIsMainButtonHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
      {/* Contact Icons - Appear on Hover with Staggered Animation */}
      <div
        className="relative flex flex-col items-end"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Contact Icons with Staggered Animation */}
        <div
          className={`flex flex-col gap-3 mb-4 transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-4 invisible"
          }`}
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/996777746577"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center"
            style={{
              transitionDelay: isHovered ? "0ms" : "0ms",
            }}
          >
            <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
              WhatsApp
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
            </span>
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-3.5 sm:p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group-hover:rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.57 3.83 1.64 5.45L2.1 22l4.67-1.6c1.6.93 3.44 1.44 5.27 1.44h.01c5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zM6.3 7.87c.19-.43.7-.78 1.16-.78.2 0 .38.01.55.02.2 0 .47.06.73.56.28.53.9 2.02.98 2.16.08.15.14.32.05.52-.09.2-.17.27-.3.42-.13.15-.25.26-.38.43-.12.16-.25.33-.11.62.14.3.66 1.09 1.4 1.76.96.87 1.8 1.15 2.06 1.28.26.12.41.1.56-.06.15-.16.66-.76.83-1.02.17-.26.35-.22.59-.13.24.09 1.5.71 1.76.84.26.13.44.19.5.3.08.14.08.78-.16 1.5-.25.73-1.4 1.37-1.96 1.44-.5.06-1.02.12-2.27-.4-1.56-.65-2.98-2.13-3.26-2.49-.27-.36-1.31-1.74-1.31-3.3 0-1.56.82-2.33 1.12-2.65.28-.32.61-.4.81-.4h.56c.17.02.36-.01.54.25z"/>
              </svg>
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/bekca_al"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center"
            style={{
              transitionDelay: isHovered ? "50ms" : "0ms",
            }}
          >
            <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
              Telegram
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
            </span>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3.5 sm:p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group-hover:rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.17-.04-.24-.02-.1.02-1.79 1.14-5.06 3.34-.48.33-.91.49-1.3.48-.43-.01-1.26-.24-1.88-.44-.76-.25-1.36-.38-1.31-.8.03-.22.33-.45.91-.68 3.68-1.6 6.14-2.66 7.38-3.18 3.52-1.46 4.25-1.71 4.73-1.71.1 0 .34.02.49.15.12.1.16.24.17.35-.01.11-.02.26-.04.42z"/>
              </svg>
            </div>
          </a>

          {/* Messenger */}
          <a
            href="https://www.messenger.com/e2ee/t/9822700471088039/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center"
            style={{
              transitionDelay: isHovered ? "100ms" : "0ms",
            }}
          >
            <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
              Messenger
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
            </span>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3.5 sm:p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group-hover:rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.33.24.54l-.23 1.96c-.04.36.32.63.66.5l2.17-.83c.18-.07.38-.09.56-.05.66.17 1.36.26 2.08.26 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2zm1.13 12.3l-2.62-2.79-5.07 2.79L9.7 10.5l2.62 2.79 5.07-2.79-3.26 4.8z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Main Button with Pulse Animation */}
        <div className="relative">
          {/* Pulse Effect */}
          {isMainButtonHovered && (
            <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></span>
          )}
          
          {/* Main Button */}
          <button
            onMouseEnter={() => setIsMainButtonHovered(true)}
            onMouseLeave={() => setIsMainButtonHovered(false)}
            className="relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 sm:p-5 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.328A11.95 11.95 0 015.25 20.25a.75.75 0 01-.362-.066c-1.207-.538-2.422-1.25-3.124-2.088a.75.75 0 01-.128-.865A11.196 11.196 0 011.5 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            
            {/* Tooltip for main button */}
            <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
              Contact me
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
            </span>
          </button>
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
            3
          </span>
        </div>
      </div>
    </div>
  );
}