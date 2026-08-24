"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
};

export default function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 1600,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
          );
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="text-gradient font-display font-bold">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle" aria-hidden="true">
        &nbsp;
      </span>
    </span>
  );
}