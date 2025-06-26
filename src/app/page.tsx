"use client";

import dynamic from "next/dynamic";

const AnimatedText = dynamic(() => import("@/components/WelcomePage/AnimatedText"), {
  ssr: false,
});

export default function Welcome() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <AnimatedText />
    </main>
  );
}