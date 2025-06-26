"use client";

import Image from "next/image";
import { IconSearch } from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <div className="absolute top-2/5 left-40 -translate-y-1/2 z-10">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-gray-900 text-left mt-32">
          Connecting your <span className="text-yellow-400">ideas</span>
          <br />
          to the <span className="text-emerald-400">world</span>
        </h1>
        <div className="mt-8 flex max-w-md">
          <input
            type="text"
            placeholder="Search something..."
            className="w-full px-4 py-3 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="px-4 py-3 bg-yellow-400 text-white font-semibold rounded-r-xl hover:bg-yellow-500 transition flex items-center justify-center">
            <IconSearch className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-20 text-gray-800 text-xl">
          &ldquo;Bringing your ideas to life, one line of code at a time.
          <br />
          <span>Let us build your perfect application.&rdquo;</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 transform rounded-xl overflow-hidden w-[650px] mr-40 ml-10">
        <Image
          src="/asset/monyet2.png"
          alt="Monyet"
          width={1700}
          height={1200}
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
}
