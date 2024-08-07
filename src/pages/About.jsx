import React, { useState } from "react";
import ab05 from "../assets/images/about/ab03.jpg";

import AboutVideo from "../components/About-video";
import JobCounter from "../components/Job-counter";
import QuesAnswer from "../components/Question-Answer";

import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import Navbar from "../components/partials/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import { CheckCircle, CheckSquare } from "react-feather";
import MissionVission from "../components/missionVission";
import Footer from "../components/partials/Footer";

export default function Aboutus() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Navbar navClass="justify-end nav-light" />

      <Breadcrumbs _title={"Get to know better"} _from={"About Us"} />

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
      <section className="relative md:py-24 py-16">
        <div className="container md:pb-16">
          <AboutVideo />
        </div>

        <div className="container md:pb-16 mt-20">
          <MissionVission />
        </div>

        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1">
            <div className="relative overflow-hidden bg-emerald-600 rounded-md shadow dark:shadow-gray-700">
              <div className="grid md:grid-cols-2 items-center gap-[30px]">
                <div className="relative">
                  <img src={ab05} alt="" />
                  {/* <div className="absolute md:bottom-1/2 md:translate-y-1/2 md:-end-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
                    <Link
                      to="#"
                      onClick={() => setOpen(true)}
                      data-id="yba7hPeTSjk"
                      className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white"
                    >
                      <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </Link>
                  </div> */}
                </div>

                <div>
                  <div className="text-white p-4">
                    <h4 className="leading-normal text-4xl mb-3 font-semibold">
                      Empowering Brands & Startups with Exceptional Solutions -
                      About Our Software House
                    </h4>

                    <p className="text-white/70 text-lg max-w-xl">
                      With a passion for technology and a commitment to
                      excellence, our dynamic and forward-thinking software
                      house is dedicated to providing cutting-edge digital
                      solutions. We have had the privilege of working alongside
                      numerous brands and startups, delivering exceptional
                      results that exceed expectations.
                    </p>

                    <ul className="list-none text-white/50 mt-4">
                      <li
                        className="mb-1 flex items-center gap-2 "
                        style={{ margin: "0px 0px 4px" }}
                      >
                        <CheckCircle size={18} color="#94a3b8" />
                        Proven track record in collaborating with diverse brands
                        & startups
                      </li>
                      <li
                        className="mb-1 flex items-center gap-2 "
                        style={{ margin: "0px 0px 4px" }}
                      >
                        <CheckCircle size={18} color="#94a3b8" />
                        Expertise in digital marketing strategies
                      </li>
                      <li
                        className="mb-1 flex items-center gap-2 "
                        style={{ margin: "0px 0px 4px" }}
                      >
                        <CheckCircle size={18} color="#94a3b8" />
                        Passionate app development with seamless user
                        experiences
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container md:mt-24 mt-16">
          <JobCounter />
        </div>
        <QuesAnswer numberOfFAQs={4} />
        {/* <ExploreJob /> */}
      </section>
      {/* https://www.youtube.com/embed/V7cWDUoWSiU?autoplay=1&controls=0&rel=0&showinfo=0&mute=1&modestbranding=1&iv_load_policy=3&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fcycarts.com&widgetid=1 */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="V7cWDUoWSiU"
        onClose={() => setOpen(false)}
      />

      <Footer />
    </>
  );
}
