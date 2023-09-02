import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LockIcon from "@mui/icons-material/Lock";
import { PacmanLoader } from "react-spinners";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import useScreenWidth from "@/hooks/useScreenWidth";
import InsightsCard from "@/Components/InsightsCard";
import SemiCircle from "@/Components/SemiCircle";
import SemiCircle1 from "@/Components/SemiCircle1";
import SemiCircle2 from "@/Components/SemiCircle2";
import Charts from "@/Components/Charts";
import MarketSentiment from "@/Components/MarketSentiment";
import CountdownTimer from "@/Components/CountdownTimer";
import LongCard from "@/Components/LongCard";
import BackToTopButton from "@/Components/BackToTopButton";
import useDataFetching from "@/hooks/useDataFetching";
import Footer from "@/Components/Footer";

const date = new Date();
const day = date.getDate();
const month = date.toLocaleString("default", { month: "short" }).toUpperCase();
const year = date.getFullYear();
const todaysDate = `${day} ${month} ${year}`;

export default function Home() {
  const [countdown, setCountdown] = useState(5);
  const { theme } = useSelector((state) => state.Theme);
  const { balance, points } = useSelector((state) => state.App);
  const { data, loading, error } = useDataFetching();
  const mobile = useScreenWidth() < 788;
  const textTheme = theme ? "text-slate-950" : "text-slate-300";
  const colorTheme = theme ? "bg-[#EDF1E4]" : "bg-slate-950";
  const animation = useAnimation();
  const { inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    console.log("inView", inView);

    if (inView) {
      animation.start({
        y: 0,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      });
    } else {
      animation.start({
        y: `100vh`,
      });
    }
  }, [inView, animation]);

  //function to interpolate data for the semi-circle guage
  function lerp(inputStart, inputEnd, outputStart, outputEnd, input) {
    return (
      outputStart +
      ((outputEnd - outputStart) * (input - inputStart)) /
        (inputEnd - inputStart)
    );
  }

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const locked = (tooltip, text) => {
    return (
      <InsightsCard tooltip={tooltip} text={text}>
        <div
          className='flex flex-col justify-center items-center h-[85%]'
          style={{ textAlign: "center" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
            className={`${textTheme}`}
          >
            <LockIcon style={{ fontSize: 50, color: "#F5900C" }} />
            Need 100 INDEX to Unlock
          </div>
        </div>
      </InsightsCard>
    );
  };

  useEffect(() => {
    if (loading) {
      return; // Return early if loading
    }

    if (error && countdown > 0) {
      // Start the countdown
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
        if (countdown === 1) {
          clearInterval(countdownInterval);
          window.location.reload();
        }
      }, 1000); // 1000 milliseconds (1 second)

      return () => {
        clearInterval(countdownInterval);
      };
    }
  }, [loading, error, countdown]);

  if (loading) {
    return (
      <div className={textTheme}>
        <div className={` ${colorTheme} relative flex-1 flex flex-col`}>
          <div className='flex flex-row items-center h-[100vh] justify-center'>
            <motion.div
              initial={{ x: -200 }}
              transition={{ duration: 8 }}
              animate={{ x: 100 }}
              className='max-w-max'
            >
              <PacmanLoader
                color={"#F5900C"}
                loading={true}
                cssOverride={override}
                size={28}
                aria-label='Loading Spinner'
                data-testid='loader'
              />
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.log(error);
    return (
      <div className={textTheme}>
        <div className={` ${colorTheme} relative flex flex-col`}>
          <div className='flex flex-row items-center h-[100vh] justify-center'>
            <div className='max-w-max'>
              <center>
                <p className={textTheme}>Oops! Something went wrong.</p>
                <p className={textTheme}>We&apos;re working to fix it.</p>
                <p className={textTheme}>
                  The page will automatically reload in {countdown} seconds.
                </p>
                {/*<p>{error.message}</p>*/}
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const fadeInFromBottom = {
    hidden: {
      opacity: 0,
      y: 100, // initial vertical position
    },
    visible: {
      opacity: 1,
      y: 0, // end position
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className='flex items-center justify-center h-full flex-1'>
      <main className={` ${colorTheme} relative flex flex-col`}>
        <div className='flex w-full justify-between items-center  px-[3vw] pt-[2vh] my-5'>
          <div className=''>
            <h4 className={`${textTheme}`}>
              <div className={`md:flex hidden  items-center`}>
                <WhatshotIcon
                  color='white'
                  style={{ fontSize: 25, color: "#F5900C" }}
                />
                <b className='font-bold mr-1'>{"What's Hot :"}</b>
                <a
                  href='https://lunarcrush.com/trending'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-midorange transition-all duration-200'
                >
                  ${data.coin.symbol}
                </a>
              </div>
            </h4>
          </div>

          <div className='self-center items-center  flex flex-col justify-center'>
            <h4 className={` ${textTheme} hidden font-[800] lg:flex`}>
              {todaysDate}
            </h4>
            <div
              style={{ lineHeight: 1, color: "#F5900C" }}
              className='font-medium-light text-center hidden md:flex text-lg'
            >
              {<CountdownTimer />}
            </div>
            <b>
              <BackToTopButton />
            </b>
          </div>
        </div>
        <h4
          className={` ${textTheme}  py-[10px] market_overview text-2xl md:text-5xl  max-w-max text-center self-end mx-auto`}
        >
          Market Overview
        </h4>
        <section className='mx-[2vw] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mt-[4vh]'>
          <div>
            {points >= 0 || balance >= 0 ? (
              <InsightsCard
                tooltip='Historical Analysis refers to a concise overview of the BandBindex data spanning a 7-day period. It offers insights into trends, patterns, and changes that have occurred within this timeframe.'
                text='Historical Analysis'
              >
                <div className='flex w-[80vw] h-full justify-center items-center'>
                  <Charts
                    height={mobile ? 400 : 280}
                    chartData={data.chartData}
                  />
                </div>
              </InsightsCard>
            ) : (
              locked(
                "Historical Analysis refers to a concise overview of the BandBindex data spanning a 7-day period. It offers insights into trends, patterns, and changes that have occurred within this timeframe.",
                "Historical Analysis"
              )
            )}
          </div>

          <div>
            {points >= 0 || balance >= 0 ? (
              <InsightsCard
                tooltip='Actionable Insights refer to the presentation of both Buy the Dip (BTD) and Sell the Pump (STP) signals. These insights assist users in identifying potential opportunities for buying or selling based on shifts in market sentiment.'
                text='Actionable Insight'
              >
                <div className='flex flex-col justify-around w-full  items-center h-full'>
                  <div className='h-[40%] flex flex-col justify-around w-[60%]'>
                    <p className='w-full text-center text-[20px] font-[800] text-[#04bd64ff]'>
                      {data.BTD}%
                    </p>
                    <div className='bg-gray-700 w-full  h-[30%]'>
                      <motion.div
                        animate={{ width: `${data.BTD}%` }}
                        style={{ width: `${0}%` }}
                        transition={{ duration: 1 }}
                        className='bg-[#04bd64ff] h-full'
                      ></motion.div>
                    </div>
                    <p className='w-full text-center text-[20px] font-[800] text-[#04bd64ff]'>
                      Buy the Dip
                    </p>
                  </div>
                  <div className='h-[40%] flex flex-col justify-around w-[60%]'>
                    <p className='w-full text-center text-[20px] font-[800] text-[#c0041dff]'>
                      {data.STP}%
                    </p>
                    <div className='bg-gray-700 w-full h-[30%]'>
                      <motion.div
                        animate={{ width: `${data.STP}%` }}
                        style={{ width: `${0}%` }}
                        transition={{ duration: 1 }}
                        className='bg-[#c0041dff] h-full'
                      ></motion.div>
                    </div>
                    <p className='w-full text-center text-[20px] font-[800] text-[#c0041dff]'>
                      Sell the Pump
                    </p>
                  </div>
                </div>
              </InsightsCard>
            ) : (
              locked(
                "Actionable Insights refer to the presentation of both Buy the Dip (BTD) and Sell the Pump (STP) signals. These insights assist users in identifying potential opportunities for buying or selling based on shifts in market sentiment.",
                "Actionable Insight"
              )
            )}
          </div>

          <div>
            <InsightsCard
              tooltip='Market Sentiment provides an insight into the prevailing emotions and attitudes within the crypto market. This sentiment is often influenced by discussions and interactions on social media platforms. It reflects moments of fear, optimism, skepticism, or enthusiasm that traders and investors express online.'
              text='Market Sentiment'
            >
              <MarketSentiment sentiment={data.sentiment} />
            </InsightsCard>
          </div>

          <div>
            {points >= 0 || balance >= 0 ? (
              <InsightsCard
                today={data?.today?.MSA}
                yesterday={data?.yesterday?.MSA}
                lastweek={data?.lastweek?.MSA}
                lastMonth={data?.lastMonth?.MSA}
                insights
                tooltip='The Market Sentiment Analysis tool within BandBindex provides users with a comprehensive overview of the prevailing sentiment within the crypto market. This sentiment is categorized into three main states: Bearish, Neutral, and Bullish'
                text='Market Sentiment Analysis'
              >
                <div className='relative bottom-7'>
                  <SemiCircle guage={lerp(0, 100, -90, 90, data?.today?.MSA)} />
                </div>
              </InsightsCard>
            ) : (
              locked(
                "The Market Sentiment Analysis tool within BandBindex provides users with a comprehensive overview of the prevailing sentiment within the crypto market. This sentiment is categorized into three main states: Bearish, Neutral, and Bullish",
                "Market Sentiment Analysis"
              )
            )}
          </div>

          {points >= 0 || balance >= 0 ? (
            <>
              <InsightsCard
                today={data?.today?.SAS}
                yesterday={data?.yesterday?.SAS}
                lastweek={data?.lastweek?.SAS}
                lastMonth={data?.lastMonth?.SAS}
                insights
                tooltip='The Social Analysis Summary feature of BandBindex involves a comprehensive analysis of the ongoing social conversations related to various cryptocurrencies. This tool assesses the sentiment expressed in these conversations and classifies it into three main categories: Dollar Cost Average, Neutral, or Stop Loss.'
                text='Social Analysis Summary'
              >
                <div className='relative bottom-7'>
                  <SemiCircle1
                    guage={lerp(0, 100, -90, 90, data?.today?.SAS)}
                  />
                </div>
              </InsightsCard>
            </>
          ) : (
            locked(
              "The Social Analysis Summary feature of BandBindex involves a comprehensive analysis of the ongoing social conversations related to various cryptocurrencies. This tool assesses the sentiment expressed in these conversations and classifies it into three main categories: Dollar Cost Average, Neutral, or Stop Loss.",
              "Social Analysis Summary"
            )
          )}

          {points >= 0 || balance >= 0 ? (
            <InsightsCard
              today={data?.today?.RSI}
              yesterday={data?.yesterday?.RSI}
              lastweek={data?.lastweek?.RSI}
              lastMonth={data?.lastMonth?.RSI}
              insights
              tooltip='The Relative Strength Index (RSI) is a widely used technical indicator that assists in evaluating potential overbought or oversold conditions in the price of cryptocurrencies within the crypto market.'
              text='Relative Strength Index'
            >
              <div className='relative bottom-7'>
                <SemiCircle2 guage={lerp(0, 100, -90, 90, data?.today?.RSI)} />
              </div>
              {/* <MeterGauge /> */}
            </InsightsCard>
          ) : (
            locked(
              "The Relative Strength Index (RSI) is a widely used technical indicator that assists in evaluating potential overbought or oversold conditions in the price of cryptocurrencies within the crypto market.",
              "Relative Strength Index"
            )
          )}
        </section>
        <h4
          className={` ${textTheme}  py-[10px] market_overview text-2xl mb-[10vh] md:text-5xl  max-w-max text-center self-end mx-auto`}
        >
          Dig Deeper
        </h4>
        <section className='flex flex-col items-center'>
          <LongCard title='Why Bear & Bull Index?' />
          <LongCard title='Data Sources' />
          <LongCard title='Bear and Bull Index Indicators' />
          <LongCard title='Disclaimer' />
        </section>

        <div className={textTheme}>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/claim", // specify your desired path here
      permanent: false,
    },
  };
}
