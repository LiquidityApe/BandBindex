import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useSelector } from "react-redux";
import Footer from "@/Components/Footer";

const FAQ = () => {
  const { theme } = useSelector((state) => state.Theme);

  const [activeIndex, setActiveIndex] = useState(null);

  const textTheme = theme ? "text-slate-950" : "text-slate-300";
  const textTheme2 = !theme ? "text-slate-950" : "text-slate-300";
  const backgroundTheme = theme
    ? "bg-gradient-to-l from-[#F5900c] to-white"
    : "bg-gradient-to-l from-[#F5900c] to-slate-950";
  const backgroundTheme2 = !theme
    ? "bg-gradient-to-l from-[#F5900c] to-white"
    : "bg-gradient-to-l from-[#F5900c] to-slate-950";

  const questions = [
    {
      question: "How can I explore partnership or investment opportunities?",
      answer: (
        <>
          Please complete this form for further information:{" "}
          <a
            href='https://forms.gle/ABp9GiR4uSxLFQWq6'
            target='_blank'
            className='underline hover:text-Gold'
            rel='noopener noreferrer'
          >
            https://forms.gle/ABp9GiR4uSxLFQWq6
          </a>
        </>
      ),
    },
    {
      question: "How frequently can I claim my rewards?",
      answer:
        "You can claim your rewards once every 24 hours. Make sure to log in daily to maximize your rewards!",
    },
    {
      question: "How is your predictive analysis generated?",
      answer:
        "Analyzing the last 7 days of historical data reveals patterns and sentiments that inform our predictive insights for cryptocurrency market decisions.",
    },
    {
      question: "How should I use the information and indicators effectively?",
      answer:
        "Explore BandB AI-Report Insights for simplified market analysis, empowering confident decision-making without expertise.",
    },
    {
      question: "From which sources do you obtain your data?",
      answer:
        "We collect data from trusted sources like LunarCrush, CoinGecko, and others for accuracy and reliability.",
    },
    {
      question: "What is the relationship between BandB, BandBindex and Index?",
      answer:
        "The BandB community is the project's core, encouraging engagement. BandBIndex is a trading tool within the community, and $INDEX is an in-app token for rewarding and enhancing the user experience.",
    },
    {
      question: "What is Bear and Bull Index?",
      answer:
        "The Bear and Bull Index is a tool designed to harness AI-driven social insights to make more informed decisions in the crypto market.",
    },
    {
      question: "What is the $INDEX token?",
      answer:
        "$INDEX is an in-app reward token, designed to incentivize community participation and enhance the user experience within BandBindex.",
    },
    {
      question: "What is the level of accuracy of the provided data?",
      answer:
        "Our data is highly accurate, sourced from trusted providers, but please consider the volatile nature of the cryptocurrency market and use our data as a reference alongside your own judgment.",
    },
    {
      question: "What is the process for obtaining additional insights?",
      answer: (
        <>
        For comprehensive additional social insights, we strongly recommend:{" "}
          <a
            href='https://lunarcrush.com/'
            target='_blank'
            className='underline hover:text-Gold'
            rel='noopener noreferrer'
          >
            LunarCrush
          </a>
        </>
      ),      
    },
    {
      question: "Why is social insight important for crypto trading?",
      answer:
        "Social insights provide real-time trends and patterns in the crypto community's discussions. These can be pivotal in deciphering market volatilities and making informed decisions.",
    },
    {
      question: "Who can gain from utilizing this?",
      answer:
        "Anyone in the cryptocurrency market can benefit from our platform. We provide valuable insights for confident decision-making.",
    },
    {
      question: "Who gains more benefits: a trader or an investor?",
      answer:
        "Trader or investor: it depends on your goals and risk tolerance.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    questions.sort((a, b) => a.question.localeCompare(b.question));
  };

  return (
    <main className={` ${backgroundTheme} relative flex flex-col`}>
      <div className={`${textTheme}`}>
        <div className='flex flex-col min-h-max relative justify-start pt-[10vh] items-center'>
          <h1 className='mb-10 text-2xl font-bold'>
            <span className={`${textTheme}`}>Frequently Asked Questions</span>
          </h1>
          <div className='w-[80%] md:w-full mb-10 max-w-xl'>
            {questions.map((faq, index) => (
              <div key={index} className='mb-4'>
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full text-left py-2 px-4 flex justify-between items-center bg-slate-950 text-teal-100 rounded'
                >
                  <span>{faq.question}</span>
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p
                    className={`${textTheme2} ${backgroundTheme2} mt-2  p-4 rounded-b`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=''>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default FAQ;
