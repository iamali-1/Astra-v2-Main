import React, { useState } from "react";
import Navbar from "../components/partials/Navbar";

import { Link } from "react-router-dom";
import ServicesComp from "../components/services-comp";
import ABoutVideo from "../components/About-video";
import News from "../components/News";
import ProjectsComponent from "../components/Projects";

import ab01 from "../assets/images/about/ab01.jpg";
import ab02 from "../assets/images/about/ab02.jpg";
import facebook_logo from "../assets/images/company/facebook-logo.png";
import google_logo from "../assets/images/company/google-logo.png";
import android from "../assets/images/company/android.png";
import bg6 from "../assets/images/hero/bg6.png";
import { projects_data } from "../assets/data/projects_data";
import JobCounter from "../components/Job-counter";
import Footer from "../components/partials/Footer";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Navbar navClass="justify-end nav-light" />
      <section className="relative flex py-36 md:h-screen h-auto items-center bg-[url('../../assets/images/hero/bg6.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          {/* <iframe
            title="iframe-1"
            src="https://player.vimeo.com/video/354421650?background=1&autoplay=1&loop=1&byline=0&title=0"
            className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2  -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
          ></iframe> */}

          {/* <iframe
            title="iframe-2"
            src="https://www.youtube.com/embed/JsNvHJsufhI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
            className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2  -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
          ></iframe> */}
        </div>

        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container z-1">
          <div className="grid grid-cols-1 text-center relative">
            <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold text-white">
              Empowering Businesses <br /> with Top-Tier Cloud Solutions in the US
            </h4>
            {/* <p className="text-slate-400 text-lg max-w-xl mx-auto">taking your business to the next level with our dynamic approach.</p> */}

            <div className="d-flex" id="reserve-form">
              <div className="md:w-5/6 mx-auto">
                <div className="lg:col-span-10 mt-8">
                  <div className="lg:col-span-4 md:col-span-5">
                    <div className=" relative z-1">
                      <Link to="/about" className="btn bg-primary hover:bg-primary border-primary dark:border-primary text-white rounded-md">
                        Explore More
                      </Link>
                      <Link to="/contact" className="btn bg-primary/5 hover:bg-primary border-primary/10 hover:border-primary2 text-primary text-white rounded-md ms-2">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-4">
              <span className="text-slate-400">
                <span className="text-slate-900 dark:text-white">Popular Tags :</span>
                #Desiging, #Development, #Web, #IOS, #PHP, #Node
              </span>
            </div> */}
          </div>
        </div>
      </section>

      {/*end hero section */}
      <section className="relative md:py-24 py-16 ">
        <div className="container md:pb-16">
          <ABoutVideo />
        </div>
      </section>
      <JobCounter />

      <ServicesComp page="home" limit={6} />
      <br />
      <br />

      <ProjectsComponent data={projects_data} limit={6} />

      <section className="py-20 w-full table relative bg-[url('../../assets/images/hero/bg2.jpg')] bg-top bg-no-repeat bg-cover" style={{ backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-4 md:text-[26px] text-2xl text-white font-medium">The Best Cloud Service Provider <br /> Astra Analytica</h3>

            <p className="text-white/80 max-w-xl mx-auto">
              Astra Analytica stands at the pinnacle of top cloud service provision in the US. Our commitment to delivering excellence, coupled with our unmatched expertise in cloud architecture, migration, and optimization, sets us apart as the foremost choice for businesses seeking reliable and innovative cloud solutions.
            </p>
            <div className="d-flex" id="reserve-form">
              <div className="md:w-5/6 mx-auto">
                <div className="lg:col-span-10 mt-8">
                  <div className="lg:col-span-4 md:col-span-5">
                    <div className=" relative z-1">
                      <Link to="/about" className="btn bg-primary hover:bg-primary border-primary dark:border-primary text-white rounded-md">
                        Explore More
                      </Link>
                      <Link to="/contact" className="btn bg-primary/5 hover:bg-primary border-primary/10 hover:border-primary text-white hover:text-white rounded-md ms-2">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
