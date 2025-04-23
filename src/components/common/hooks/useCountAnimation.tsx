import { useState, useEffect } from 'react';

const useCountAnimation = (end: number, duration: number = 2000, id: string = 'default') => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const storageKey = `statsAnimated-${id}`;
    const hasAnimatedBefore = localStorage.getItem(storageKey);

    console.log(`[${id}] Animation Status:`, {
      hasAnimatedBefore,
      currentCount: count,
      targetValue: end,
      duration,
      storageKey
    });

    if (!hasAnimatedBefore && !hasAnimated) {
      console.log(`[${id}] Starting new animation from`, count, 'to', end);
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const newCount = Math.floor(progress * end);
        setCount(newCount);

        if (progress < 1) {
          console.log(`[${id}] Animation frame:`, {
            progress: Math.round(progress * 100) + '%',
            value: newCount
          });
          window.requestAnimationFrame(step);
        } else {
          console.log(`[${id}] Animation complete:`, {
            finalValue: end,
            duration: duration + 'ms'
          });
          setHasAnimated(true);
          localStorage.setItem(storageKey, 'true');
        }
      };

      window.requestAnimationFrame(step);
    } else {
      console.log(`[${id}] Using final value:, end`);
      setCount(end);
    }

    // Cleanup function to handle component unmounting
    return () => {
      console.log(`[${id}] Animation cleanup`);
    };
  }, [end, duration, id, hasAnimated]);

  return count;
};

export default useCountAnimation;