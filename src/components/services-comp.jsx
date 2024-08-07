import React from "react";
import { Link } from "react-router-dom";

import { service_data } from "../assets/data/services_data";

export default function ServicesComp({ page, limit = 11 }) {
  return (
    <>
      {page === "home" && <div style={{ marginTop: "100px" }} />}

      <div className="container">
        {page === "home" && (
          <>
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Services</h3>

              <p className="my-dim-text max-w-xl mx-auto">
              Embark on a transformative journey through the clouds with Astra Analytica. Our suite of premier cloud services in the US transcends boundaries, offering an innovative array of tailored solutions.
              </p>
            </div>
          </>
        )}
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
          {service_data.slice(0, limit).map((item, index) => (
            <div className="service-card group p-6 shadow rounded-md bg-white text-center transition-all duration-500">
              <div className="service-card-icon w-16 h-16 flex items-center justify-center mx-auto  rounded-lg transition-all duration-500">{item.icon}</div>

              <div className="mt-4">
                <Link to={`/service/${item.slug}`} className="text-lg font-semibold my-primary-text transition-all duration-500">
                  {item.title}
                </Link>

                <p className="my-dim-text mt-3 mb-2">{item.para1.substring(0, 50)}...</p>

                <Link to={`/service/${item.slug}`} className="my-primary-text font-medium transition-all duration-500">
                  Read More <i className="uil uil-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
