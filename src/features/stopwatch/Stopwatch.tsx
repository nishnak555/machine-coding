import { useStopwatch } from "../stopwatch/useStopwatch";

export const Stopwatch = () => {
  const { time, start, pause, reset, reverse } = useStopwatch();

  return (
    <div>
      <h2>Time: {time}s</h2>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      <button onClick={reverse}>Reverse</button>
    </div>
  );
};
