import React from 'react';

export default function ContactPage() {
  return (
    
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      
      <div className="text-center mb-8 lg:mb-12">
        <h1 className="text-white text-5xl font-extrabold drop-shadow-2xl">Contact Us</h1>
        <h2 className="text-gray-400 mt-3 text-2xl font-italic drop-shadow-lg">
          We'd love to hear from you! Join our community on Discord or Telegram.
        </h2>
      </div>

      <div className="max-w-md mx-auto p-8 rounded-3xl text-white">

        <div className="space-y-6">
          <h1 className="text-gray-400 text-xl font-italic drop-shadow-lg text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500">
            discord - hxkaxgod or panikaxz
          </h1>
          <a
            href="https://discord.com/users/963419271034204170"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-5 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-3xl text-center transform hover:scale-110 transition-all duration-500 ease-in-out hover:rotate-2 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-pink-300">
            Send a message to the Mod Maker
          </a>
          <a
            href="https://discord.gg/panikamods"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-5 px-6 bg-gradient-to-r from-[#5865F2] to-[#7289DA] text-white font-semibold rounded-3xl text-center transform hover:scale-110 transition-all duration-500 ease-in-out hover:rotate-2 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-300">
            Join us on Discord
          </a>
          <a
            href="https://t.me/panikamedia"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-5 px-6 bg-gradient-to-r from-[#2BA2DF] to-[#1C8BC3] text-white font-semibold rounded-3xl text-center transform hover:scale-110 transition-all duration-500 ease-in-out hover:rotate-2 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-300">
            Join us on Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
