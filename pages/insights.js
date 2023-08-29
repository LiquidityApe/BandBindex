import React from "react";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from '@mui/icons-material/Search';
import InsightsIcon from '@mui/icons-material/Insights';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RocketIcon from '@mui/icons-material/Rocket';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import BackToTopButton from "@/Components/BackToTopButton";
import { useSelector } from "react-redux";


const openSubscriptionPage = () => {
  // Replace this URL with the actual subscription page URL
  window.open('https://discord.com/channels/1141795377180311563/1144560201404534854', '_blank');
};

const Insights = () => {

  const { theme } = useSelector((state) => state.Theme);

  const textTheme = theme ? "text-slate-950" : "text-slate-300";
  const backgroundTheme = theme ? "bg-gradient-to-l from-[#F5900c] to-white" : "bg-slate-950";


  const styles = {
    insightsContainer: {
      maxWidth: '100%', // Set maximum width to 100%
      width: '100%', // Set width to 100%
      margin: '0 auto',
      padding: '20px',
      lineHeight: '1.6',
      borderRadius: '5px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '20px 0',
      color: 'inherit', // Set the color to inherit
    },
    subHeading: {
      fontSize: '20px',
      fontWeight: 'bold',
      margin: '15px 0',
    },
    paragraph: {
      fontSize: '16px',
      margin: '10px 0',
      fontWeight: 'bold', // Add bold font weight
    },
    buttonWrapper: {
      textAlign: 'center', // Center the button within this wrapper
    }, 
    
  };

  return (
<main className={` ${backgroundTheme} relative flex flex-col`}>
  <div style={styles.insightsContainer} className={`${textTheme}`}>
    <h1 style={styles.heading} className="flex justify-center items-center underline">                    <RocketLaunchIcon
                      color='white'
                      style={{ fontSize: 25, color: "#F5900C",marginRight:5 }}
                    /> Introducing Bear and Bull Index Insights: Your Secret Weapon to Crypto Success!</h1>
    <p>
      Tired of deciphering the cryptic signals of the crypto market? Say hello to Bear and Bull Index Insights,
      your AI-powered ally that unveils the hidden mysteries of the cryptocurrency landscape. Dive into a world
      of strategic advantage and start making decisions that matter.
    </p>
    <h2 style={styles.subHeading}><BarChartIcon
                      color='white'
                      style={{ fontSize: 25, color: "#F5900C" }}
                    />  Unveil the Crypto Pulse with Daily Precision:</h2>
    <p>
      Our Comprehensive Daily Data Overview Report isn&apos;t just data; it&apos;s your compass in the volatile sea of cryptocurrencies.
      Witness the market sentiment and trends unfold before your eyes, giving you the upper hand in an ever-evolving world.
    </p>
     <h2 style={styles.subHeading}><SearchIcon
                      color='white'
                      style={{ fontSize: 25, color: "#F5900C" }}
                    /> Decode the Numbers, Unleash the Power:</h2>
    <p>
      Understand the daily reading like never before. No more scratching your head over cryptic indicators.
      We break it down into plain English so you can grasp the insights with ease. But that&apos;s not all – delve into
      the historical data of the past 7 days and unearth patterns that could be your key to success.
    </p>
     <h2 style={styles.subHeading}><InsightsIcon
                      color='white'
                      style={{ fontSize: 25, color: "#F5900C" }}
                    />  Predict Tomorrow, Today:</h2>
    <p>
      Wouldn&apos;t it be amazing to predict the future? Well, our Predictive Analysis isn&apos;t quite magic, but it&apos;s pretty close.
      Utilizing historical trends, we let you peek into where the crypto market might be heading next. Prepare to outsmart the market!
    </p>
     <h2 style={styles.subHeading}><LightbulbIcon
                      color='white'
                      style={{ fontSize: 25, color: "#F5900C" }}
                    />  Access the Minds of Experts for Just $1 a Month:</h2>
    <p>
      You heard that right – unlimited access to the Bear and Bull Index AI-Report for only $1 a month!
      That&apos;s a cup of coffee&apos;s worth for insights that could change your crypto game.
    </p>
    <h1 style={styles.heading} className="flex justify-center items-center underline" >   <PeopleAltIcon
                      color='white'
                      style={{ fontSize: 25, color: "#F5900C",marginRight:5 }}
                    />   Why Join the Exclusive Circle of Subscribers? Here&apos;s Why:</h1>
    <p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Stay Informed:</strong> Don&apos;t just keep up; stay ahead! Receive consolidated insights that illuminate the latest market trends, sentiment shifts, and opportunities that could shape your next move.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Save Time, Trade Smart:</strong> Let&apos;s face it – your time is precious. Skip the data-hunting marathon and get the juicy bits delivered straight to your inbox. Your time is better spent making strategic moves.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Data is Power:</strong> Arm yourself with data-driven decisions. Base your choices on real evidence rather than gut feelings, and watch your success rate skyrocket.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Be the Market Whisperer:</strong> Ever wished you could predict the market&apos;s next dance move? With our predictive insights, you&apos;ll be dancing circles around uncertainty and positioning yourself for profit.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Expert Analysis at Your Fingertips:</strong> Complex indicators explained in simple terms. You don&apos;t have to be a market expert; our analysis does the heavy lifting so you can act confidently.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Protect Your Investments:</strong> Risk management isn&apos;t just a buzzword here. Understand market sentiment and potential risks, and fortify your investments against market storms.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Learning Never Ends:</strong> The report is your classroom for mastering indicators, signals, and market dynamics. Elevate your understanding and make better-informed decisions.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Confidence, Not Chaos:</strong> Say goodbye to emotional trading. Welcome a rational approach that&apos;s backed by data and encourages confident actions.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Tailor-Fit for You:</strong> Customized insights? Of course! Set your preferences and receive the information that speaks directly to your trading style and aspirations.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Be Nimble, Be Profitable:</strong> Navigating the crypto labyrinth requires finesse. We provide the insights, you provide the strategy. Adapt and thrive, no matter how the tides turn.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Join the Inner Circle:</strong> Gain an edge that&apos;s hard to beat. While others second-guess, you&apos;re making informed decisions backed by expert advice.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Guard Your Gains:</strong> Shield your investments from the unpredictable with insights that help you identify potential pitfalls and make safeguarding decisions.
</p><br></br>
<p>
    <strong><ArrowRightIcon
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  /> Invest in Knowledge:</strong> The more you know, the further you&apos;ll go. Grow your understanding, enhance your skills, and ensure long-term growth in the crypto space.
</p><br></br>
    <p style={{ ...styles.paragraph, textAlign: 'center', fontSize: '18px', marginTop: '20px' }}>
    <RocketIcon
                      color='white'
                      style={{ fontSize: 25, color: "#F5900C" }}
                    /> Ready to step into a world of data-driven success? For just $1 a month, you&apos;ll unlock a treasure trove of insights
      that could transform the way you conquer the crypto market. Say yes to smarter decisions, more confident moves,
      and a future where you&apos;re ahead of the game. Subscribe to Bear and Bull Index Insights today!              
    </p>

<div style={styles.buttonWrapper}>
      <button
        style={{
          fontSize: '16px',
          marginTop: '20px',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          border: '2px solid #F5900C',
          borderRadius: '5px',
          padding: '10px 20px',
          color: '#F5900C',
          transition: 'background-color 0.3s, color 0.3s',
        }}
        onClick={openSubscriptionPage}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = '#F5900C';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#F5900C';
          e.target.style.backgroundColor = 'transparent';
        }}
      >
        Subscribe to AI-Report Insights
      </button>
      </div>
      <b>
              <BackToTopButton />
            </b>
  </div>
  </main>
  );
};

export default Insights;
