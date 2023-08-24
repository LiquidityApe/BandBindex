import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(0);

  const { theme } = useSelector((state) => state.Theme);
  const textTheme = theme ? "text-slate-950" : "text-slate-300";

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(10, 0, 0, 0);

      if (now > target) {
        target.setDate(target.getDate() + 1);
      }

      const timeDifference = target.getTime() - now.getTime();
      const remainingSeconds = Math.floor(timeDifference / 1000);
      setCountdown(remainingSeconds);
    };

    calculateCountdown();

    const interval = setInterval(() => {
      calculateCountdown();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <font className={textTheme}>
        <b>Next Update:</b>
      </font>{" "}
      {formatTime(countdown)}
    </div>
  );
};

export default CountdownTimer;
