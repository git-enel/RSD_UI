"use client";

import { useState } from "react";
import SplitText from "@/components/reuse-compo/SplitText";
import { useRouter } from "next/navigation";

export default function Home() {
  const [step, setStep] = useState<"hello" | "welcome">("hello");
  const [text, setText] = useState("Hello!");
  const router = useRouter();

  const handleAnimationComplete = () => {
    if (step === "hello") {
      setTimeout(() => {
        setStep("welcome");
        setText("Welcome to Rumah Solusi Digital");
      }, 1000);
    }

    if (step === "welcome") {
      setTimeout(() => {
        router.push("/home");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SplitText
        key={text}
        text={text}
        className="text-3xl font-bold text-gray-800"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
