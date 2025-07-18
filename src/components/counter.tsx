'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { usePathname } from 'next/navigation';

type CounterProps = {
  value: number;
  duration?: number; // milliseconds
};

export default function Counter({ value, duration = 1000 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // allow multiple triggers
  const pathname = usePathname(); // detect route changes

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = Math.floor(progress * value);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration, pathname]); // runs on pathname (route) change

  return <span ref={ref}>{count}</span>;
}
