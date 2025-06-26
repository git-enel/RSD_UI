"use client";

import Image from "next/image";
import CountUp from "./CountUp";

export const BrandingSide = () => {
  return (
    <div className="px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 py-10">
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 text-left">
          Who Have <span className="text-gray-500">Joined</span>
          <span className="text-gray-900"> Us</span>
        </h1>
        <h3 className="text-base sm:text-lg text-gray-900 mt-2">
          Look at how many people and businesses trust us, <br />
          <span>and how happy they are with our services!</span>
        </h3>
      </div>

      <div>
        <div className="flex -space-x-2 overflow-hidden mt-10">
          {[
            "/asset/person1.jpg",
            "/asset/person2.jpg",
            "/asset/person3.jpeg",
            "/asset/person4.jpg",
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Person ${index + 1}`}
              width={40}
              height={40}
              className="inline-block size-10 rounded-full ring-2 ring-white"
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 mt-6">
          <div>
            <CountUp
              from={0}
              to={53}
              duration={5}
              className="text-2xl font-bold font-sans text-gray-800"
            />
            <h3 className="font-sans text-sm sm:text-base">Partner</h3>
          </div>
          <div>
            <CountUp
              from={0}
              to={543}
              duration={5}
              className="text-2xl font-bold font-sans text-gray-800"
            />
            <h3 className="font-sans text-sm sm:text-base">Client Review</h3>
          </div>
          <div>
            <CountUp
              from={0}
              to={4.96}
              decimals={2}
              duration={3}
              className="text-2xl font-bold font-sans text-gray-800"
            />
            <h3 className="font-sans text-sm sm:text-base">Positive Rating</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
