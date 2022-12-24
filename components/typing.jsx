import React, { useState, useEffect } from "react";

export const TypingText = ({ text }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setTimeout(100);
    const timeout = setTimeout(() => {
      setTextIndex(textIndex + 1);
      if (textIndex === text.length - 1) {
        setTyping(false);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [textIndex]);

  return (
    <p className="typing-text font-mono text-5xl leading-tight text-gray-800">
      {typing ? text.substring(0, textIndex + 1) : text}
    </p>
  );
};
