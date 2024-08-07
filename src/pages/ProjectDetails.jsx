import React from "react";
import { Link, useParams } from "react-router-dom";
import { Book, Briefcase, Clock, DollarSign, MapPin, Monitor, UserCheck } from "react-feather";
import ProjectsComponent from "../components/Projects";
import Navbar from "../components/partials/Navbar";
import { projects_data } from "../assets/data/projects_data";
import Footer from "../components/partials/Footer";

export default function ProjectDetails() {
  const { slug } = useParams();

  const findedOne = projects_data.find((x) => x.slug === slug);

  return (
    <>
      <Navbar navClass="justify-end" />
      <section className="bg-slate-50 from-emerald-600/20 dark:bg-slate-800 md:py-24 py-16 ">
        <div className="container mt-10">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-6">
              <div className="p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                <div className="md:ms-4 mt-2">
                  <h5 className="text-xl font-semibold">{findedOne.title}</h5>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 md:col-span-6">
              <h5 className="text-lg font-semibold">Techs:</h5>
              <ul className="list-none mt-5">
                {findedOne.tech.map((x, index) => (
                  <li key={index} className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow dark:shadow-gray-700 rounded-md">
                    <div className="">
                      <span className="text-emerald-600 font-medium text-sm">{x}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h5 className="text-lg font-semibold mt-6">Description:</h5>

              <p className="text-slate-400 mt-4">{findedOne.para1}</p>
              <p className="text-slate-400 mt-4">{findedOne.para2}</p>
              {findedOne.para3 && <p className="text-slate-400 mt-4">{findedOne.para3}</p>}

              <h5 className="text-lg font-semibold mt-6">
                Features of <span className="ml-1">{findedOne.title}</span>:
              </h5>
              <ul className="list-none">
                {findedOne.features.map((x, index) => (
                  <li key={index} className="text-slate-400 mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 me-1">{x}</i>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Link to="/quote" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">
                  Quote
                </Link>
              </div>
              <h5 className="text-lg font-semibold mt-6">Portfolio:</h5>

              <p className="text-slate-400 mt-4">{findedOne?.portfolio}</p>
            </div>
          </div>
        </div>

        {/* <ProjectsComponent limit={2} /> */}

        <div className="container-fluid md:mt-24 mt-16">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                  <div className="lg:col-span-8 md:col-span-7">
                    <div className="ltr:md:text-left rtl:md:text-right text-center relative z-1">
                      <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Explore now!</h3>
                      <p className="text-slate-400 max-w-xl">
                        Embark on an exciting journey and discover the endless possibilities of our innovative solutions. With Astra Analytica by your side, you can unlock new
                        horizons and unleash the true potential of your business. Don't wait any longer – take the first step towards success and explore our cutting-edge services
                        now.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-4 md:col-span-5">
                    <div className="ltr:text-right rtl:text-left relative z-1">
                      <Link to="/about" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">
                        About Us
                      </Link>
                      <Link
                        to="/services"
                        className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2"
                      >
                        Explore
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

      <Footer />
    </>
  );
}
