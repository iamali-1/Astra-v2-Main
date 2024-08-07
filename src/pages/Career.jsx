import React from "react";

import { Link } from "react-router-dom";
import ABoutVideo from "../components/About-video";
import Navbar from "../components/partials/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/partials/Footer";

export default function Career() {
  return (
    <>
      <Navbar navClass="justify-end nav-light" />
      <Breadcrumbs _title={"Current Openings"} _from={"Career"} />
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative md:pb-24 pb-16">
        <div className="container md:mt-24 mt-16 md:pb-16">
          <ABoutVideo />
        </div>
        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
              Job Openings
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </div>

          <div className="lg:flex justify-center mt-8">
            <div className="lg:w-3/4">

              <div className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500 mt-6">
                <div>
                  <span
                    className="text-lg font-semibold hover:text-emerald-600"
                  >
                    No Job Available
                  </span>
                  <p className="text-slate-400 mt-1">
                    Currently, there are no job openings available. Please check back later for any updates or new opportunities. Thank you for your interest.
                  </p>
                </div>


              </div>

              {/* JOBS */}
              {/* <div className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500 mt-6">
                <div>
                  <Link
                    to="/job-detail-one"
                    className="text-lg font-semibold hover:text-emerald-600"
                  >
                    Backend Developer
                  </Link>
                  <p className="text-slate-400 mt-1">Total Openings: 4</p>
                </div>

                <Link
                  to="/job-detail-one"
                  className="btn rounded-full bg-transparent group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-slate-400  md:mt-0 mt-4"
                >
                  Apply now
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section >

      <Footer />
    </>
  );
}
