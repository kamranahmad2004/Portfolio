import React, { useState, useEffect } from "react";

const TypingEffect = ({ texts, speed = 100, pause = 3000, className = "" }) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const type = () => {
      if (isTyping) {
        if (charIndex < texts[textIndex].length) {
          setCurrentText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), pause);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const typingTimeout = setTimeout(type, isTyping ? speed : speed / 2);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isTyping, texts, textIndex, speed, pause]);

  return <div className={className}>{currentText}|</div>;
};

export default TypingEffect;
