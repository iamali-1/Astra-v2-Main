import React, { useState } from "react";

import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import Navbar from "../components/partials/Navbar";
import ServicesComp from "../components/services-comp";
import Breadcrumbs from "../components/Breadcrumbs";
import Faqs from "./Faqs";
import Footer from "../components/partials/Footer";

export default function Services() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Navbar navClass="justify-end nav-light" />
      <Breadcrumbs _title={"All Services"} _from={"Services"} />
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <section className="relative md:py-24 py-16 overflow-hidden">
        <ServicesComp />

        {/* <div className="container md:mt-24 md:pb-16 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="relative">
                <div className="relative">
                  <img src={ab01} className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />
                  <div className="absolute top-0 translate-y-2/4 end-0 text-center">
                    <Link
                      to="#"
                      onClick={() => setOpen(true)}
                      data-type="youtube"
                      data-id="yba7hPeTSjk"
                      className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white"
                    >
                      <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </Link>
                  </div>
                </div>
                <div className="absolute md:-end-5 end-0 -bottom-16">
                  <img src={ab02} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
              <div className="lg:ms-5">
                <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Frequently Asked Questions</h3>

                <p className="text-slate-400 max-w-xl">
                  Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.
                </p>

                <div id="accordion-collapseone" data-accordion="collapse" className="mt-8">
                  {accordionData.map((item, index) => (
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
                          <span>{item.title}</span>
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
                            <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Faqs from="service-page" />

        <div className="container-fluid md:mt-24 mt-16">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                  <div className="lg:col-span-8 md:col-span-7">
                    <div className="ltr:md:text-left rtl:md:text-right text-center relative z-1">
                      <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Get to know more!</h3>
                      <p className="text-slate-400 max-w-xl">
                        Discover more about our software house and the exceptional solutions we provide. Explore our expertise, values, and commitment to delivering innovative
                        software solutions that drive business growth and success.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-4 md:col-span-5">
                    <div className="ltr:text-right rtl:text-left relative z-1">
                      <Link to="/contact" className="btn bg-emerald-600 hover:bg-[#03117e] border-emerald-600 dark:border-emerald-600 text-white rounded-md">
                        Contact Us
                      </Link>
                      <Link
                        to="/about"
                        className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2"
                      >
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-5 -start-5">
                  <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
                </div>

                <div className="absolute -bottom-5 -end-5">
                  <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />

      <Footer />
    </>
  );
}
