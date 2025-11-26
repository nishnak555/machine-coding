import { useState, useRef } from "react";

export const useStopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  const start = () => {
    if (timerRef.current) return;
    timerRef.current = window.setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const pause = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const reset = () => {
    pause();
    setTime(0);
  };

  const reverse = () => {
    pause();
    timerRef.current = window.setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
  };

  return { time, start, pause, reset, reverse };
};
