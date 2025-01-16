import React from 'react';
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaGun } from "react-icons/fa6";

export default function Footer() {
  return (

    <footer className="w-full text-white flex py-12 flex-col items-center space-y-6">

      <div className="flex space-x-6">
        <a href="https://guns.lol/pxnika" target="_blank" rel="noopener noreferrer" className="text-white transition duration-300 transform hover:scale-125">
          <FaGun size={36} />
        </a>
        <a href="https://discord.gg/panikamods" target="_blank" rel="noopener noreferrer" className="text-white transition duration-300 transform hover:scale-125">
          <FaDiscord size={36} />
        </a>
        <a href="https://www.youtube.com/@Dionisz" target="_blank" rel="noopener noreferrer" className="text-white transition duration-300 transform hover:scale-125">
          <GrYoutube size={36} />
        </a>
        <a href="https://t.me/panikamedia" target="_blank" rel="noopener noreferrer" className="text-white transition duration-300 transform hover:scale-125">
          <FaTelegram size={36} />
        </a>

      </div>
      <p className="text-xl font-italic bg-clip-text text-white text-center transform ">&copy; Panika Mods - all rights reserved</p>
    </footer>
  );
}
