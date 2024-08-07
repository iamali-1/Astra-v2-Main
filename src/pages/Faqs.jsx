import React, { useState } from "react";
import { _faqs } from "../data/_faqs";
import ab01 from "../assets/images/about/ab01.jpg";
import ab02 from "../assets/images/about/ab02.jpg";
import { Link } from "react-router-dom";

const Faqs = ({ from = "main-page" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container md:mt-24 md:pb-16 mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        {from !== "main-page" && (
          <div className="lg:col-span-5 md:col-span-6">
            <div className="relative">
              <div className="relative">
                <img src={ab01} className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />
                {/* <div className="absolute top-0 translate-y-2/4 end-0 text-center">
                  <Link
                    to="#"
                    onClick={() => setOpen(true)}
                    data-type="youtube"
                    data-id="yba7hPeTSjk"
                    className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link>
                </div> */}
              </div>
              <div className="absolute md:-end-5 end-0 -bottom-16">
                <img src={ab02} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
              </div>
            </div>
          </div>
        )}

        <div className={`${from === "main-page" ? "lg:col-span-10 md:col-span-10" : "lg:col-span-7 md:col-span-6"} mt-14 md:mt-0`}>
          <div className="lg:ms-5">
            <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Frequently Asked Questions</h3>

            <p className="text-slate-400 max-w-xl">
              Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.
            </p>

            <div id="accordion-collapseone" data-accordion="collapse" className="mt-8">
              {_faqs.slice(0, 3).map((item, index) => (
                <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                  <h2 className="text-base font-medium">
                    <button
                      onClick={() => toggleAccordion(index)}
                      type="button"
                      className={`flex justify-between items-center p-5 w-full font-medium text-left ${
                        activeIndex === index ? "text-emerald-500 bg-gray-50 dark:bg-slate-800" : ""
                      } `}
                      data-accordion-target="#accordion-collapse-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-collapse-body-1"
                    >
                      <span>{item.Q}</span>
                      <svg
                        data-accordion-icon
                        className={`w-4 h-4 shrink-0 ${activeIndex === index ? "rotate-180" : ""}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  {activeIndex === index && (
                    <div aria-labelledby="accordion-collapse-heading-1">
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">{item.A}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
