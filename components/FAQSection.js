"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";
import PropTypes from "prop-types";

export default function FAQSection({
  title = "FASTag",
  subtitle = "Frequently Asked Questions",
  imageSrc = "/user/faq.png",
  faqs = [],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-white max-w-6xl mx-auto px-4 lg:px-0">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="md:w-2/5">
          <h2 className="font-extrabold text-3xl lg:text-4xl text-gray-900">
            {title}
          </h2>
          <h2 className="font-extrabold text-3xl lg:text-4xl mb-6">
            {subtitle.split(" ")[0]}{" "}
            <span className="text-[#fa9404]">
              {subtitle.replace(subtitle.split(" ")[0] + " ", "")}
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Clear answers to all your FASTag & e‑Challan questions — recharge,
            balance, blacklisting, toll deduction and more.
          </p>

          <div className="relative w-60 h-60 md:w-80 md:h-80 mx-auto">
            <Image src={imageSrc} fill alt="FAQ Image" />
          </div>
        </div>

        {/* Right FAQ Section */}
        <div className="md:w-3/5 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between px-6 py-4 text-left transition-all duration-300 text-sm font-semibold ${
                  openIndex === index
                    ? "bg-gradient-to-r from-[#00186b] to-[#fa9404] text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                <span>{faq.question}</span>

                <span
                  className={`p-2 rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? "bg-white/20 text-white"
                      : "bg-[#00186b] text-white"
                  }`}
                >
                  {openIndex === index ? (
                    <FiMinus size={16} />
                  ) : (
                    <FiPlus size={16} />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-60 py-4" : "max-h-0"
                } ${
                  openIndex === index
                    ? "bg-gradient-to-r from-[#00186b] to-[#fa9404] text-white/90"
                    : "bg-white text-gray-600"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

FAQSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
};
