"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
  const [currentWord, setCurrentWord] = useState(0);
  const scrollTarget = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end start"],
  });

  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length + 2]
  );

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latest) => {
      setCurrentWord(Math.min(Math.floor(latest), words.length - 1));
    });

    return () => unsubscribe();
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introduction Layered</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your creative process deserves better.</span>{" "}
            <span className="">
              {words.map((word, idx) => (
                <span
                  key={idx}
                  className={twMerge(
                    "transition duration-500 text-white/15",
                    idx <= currentWord &&
                      "text-white transition-colors duration-300"
                  )}
                >
                  {`${word} `}
                </span>
              ))}
            </span>
            <span className="text-[#FFFF00] block">
              That&apos;s why we built Layered.
            </span>
          </div>
        </div>
        <div className="h-[200vh]" ref={scrollTarget} />
      </div>
    </section>
  );
}
