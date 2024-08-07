import React from "react";

import { Link } from "react-router-dom";

export default function ProjectsComponent({ data, limit = 10 }) {
  return (
    <section className={`relative md:py-24 py-16`}>
      <div className="">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
            Projects
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
          Explore our diverse range of projects From Learning Management and Customer Relationship Management to Ticketing System. Our successful cloud projects highlight innovative strategies.
          </p>
        </div>

        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {data.slice(0, limit).map((item, index) => (
              <div
                className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500"
                key={index}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
                      {item.icon}
                    </div>
                    <Link
                      to={`/project/${item.slug}`}
                      className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 py-3">
                      <Link to={`/project/${item.slug}`}>
                        {item.para1.substring(0, 65)}...
                      </Link>
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Link
                      to={`/project/${item.slug}`}
                      className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
                    >
                      <i className="uil uil-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="mt-3">
                    {item.tech.slice(0, 3).map((x, index) => (
                      <Link to="#" key={index} style={{ marginLeft: "3px" }}>
                        <span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
                          <i className="uil uil-map-marker"></i>
                          {x}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <Link
                    to={`/project/${item.slug}`}
                    className="hover:text-emerald-600 font-semibold transition-all duration-500"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
