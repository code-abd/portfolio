'use client';

import { useEffect, useState } from 'react';

const words = ['Abdullah Nadeem', 'code-abd', 'Fullstack Developer', 'Creative Coder'];

export default function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    if (!isDeleting && subIndex < currentWord.length) {
      setTimeout(() => setSubIndex((prev) => prev + 1), 100);
    } else if (isDeleting && subIndex > 0) {
      setTimeout(() => setSubIndex((prev) => prev - 1), 50);
    } else {
      setTimeout(() => {
        setIsDeleting((prev) => !prev);
        if (!isDeleting) {
          setTimeout(() => {
            setIndex((prev) => (prev + 1) % words.length);
          }, 1000);
        }
      }, 800);
    }

    setDisplayText(currentWord.substring(0, subIndex));
  }, [subIndex, isDeleting]);

  return (
    <h1 className="text-2xl md:text-3xl font-bold text-gradient whitespace-nowrap">
      {displayText}
      <span className="animate-pulse text-white">|</span>
    </h1>
  );
}
