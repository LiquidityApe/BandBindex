import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What is Bear and Bull Index?",
      answer: "The Bear and Bull Index is a tool designed to harness AI-driven social insights to make more informed decisions in the crypto market.",
    },
    {
      question: "How does LunarCrush power BandBindex?",
      answer: "BandBindex is powered by LunarCrush's cutting-edge AI capabilities that transform extensive social metrics into actionable, digestible insights.",
    },
    {
      question: "What is the $INDEX token?",
      answer: "$INDEX is an in-app reward token, designed to incentivize community participation and enhance the user experience within BandBindex.",
    },
    {
      question: "How frequently can I claim my rewards?",
      answer: "You can claim your rewards once every 24 hours. Make sure to log in daily to maximize your rewards!",
    },
    {
      question: "Why is social insight important for crypto trading?",
      answer: "Social insights provide real-time trends and patterns in the crypto community's discussions. These can be pivotal in deciphering market volatilities and making informed decisions.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-[100vh] justify-center items-center bg-gradient-to-r from-[#F7A63B] to-white">
      <h1 className="mb-10 text-2xl font-bold">Frequently Asked Questions</h1>
      <div className="w-full max-w-xl">
        {questions.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-2 px-4 flex justify-between items-center bg-slate-950 text-teal-100 rounded"
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
              <p className="bg-gray-100 mt-2 text-gray-700 p-4 rounded-b">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
