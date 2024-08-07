import React, { useState } from "react";
import ab01 from "../assets/images/about/1.jpg";
import ab02 from "../assets/images/about/ab04.jpg";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import { Link } from "react-router-dom";
import { Check } from "react-feather";

export default function ABoutVideo() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yba7hPeTSjk"
        onClose={() => setOpen(false)}
      /> */}
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="lg:col-span-5 md:col-span-6">
          <div className="relative">
            <div className="relative">
              <img
                src={ab01}
                className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700"
                alt=""
              />
              {/* <div className="absolute top-0 translate-y-2/4 end-0 text-center">
                <Link
                  to="#"
                  onClick={() => setOpen(true)}
                  data-type="youtube"
                  data-id="yba7hPeTSjk"
                  className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 my-primary-text dark:text-white"
                >
                  <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </Link>
              </div> */}
            </div>
            <div className="absolute md:-end-5 end-0 -bottom-16">
              <img
                src={ab02}
                className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
          <div className="lg:ms-5">
            <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">
              Astra Analytica
              <br />
              Get to know better
            </h3>

            <p className="my-dim-text max-w-xl">
            We are a dynamic and forward-thinking software house dedicated to providing cutting-edge cloud services. With a passion for technology and a commitment to excellence, we strive to exceed our client's expectations and deliver exceptional results.
            </p>

            <ul className="list-none my-dim-text mt-4">
              <li
                className="mb-1 flex items-center gap-2  "
                style={{ margin: "0px 0px 4px" }}
              >
                <Check size={18} color="#059bdf" />
                Innovative Solutions
              </li>
              <li
                className="mb-1 flex items-center gap-2  "
                style={{ margin: "0px 0px 4px" }}
              >
                <Check size={18} color="#059bdf" />
                Proven Expertise
              </li>
              <li
                className="mb-1 flex items-center gap-2  "
                style={{ margin: "0px 0px 4px" }}
              >
                <Check size={18} color="#059bdf" />
                Client-Centric Approach
              </li>
              <li
                className="mb-1 flex items-center gap-2  "
                style={{ margin: "0px 0px 4px" }}
              >
                <Check size={18} color="#059bdf" />
                Reliability & Security
              </li>
              <li
                className="mb-1 flex items-center gap-2  "
                style={{ margin: "0px 0px 4px" }}
              >
                <Check size={18} color="#059bdf" />
                Unmatched Performance
              </li>
            </ul>

            <div className="mt-6">
              <Link
                to="/contact"
                className="btn primary-things mt-2 rounded-md"
              >
                <i className="uil uil-envelope"></i> Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
