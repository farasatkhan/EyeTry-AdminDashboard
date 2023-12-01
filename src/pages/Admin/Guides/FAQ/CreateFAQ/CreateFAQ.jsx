import React, { useState, useEffect } from "react";

import { FaRegEdit } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  newFAQ,
  viewFAQs,
  updateFAQ,
  deleteFAQ,
} from "../../../../../services/FAQ/faq";

const CreateFAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (faqIndex) => {
    if (expandedFAQ === faqIndex) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(faqIndex);
    }
  };

  const [faq, setFAQ] = useState({ question: "", answer: "" });
  const [allFaqs, setAllFaqs] = useState([]);

  const [buttonStatus, setButtonStatus] = useState(false);

  const [editFAQ, setEditFaq] = useState({ status: false, id: -1 });

  const handleFAQChange = (field, value) => {
    setFAQ((prevFAQ) => ({
      ...prevFAQ,
      [field]: value,
    }));
  };

  const handleSubmittedFAQ = async (event) => {
    event.preventDefault();

    if (buttonStatus || !faq.question || !faq.answer) return;

    setButtonStatus(true);

    try {
      if (!editFAQ.status) {
        const newFaqAdded = await newFAQ(faq);
        console.log("Faq is added", newFaqAdded);
      } else {
        const updatedFaq = await updateFAQ(editFAQ.id, faq);
        console.log("Faq is updated", updatedFaq);
      }
    } catch (error) {
      console.error("Failed to add faq:", error);
    } finally {
      setButtonStatus(false);
      setFAQ({ question: "", answer: "" });
      setEditFaq({ status: false, id: -1 });
    }
  };

  useEffect(() => {
    fetchFAQs();
  }, [buttonStatus]);

  const fetchFAQs = async () => {
    try {
      const fetchedFAQs = await viewFAQs();
      setAllFaqs(fetchedFAQs);
    } catch (error) {
      console.error("Error fetching FAQs", error);
    }
  };

  const handleDeleteFAQ = async (id) => {
    try {
      await deleteFAQ(id);
      fetchFAQs();
    } catch (error) {
      console.error("Error deleting FAQ", error);
    } finally {
    }
  };

  const handleEditFAQ = async (id, question, answer) => {
    setFAQ((prevFAQ) => ({ ...prevFAQ, question: question, answer: answer }));
    setEditFaq({ status: true, id: id });
  };

  const handleUpdateFAQDiscard = () => {
    setEditFaq({ status: false, id: -1 });
    setFAQ({ question: "", answer: "" });
  };

  const [visibleFaqs, setVisibleFaqs] = useState(5);

  const handleSeeMoreResults = () => {
    setVisibleFaqs((prevVisibleFaqs) => prevVisibleFaqs + 5);
  };

  return (
    <div className="mx-7 mb-20">
      <div className="flex flex-grow justify-between mt-7">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <p className="font-light text-slate-500">Guides /</p>
            <p className="">FAQs</p>
          </div>
          <div className="mt-2">
            <p className="text-2xl">FAQs</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex gap-2 h-full">
        <div className="w-full mb-20">
          <form onSubmit={handleSubmittedFAQ} className="flex flex-col gap-5">
            <input
              data-cy="faq-question-input"
              id="question"
              type="text"
              className="border p-2 rounded-md w-full outline-none text-sm"
              placeholder="Question"
              value={faq.question}
              onChange={(event) => {
                handleFAQChange("question", event.target.value);
              }}
            />
            <textarea
              data-cy="faq-answer-input"
              id="answer"
              className="border p-2 rounded-md w-full outline-none text-sm"
              rows="5"
              value={faq.answer}
              onChange={(event) => {
                handleFAQChange("answer", event.target.value);
              }}
              placeholder="Answer"
            />
            <div className="flex gap-5 justify-end">
              {editFAQ.status && (
                <button
                  disabled={buttonStatus}
                  onClick={handleUpdateFAQDiscard}
                  className={`text-black border w-36 h-10 rounded-md focus:outline-none cursor-pointer`}
                >
                  <p className="">Discard</p>
                </button>
              )}
              <button
                data-cy="faq-submit"
                disabled={buttonStatus}
                className={`${
                  !faq.question || !faq.answer
                    ? "bg-gray-300 text-gray-600"
                    : "bg-blue-600 text-white"
                } w-36 h-10 rounded-md focus:outline-none cursor-pointer`}
              >
                <p className="">
                  {editFAQ.status ? "Update FAQ" : "Add new FAQ"}
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <p className="text-2xl">FAQs</p>
        {allFaqs.slice(0, visibleFaqs).map((faq, index) => (
          <div key={index} className="flex flex-col gap-2 mt-5">
            <div
              data-cy={`faq-question-${index}`}
              id={`question-${index}`}
              className="flex justify-between"
            >
              <p className="text-base font-semibold">{faq.question}</p>
              <div className="flex gap-5">
                <FaRegEdit
                  onClick={() =>
                    handleEditFAQ(faq._id, faq.question, faq.answer)
                  }
                  size={20}
                  className="cursor-pointer"
                />
                <BsFillTrashFill
                  onClick={() => handleDeleteFAQ(faq._id)}
                  size={20}
                  className="cursor-pointer"
                />
                {expandedFAQ === index ? (
                  <IoIosArrowUp
                    data-cy={`faq-arrow-up-${index}`}
                    size={20}
                    onClick={() => toggleFAQ(index)}
                    className="cursor-pointer transition-transform transform"
                  />
                ) : (
                  <IoIosArrowDown
                    data-cy={`faq-arrow-down-${index}`}
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
  );
};

export default CreateFAQ;
