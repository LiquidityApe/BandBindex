import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Indicator = styled.p`
  font-size: 18px;
  margin: 10px 0;
  line-height: 1.6;
`;

const Insights = () => {
  const { theme } = useSelector((state) => state.Theme);

  // Use the theme value to determine styles
  const textTheme = theme ? "text-slate-950" : "text-slate-300";
  const backgroundTheme = theme ? "bg-slate-50" : "bg-slate-900";

  return (
    <div className={textTheme}>
      <div
        className={` ${backgroundTheme} ${
          theme ? "shadow-[#757780]" : "shadow-slate-800"
        } flex-col items-center shadow-md rounded-sm`}
      >
        <Container>
          <Title className={textTheme} >Crypto Market Insights: Navigating the Bear and Bull</Title>

          <Subtitle>Comprehensive Daily Data Overview Report</Subtitle>
          <Indicator>
            <strong>Market Sentiment Analysis:</strong><br />
            <strong>Social Analysis Summary:</strong><br />
            <strong>Relative Strength Index (RSI):</strong><br />
            <strong>Buy the Dip (BTD):</strong> <br />
            <strong>Sell the Pump (STP):</strong> <br />
            <strong>Crypto Market Sentiment:</strong> <br />
            <strong>Last generated:</strong> 
          </Indicator>

          <Subtitle>Understanding the Daily Reading</Subtitle>
          <Indicator>
            <strong>Market Sentiment Analysis:</strong>  <br />
            <br /><strong>Social Analysis Summary:</strong> <br />
            <strong>Relative Strength Index (RSI):</strong> <br />
            <strong>Buy the Dip (BTD):</strong><br />
            <strong>Sell the Pump (STP):</strong><br />
            <strong>Crypto Market Sentiment:</strong>
          </Indicator>

          <Subtitle>Historical Analysis - Last 7 Days</Subtitle>
          <Indicator>
            {/* Display historical data */}
          </Indicator>

          <Subtitle>Predictive Analysis</Subtitle>
          <Indicator>
            
          </Indicator>
        </Container>
      </div>
    </div>
  );
};

export default Insights;
