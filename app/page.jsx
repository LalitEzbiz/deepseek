"use client"

import { assets } from "@/assets/assets";
import Message from "@/components/Message";
import PromptBox from "@/components/PromptBox";
import Sidebar from "@/components/sidebar";
import { Prompt } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        <Sidebar expand={expand} setExpand={setExpand}/>
        {/* sidebar */}
        <div className="flex-1 flex flex-col bg-[#292a2d] text-white relative">
          {/* Mobile top bar */}
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image
              onClick={() => setExpand(!expand)}
              className="rotate-180"
              src={assets.menu_icon}
              alt=""
            />
            <Image className="opacity-70" src={assets.chat_icon} alt="" />
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8">
            {messages.length === 0 ? (
              <>
                <div className="flex items-center gap-3">
                  <Image src={assets.logo_icon} alt="" className="h-16 w-auto" />
                  <p className="text-2xl font-medium">Hi, I'm deepseek.</p>
                </div>
                <p className="text-sm mt-2">How can I help you today</p>
              </>
            ) : (
              <div>
                <Message role='user' content='What is next js'/>
              </div>
            )}

            {/* prompt box */}
            <PromptBox isLoading={isLoading} setisLoading={setisLoading}/>

            <p className="text-xs absolute bottom-1 text-gray-500 ">Ai generated forr refence only </p>
          </div>
        </div>
      </div>
    </div>
  );
}
