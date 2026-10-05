"use client";

import { useState } from "react";
import PopCard from "@/app/components/PopCard";

const Page = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full h-screen bg-[#0A0A0A] p-10 relative font-sans">
      
      <nav className="fixed top-0 left-0 w-full h-20 text-zinc-100 flex items-center px-20 max-md:px-10 justify-between z-10">
        <div className="logo">
          <h1 className="text-xl font-semibold italic">Card.</h1>
        </div>

        <ul className="flex items-center gap-5 max-md:hidden">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">How it's Work</li>
        </ul>

        <button
          onClick={() => setActive(!active)}
          className="text-zinc-900 bg-zinc-100 py-1 px-3 font-semibold rounded text-sm cursor-pointer hover:scale-105 transition-all active:scale-98"
        >
          Show Card
        </button>
      </nav>

      {active && (
        <div
          onClick={() => setActive(false)}
          className="fixed inset-0 z-8 flex items-center justify-center"
        >
          <div onClick={(e) => e.stopPropagation()}>
            <PopCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;