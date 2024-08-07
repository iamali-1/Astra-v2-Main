import React from "react";
import { HelpCircle } from "react-feather";
import { _faqs } from "../data/_faqs";
import { Link } from "react-router-dom";

export default function QuesAnswer({ numberOfFAQs }) {
  const faqsToDisplay = numberOfFAQs ? _faqs.slice(0, numberOfFAQs) : _faqs;

  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
          FAQ'S
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          Discover valuable insights about our software house through these
          frequently asked questions and answers. Gain information about our
          services, company culture, and more to help you make an informed
          decision about partnering with us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
        {faqsToDisplay.map((item, index) => (
          <div className="flex" key={index}>
            <HelpCircle className="h-8 text-emerald-600 me-3"></HelpCircle>
            <div className="flex-1">
              <Link to="/faq">
                <h5 className="mb-2 text-lg font-semibold">
                  {item.Q}
                  <span className="text-emerald-600"></span>{" "}
                </h5>
              </Link>
              <p className="text-slate-400">{item.A}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
