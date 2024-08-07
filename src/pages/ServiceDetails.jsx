import React from "react";
import { Link, useParams } from "react-router-dom";
import { Book, Briefcase, MapPin, Monitor, UserCheck } from "react-feather";
import Navbar from "../components/partials/Navbar";
import ServicesComp from "../components/services-comp";
import { service_data } from "../assets/data/services_data";
import Footer from "../components/partials/Footer";

export default function ServiceDetails() {
  const { slug } = useParams();
  const findedOne = service_data.find((x) => x.slug === slug);

  return (
    <>
      <Navbar navClass="justify-end " />
      <section className="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
        <div className="container mt-10">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-6">
              <h2 className="text-3xl font-semibold ">{findedOne.title}</h2>
              <h5 className="text-lg font-semibold mt-6">{findedOne.heading}</h5>

              <p className="text-slate-400 mt-4">{findedOne.para1}</p>

              <h5 className="text-lg font-semibold mt-6">{findedOne.subHead}</h5>
              <p className="text-slate-400 mt-4">{findedOne.paraWeb}</p>

              <h5 className="text-lg font-semibold mt-6">Features Of Astra Analytica {findedOne.slug}</h5>
              <p className="text-slate-400 mt-4">{findedOne.pointsPara}</p>

              <ul className="list-none">
                {findedOne.points.map((point, index) =>
                  index % 2 === 0 ? (
                    <li key={index} className="text-primary mt-2">
                      <div className="font-bold">
                        <i className="uil uil-arrow-right text-emerald-600 me-1"></i>
                        {point}
                      </div>
                    </li>
                  ) : (
                    <li key={index} className="text-primary mt-2">
                      <p className="text-slate-400">{point}</p>
                    </li>
                  )
                )}
              </ul>

              <h5 className="text-lg font-semibold mt-6">{findedOne.heading1}</h5>
              <p className="text-slate-400 mt-4">{findedOne.para5}</p>

              <h5 className="text-lg font-semibold mt-6">Why Choose Us?</h5>
              <p className="text-slate-400 mt-5">{findedOne.whyUs}</p>

              <h5 className="text-lg font-semibold mt-6">Our Differentiators</h5>
              <ul className="list-none">
                {findedOne.Differentiators.map((point, index) =>
                  index % 2 === 0 ? (
                    <li key={index} className="text-primary mt-2">
                      <div className="font-bold">
                        <i className="uil uil-arrow-right text-emerald-600 me-1"></i>
                        {point}
                      </div>
                    </li>
                  ) : (
                    <li key={index} className="text-primary mt-2">
                      <p className="text-slate-400">{point}</p>
                    </li>
                  )
                )}
              </ul>

              <p className="text-slate-400 mt-5">{findedOne.lastpara}</p>

              <div className="mt-5">
                <Link to="/quote" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">
                  Quote
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
              <div className="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                <div className="p-6">
                  <h5 className="text-lg font-semibold">Astra Analytica</h5>
                </div>
                <div className="p-6 border-t border-slate-100 dark:border-t-gray-700">
                  <ul className="list-none">
                    <li className="flex items-center">
                      <UserCheck className="h-5 w-5"></UserCheck>

                      <div className="ms-4">
                        <span className="text-emerald-600 font-medium text-sm">Experienced & Passionate Team</span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <MapPin className="h-5 w-5"></MapPin>

                      <div className="ms-4">
                        <span className="text-emerald-600 font-medium text-sm">US</span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <Monitor className="h-5 w-5"></Monitor>

                      <div className="ms-4">
                        <span className="text-emerald-600 font-medium text-sm">Collaborate with cross-functional teams</span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <Briefcase className="h-5 w-5"></Briefcase>

                      <div className="ms-4">
                        <span className="text-emerald-600 font-medium text-sm">Develop clean and efficient code</span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <Book className="h-5 w-5"></Book>

                      <div className="ms-4">
                        <span className="text-emerald-600 font-medium text-sm">Implement and maintain</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Services</h3>
        </div>
        <ServicesComp limit={4} />
      </div>

      <br />
      <br />
      <Footer />
    </>
  );
}
