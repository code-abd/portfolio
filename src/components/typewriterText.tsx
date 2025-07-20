'use client';

import { useEffect, useState } from 'react';

const words = ['Abdullah Nadeem', 'code-abd', 'Fullstack Developer', 'Creative Coder'];

export default function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentWord = words[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && subIndex < currentWord.length) {
      timeout = setTimeout(() => setSubIndex(subIndex + 1), 100);
    } else if (isDeleting && subIndex > 0) {
      timeout = setTimeout(() => setSubIndex(subIndex - 1), 50);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting((prev) => !prev);
        if (!isDeleting) {
          setTimeout(() => setIndex((prev) => (prev + 1) % words.length), 1000);
        }
      }, 800);
    }

    setDisplayText(currentWord.substring(0, subIndex));

    return () => clearTimeout(timeout);
  }, [index, subIndex, isDeleting]);

  return (
    <h1 className="text-2xl md:text-3xl font-bold text-gradient whitespace-nowrap">
      {displayText}
      <span className="animate-pulse text-white">|</span>
    </h1>
  );
}
