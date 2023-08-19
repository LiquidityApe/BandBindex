import React from "react";
import { useSelector } from "react-redux";

export default function LongCard({ title }) {
  const { theme } = useSelector((state) => state.Theme);
  const textTheme = theme ? "text-slate-950" : "text-slate-300";
  const backgroundTheme = theme ? "bg-slate-50" : "bg-slate-900";

  const text1 = (
    <div className={textTheme}>
      <br />
      The Bear and Bull Index provides a comprehensive solution to the
      challenges faced in the cryptocurrency market. Through{" "}
      <a
        href='https://lunarcrush.com/'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: "#F5900C" }}
      >
        LunarCrush’s
      </a>{" "}
      AI-driven social insights, simplified analysis, and community engagement,
      it empowers investors to make informed decisions, navigate market
      volatility, and stay ahead in the ever-evolving world of cryptocurrencies.
      <br />
      <br />
      <b>Learn More:</b> Check out the{" "}
      <a
        href='https://bandbindex.gitbook.io/bandbindex-2.0-whitepaper/'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: "#F5900C" }}
      >
        whitepaper v2.0
      </a>
    </div>
  );

  const text2 = (
    <div className={textTheme}>
      <br />
      The Bear and Bull Index utilizes a combination of reputable data sources
      to gather valuable information and insights for its analysis of the crypto
      market. These data sources include:
      <br />
      <br />
      <b>1. LunarCrush:</b> The primary data source and partner for the Bear and
      Bull Index,{" "}
      <a
        href='https://lunarcrush.com/'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: "#F5900C" }}
      >
        LunarCrush’s
      </a>{" "}
      provides AI-driven social insights and metrics. It analyzes millions of
      social media conversations and market activities for thousands of
      cryptocurrencies, distilling them into actionable intelligence.
      <br />
      <br />
      Key Metrics from LunarCrush include:
      <br />
      <br />
      <ol>
        <li>
          • <b>Galaxy Score:</b> A comprehensive metric that evaluates overall
          health and interest in a cryptocurrency.
        </li>
        <li>
          • <b>AltRank:</b> A ranking system that measures a cryptocurrency's
          social influence relative to others.
        </li>
        <li>
          • <b>Social Metrics:</b> Metrics that assess the volume and sentiment
          of social media discussions about a specific cryptocurrency.
        </li>
        <li>
          • <b>Global Metrics:</b> Metrics that consider global social media
          data and engagement for a cryptocurrency.
        </li>
      </ol>
      <br />
      <br />
      <b>2. CoinGecko:</b> A popular cryptocurrency data aggregator,{" "}
      <a
        href='https://www.coingecko.com/'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: "#F5900C" }}
      >
        CoinGecko
      </a>{" "}
      provides information on market trends, trading volumes, and prices for
      various digital assets. The Bear and Bull Index uses CoinGecko's 24-hour
      trading volume data for additional insights.
      <br />
      <br />
      <b>3. Relative Strength Index (RSI):</b> The RSI is a technical indicator
      used to assess the strength and momentum of a cryptocurrency's price
      movements. It helps identify potential overbought or oversold conditions
      in the market.
      <br />
      <br />
      <b>4. Fear & Greed Index:</b> The Fear & Greed Index gauges investor
      sentiment in the cryptocurrency market. It ranges from extreme fear to
      extreme greed, reflecting market participants' emotions and potential
      market trends.
      <br />
      <br />
    </div>
  );

  const text3 = (
    <div className={textTheme}>
      <br />
      The Bear and Bull Index utilizes various indicators to analyze the crypto
      market and provide valuable insights to the community. These indicators
      are designed to help users make informed decisions and navigate the
      dynamic cryptocurrency landscape. The key indicators include:
      <br />
      <br />
      <b>1. Market Sentiment Analysis</b>
      <br />
      <br />
      This indicator offers a general overview of the crypto market sentiment,
      ranging between Bearish, Neutral, and Bullish. It helps users understand
      the prevailing market sentiment and potential trends:
      <br />
      <br />
      <ol>
        <li>
          • Values of 60 or above indicate the crypto market is{" "}
          <font style={{ color: "green" }}>Bullish</font>.
        </li>
        <li>
          • Values between the range of 40 to 59 indicate the crypto market is{" "}
          <font style={{ color: "orange" }}>Neutral</font>.
        </li>
        <li>
          • Values between the range of 0 to 39 indicate the crypto market is{" "}
          <font style={{ color: "red" }}>Bearish</font>.
        </li>
      </ol>
      <br />
      <br />
      <b>2. Social Analysis Summary</b>
      <br />
      <br />
      Analyzing social conversations surrounding cryptocurrencies, this
      indicator categorizes sentiment as Dollar Cost Average, Neutral, or Stop
      Loss. It provides valuable insights into what social media users are
      saying about different digital assets:
      <br />
      <br />
      <ol>
        <li>
          • Values of 60 or above indicate{" "}
          <font style={{ color: "green" }}>Dollar Cost</font> or{" "}
          <font style={{ color: "green" }}>Dollar cost average</font>.
        </li>
        <li>
          • Values between the range of 40 to 59 indicate{" "}
          <font style={{ color: "orange" }}>Neutral</font> or{" "}
          <font style={{ color: "orange" }}>No opinion</font>.
        </li>
        <li>
          • Values between the range of 0 to 39 indicate{" "}
          <font style={{ color: "red" }}>Stop Loss</font> or{" "}
          <font style={{ color: "red" }}>Use stop loss</font>.
        </li>
      </ol>
      <br />
      <br />
      <b>3. Relative Strength Index (RSI)</b>
      <br />
      <br />
      Relative Strength Index (RSI): The Relative Strength Index (RSI) is a
      widely used technical indicator that helps assess overbought or oversold
      conditions in the price of an asset. Represented as a line graph that
      fluctuates between two extremes, the RSI provides insights into the
      strength and potential reversal points in a market trend. The RSI reading
      ranges from 0 to 100, and its traditional usage includes the following
      interpretations:
      <br />
      <br />
      <ol>
        <li>
          • Values of 70 or above: An RSI reading of 70 or higher suggests that
          an asset is reaching <font style={{ color: "red" }}>overbought</font>{" "}
          levels. This could indicate that the asset's price has risen
          significantly and might be due to a trend reversal or corrective move.
        </li>
        <li>
          • RSI reading of 30 or below: An RSI reading of 30 or lower indicates
          an <font style={{ color: "green" }}>oversold</font> or undervalued
          condition. This might signal a potential buying opportunity, as the
          asset's price could have dropped excessively and might be poised for a
          rebound.
        </li>
      </ol>
      <br />
      <br />
      <b>4. BTD and STP Indicator</b>
      <br />
      <br />
      The <font style={{ color: "green" }}>Buy the Dip (BTD)</font> and{" "}
      <font style={{ color: "red" }}>Sell the Pump (STP)</font> indicators are
      time-sensitive metrics that reflect market sentiment changes. They assist
      users in spotting potential buying or selling opportunities based on
      shifts in market sentiment.
      <br />
      <br />
      <b>5. Crypto Market Sentiment Indicator</b>
      <br />
      <br />
      This indicator measures the overall market sentiment, reflecting moments
      of fear or hopefulness in the crypto market. Like the BTD and STP
      indicators, it is time-sensitive and subject to change with general market
      sentiment driven by social media.
    </div>
  );

  const text4 = (
    <div className={textTheme}>
      <br />
      Empowering Informed Decisions: Read with Caution, Seek Expert Advice - Our
      Disclaimer Matters.
      <br />
      <br />
      The information provided in this website is for informational purposes
      only and does not constitute financial, investment, legal, or tax advice.
      The Bear and Bull Index aims to provide insights into the crypto market.
      However, readers are advised to conduct their own research and seek
      professional advice before making any financial decisions or investments
      related to the $INDEX token or any other cryptocurrency.
      <br />
      <br />
      <b>Learn More:</b> Check out the{" "}
      <a
        href='https://bandbindex.gitbook.io/bandbindex-2.0-whitepaper/project-details/disclaimer'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: "#F5900C" }}
      >
        Disclaimer
      </a>
    </div>
  );

  return (
    <div
      className={`${backgroundTheme} shadow-md ${
        theme ? "shadow-[#757780]" : "shadow-slate-800"
      } p-5 w-[90vw] md:w-[87vw] lg:w-[92%] shadow-md rounded-sm`}
    >
      <h1 className={`${textTheme} text-2xl font-bold mb-4`}>
        {title}
      </h1>
      <div className={`text-lg`}>
        {title === "Why Bear & Bull Index?"
          ? text1
          : title === "Data Sources"
          ? text2
          : title === "Bear and Bull Index Indicators"
          ? text3
          : text4}
      </div>
    </div>
  );
}
