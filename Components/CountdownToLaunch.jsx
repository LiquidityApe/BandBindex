import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CountdownToLaunch = () => {
  const { theme } = useSelector((state) => state.Theme);
  const backgroundTheme = !theme ? "bg-slate-300" : "bg-[#0A0D0D]";
  const textTheme = !theme ? "text-slate-950" : "text-slate-300";

  const targetDate = new Date("2023-09-07T00:00:00"); // 7th of September 2023
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const interval = setInterval(updateCountdown, 1000); // update every second

    return () => clearInterval(interval); // clear the interval when the component is unmounted
  }, []);

  return (
    <div
      className={`p-4 ${backgroundTheme} ${textTheme} w-[70%] md:w-[40%] mx-auto rounded-md shadow-md`}
    >
      <h2 className='text-xl font-bold text-center mb-4 '>
        Time until Launch:
      </h2>
      <div className='flex justify-around'>
        <div className='flex flex-col items-center'>
          <span className=' text-2xl md:text-3xl '>{timeRemaining.days}</span>
          <div className='hidden md:flex'>Days</div>
          <div className='flex text-sm md:hidden'>D</div>
        </div>
        <div className='flex flex-col items-center'>
          <span className=' text-2xl md:text-3xl '>{timeRemaining.hours}</span>
          <div className='hidden md:flex'>Hours</div>
          <div className='flex text-sm md:hidden'>H</div>
        </div>
        <div className='flex flex-col items-center'>
          <span className=' text-2xl md:text-3xl '>
            {timeRemaining.minutes}
          </span>
          <div className='hidden md:flex'>Minutes</div>
          <div className='flex text-sm md:hidden'>M</div>
        </div>
        <div className='flex flex-col items-center'>
          <span className=' text-2xl md:text-3xl '>
            {timeRemaining.seconds}
          </span>
          <div className='hidden md:flex'>Seconds</div>
          <div className='flex text-sm md:hidden'>S</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownToLaunch;
