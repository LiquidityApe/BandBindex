import React, { useState } from "react";
import { useSelector } from "react-redux";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const InsightsCard = ({
  text,
  children,
  yesterday,
  lastweek,
  lastMonth,
  tooltip,
  today,
  insights = false,
}) => {
  const { theme } = useSelector((state) => state.Theme);
  // State for tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);
  const textTheme = !theme ? "text-slate-950" : "text-slate-50";
  const textTheme2 = theme ? "text-slate-950" : "text-slate-300";
  const backgroundTheme = theme ? "bg-slate-50" : "bg-slate-900";
  const backgroundTheme2 = !theme ? "bg-slate-50" : "bg-slate-900";
  const todayRSI = !today
    ? "..."
    : today <= 30
    ? "Oversold"
    : today == 50
    ? "No Trend"
    : today < 70
    ? "Neutral"
    : today >= 70
    ? "Overbought"
    : null;

  const todaySAS = !today
    ? "..."
    : today < 40
    ? "Stop Loss"
    : today < 60
    ? "Neutral"
    : today >= 60
    ? "Dollar Cost"
    : null;
  const todayMSA = !today
    ? "..."
    : today < 40
    ? "Bearish"
    : today < 60
    ? "Neutral"
    : today >= 60
    ? "Bullish"
    : null;

  const yesterdayRSI = !yesterday
    ? "..."
    : yesterday <= 30
    ? "Oversold"
    : yesterday == 50
    ? "No Trend"
    : yesterday < 70
    ? "Neutral"
    : yesterday >= 70
    ? "Overbought"
    : null;

  const yesterdaySAS = !yesterday
    ? "..."
    : yesterday < 40
    ? "Stop Loss"
    : yesterday < 60
    ? "Neutral"
    : yesterday >= 60
    ? "Dollar Cost"
    : null;

  const yesterdayMSA = !yesterday
    ? "..."
    : yesterday < 40
    ? "Bearish"
    : yesterday < 60
    ? "Neutral"
    : yesterday >= 60
    ? "Bullish"
    : null;

  const lastweekRSI = !lastweek
    ? "..."
    : lastweek <= 30
    ? "Oversold"
    : lastweek == 50
    ? "No Trend"
    : lastweek < 70
    ? "Neutral"
    : lastweek >= 70
    ? "Overbought"
    : null;

  const lastweekSAS = !lastweek
    ? "..."
    : lastweek < 40
    ? "Stop Loss"
    : lastweek < 60
    ? "Neutral"
    : lastweek >= 60
    ? "Dollar Cost"
    : null;

  const lastweekMSA = !lastweek
    ? "..."
    : lastweek < 40
    ? "Bearish"
    : lastweek < 60
    ? "Neutral"
    : lastweek >= 60
    ? "Bullish"
    : null;

  const lastMonthRSI = !lastMonth
    ? "..."
    : lastMonth <= 30
    ? "Oversold"
    : lastMonth == 50
    ? "No Trend"
    : lastMonth < 70
    ? "Neutral"
    : lastMonth >= 70
    ? "Overbought"
    : null;

  const lastMonthSAS = !lastMonth
    ? "..."
    : lastMonth < 40
    ? "Stop Loss"
    : lastMonth < 60
    ? "Neutral"
    : lastMonth >= 60
    ? "Dollar Cost"
    : null;

  const lastMonthMSA = !lastMonth
    ? "..."
    : lastMonth < 40
    ? "Bearish"
    : lastMonth < 60
    ? "Neutral"
    : lastMonth >= 60
    ? "Bullish"
    : null;

  const todayTitle =
    text == "Social Analysis Summary"
      ? todaySAS
      : text == "Market Sentiment Analysis"
      ? todayMSA
      : text == "Relative Strength Index"
      ? todayRSI
      : null;

  const yesterdayTitle =
    text == "Social Analysis Summary"
      ? yesterdaySAS
      : text == "Market Sentiment Analysis"
      ? yesterdayMSA
      : text == "Relative Strength Index"
      ? yesterdayRSI
      : null;
  const lastWeekTitle =
    text == "Social Analysis Summary"
      ? lastweekSAS
      : text == "Market Sentiment Analysis"
      ? lastweekMSA
      : text == "Relative Strength Index"
      ? lastweekRSI
      : null;
  const lastMonthTitle =
    text == "Social Analysis Summary"
      ? lastMonthSAS
      : text == "Market Sentiment Analysis"
      ? lastMonthMSA
      : text == "Relative Strength Index"
      ? lastMonthRSI
      : null;

  return (
    <div
      className={` ${backgroundTheme} flex   ${
        theme ? "shadow-[#757780]" : "shadow-slate-800"
      } flex-col items-center justify-between w-[90vw] relative md:w-[40vw] lg:w-[28vw] mx-auto my-[5vh] lg:my-[7vh]  h-[45vh] md:h-[35vh] lg:h-[45vh]  shadow-md rounded-sm`}
    >
      <div className={`${backgroundTheme2} ${textTheme} py-2 w-full`}>
        <p
          className={`${backgroundTheme2} ${textTheme}  text-center  font-medium `}
        >
          {text}
        </p>
        <div
          className='absolute hidden md:flex duration-1000 transition-all top-2 right-2 cursor-pointer'
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <span className='mr-2' role='img' aria-label='information'>
          <InfoOutlinedIcon
                      style={{ fontSize: 25}}
                    />
          </span>{" "}
{/* This is the information icon for the tooltip, pass in the tooltip prop to change info for various components */}
          <div
            className={`absolute w-[15vw] h-[10vw] ${
              !showTooltip ? "opacity-0 hidden" : "opacity-100 flex"
            } rounded-md duration-500 p-2 transition-all shadow-sm text-xs shadow-slate-500 bg-white text-black -top-[16vh] right-4`}
          >
            {tooltip}
          </div>
        </div>
      </div>
      {children}
      {insights ? (
        <>
          <div className='absolute flex flex-col items-center top-[7vh]'>
            <p className={`font-extrabold ${textTheme2}  text-xl`}>
              <b>{todayTitle}</b>
            </p>
            {text === "Social Analysis Summary" ? (
              <p
                style={{
                  color:
                    today < 40
                      ? "Red"
                      : today < 60
                      ? "rgb(202, 138, 4)"
                      : "Green",
                }}
                className='text-[25px] font-[800]'
              >
                {today}
              </p>
            ) : text === "Market Sentiment Analysis" ? (
              <p
                style={{
                  color:
                    today < 40
                      ? "Red"
                      : today < 60
                      ? "rgb(202, 138, 4)"
                      : "Green",
                }}
                className='text-[25px] font-[800]'
              >
                {today}
              </p>
            ) : text === "Relative Strength Index" ? (
              <p
                style={{
                  color:
                    today < 31
                      ? "Green"
                      : today < 70
                      ? "rgb(202, 138, 4)"
                      : "Red",
                }}
                className='text-[25px] font-[800]'
              >
                {today}
              </p>
            ) : null}
          </div>
          <div className='absolute bottom-2 flex justify-around w-full'>
            <div className=' flex flex-col justifiy-center items-center'>
              <p className={` ${textTheme2} text-[12px]`}>Yesterday</p>
              {text === "Social Analysis Summary" ? (
                <p
                  style={{
                    color:
                      yesterday < 40
                        ? "Red"
                        : yesterday < 60
                        ? "rgb(202, 138, 4)"
                        : "Green",
                  }}
                  className='text-[25px] font-[800]'
                >
                  {yesterday}
                </p>
              ) : text === "Market Sentiment Analysis" ? (
                <p
                  style={{
                    color:
                      yesterday < 40
                        ? "Red"
                        : yesterday < 60
                        ? "rgb(202, 138, 4)"
                        : "Green",
                  }}
                  className='text-[25px] font-[800]'
                >
                  {yesterday}
                </p>
              ) : text === "Relative Strength Index" ? (
                <p
                  style={{
                    color:
                      yesterday < 31
                        ? "Green"
                        : yesterday < 70
                        ? "rgb(202, 138, 4)"
                        : "Red",
                  }}
                  className='text-[25px] font-[800]'
                >
                  {yesterday}
                </p>
              ) : null}
              <p className={` ${textTheme2} text-[15px] font-[600]`}>
                {yesterdayTitle}
              </p>
            </div>
            <div className=' flex flex-col justifiy-center items-center'>
              <p className={` ${textTheme2} text-[12px]`}>Last Week</p>
              {text === "Social Analysis Summary" ? (
                <p
                  style={{
                    color:
                      lastweek < 40
                        ? "Red"
                        : lastweek < 60
                        ? "rgb(202, 138, 4)"
                        : "Green",
                  }}
                  className='text-[25px] font-[800]'
                >
                  {lastweek}
                </p>
              ) : text === "Market Sentiment Analysis" ? (
                <p
                  style={{
                    color:
                      lastweek < 40
                        ? "Red"
                        : lastweek < 60
                        ? "rgb(202, 138, 4)"
                        : "Green",
                  }}
                  className='text-[25px] font-[800]'
                >
                  {lastweek}
                </p>
              ) : text === "Relative Strength Index" ? (
                <p
                  style={{
                    color:
                      lastweek < 31
                        ? "Green"
                        : lastweek < 70
                        ? "rgb(202, 138, 4)"
                        : "Red",
                  }}
                  className='text-[25px] font-[800]'
                >
                  {lastweek}
                </p>
              ) : null}
              <p className={` ${textTheme2} text-[15px] font-[600]`}>
                {lastWeekTitle}
              </p>
            </div>
            <div className=' flex flex-col justifiy-center items-center'>
              <p className={` ${textTheme2} text-[12px]`}>Last Month</p>
              {text === "Social Analysis Summary" ? (
                <p
                  style={{
                    color:
                      lastMonth < 40
                        ? "Red"
                        : lastMonth < 60
                        ? "rgb(202, 138, 4)"
                        : "Green",
                  }}
                  className='text-[25px] font-[800]'
                >
                  {lastMonth}
                </p>
              ) : text === "Market Sentiment Analysis" ? (
                <p
                  style={{
                    color:
                      lastMonth < 40
                        ? "Red"
                        : lastMonth < 60
                        ? "rgb(202, 138, 4)"
                        : "Green",
                  }}
                  className='text-[25px] font-[800]'
                >
                  {lastMonth}
                </p>
              ) : text === "Relative Strength Index" ? (
                <p
                  style={{
                    color:
                      lastMonth < 31
                        ? "Green"
                        : lastMonth < 70
                        ? "rgb(202, 138, 4)"
                        : "Red",
                  }}
                  className='text-[25px] font-[800]'
                >
                  {lastMonth}
                </p>
              ) : null}
              <p className={` ${textTheme2} text-[15px] font-[600]`}>
                {lastMonthTitle}
              </p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default InsightsCard;
