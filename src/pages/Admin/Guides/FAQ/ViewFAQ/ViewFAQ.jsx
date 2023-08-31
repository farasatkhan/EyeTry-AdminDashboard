import BlogCover from "../../../../../assets/blog/help-center-cover_dark.png";

import React, { useState, useEffect } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { viewFAQs } from "../../../../../services/FAQ/faq";

const ViewFAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (faqIndex) => {
    if (expandedFAQ === faqIndex) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(faqIndex);
    }
  };

  const [allFaqs, setAllFaqs] = useState([]);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const fetchedFAQs = await viewFAQs();
      setAllFaqs(fetchedFAQs);
    } catch (error) {
      console.error("Error fetching FAQs", error);
    }
  };

  const [visibleFaqs, setVisibleFaqs] = useState(5);

  const handleSeeMoreResults = () => {
    setVisibleFaqs((prevVisibleFaqs) => prevVisibleFaqs + 5);
  };
  return (
    <div className="font-body">
      <div
        className={`bg-black bg-cover bg-center`}
        style={{ backgroundImage: `url(${BlogCover})` }}
      >
        <div className="flex flex-col flex-grow justify-center items-center px-2 py-10 md:py-16 lg:py-20">
          <p className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white">
            Frequently Asked Questions (FAQ)
          </p>
          <p className="w-full sm:w-5/6 md:w-4/6 text-sm lg:text-base text-center mt-3 text-white">
            We've compiled a list of commonly asked questions for your
            convenience. If you are unable to find the answer to your question,
            please contact us for further assistance.
          </p>
        </div>
      </div>
      <div className="mx-10 sm:mx-20 md:mx-32 lg:mx-60 my-10">
        <div>
          <p className="text-2xl">FAQs</p>
          {allFaqs.slice(0, visibleFaqs).map((faq, index) => (
            <div key={index} className="flex flex-col gap-2 mt-5">
              <div id={`question-${index}`} className="flex justify-between">
                <p className="text-base font-semibold">{faq.question}</p>
                <div className="flex gap-5">
                  {expandedFAQ === index ? (
                    <IoIosArrowUp
                      size={20}
                      onClick={() => toggleFAQ(index)}
                      className="cursor-pointer transition-transform transform"
                    />
                  ) : (
                    <IoIosArrowDown
                      size={20}
                      onClick={() => toggleFAQ(index)}
                      className="cursor-pointer transition-transform transform"
                    />
                  )}
                </div>
              </div>
              {expandedFAQ === index && (
                <div>
                  <span id={`answer-${index}`} className="text-sm">
                    {faq.answer}
                  </span>
                </div>
              )}
            </div>
          ))}
          {visibleFaqs < allFaqs.length && (
            <div className="flex justify-center items-center mt-10 mb-10">
              <button
                onClick={handleSeeMoreResults}
                className="w-40 h-10 rounded-md text-white focus:outline-none bg-black"
              >
                <p className="text-white">See More</p>
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <div className="mx-20 sm:mx-10 lg:mx-24 my-10">
        <div className="mb-5">
          <span className="text-2xl font-bold">Related Articles</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
        </div>
      </div> */}
    </div>
  );
};

export default ViewFAQ;
