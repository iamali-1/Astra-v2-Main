import { Link } from "react-router-dom";

import React from "react";
import { blogs_data } from "../assets/data/blogs_data";
import { toImageUrl } from "../config/API";
import moment from "moment";
import Navbar from "./partials/Navbar";

export default function BlogDetailComp({ loading, list }) {
  return (
    <>
      <Navbar navClass="justify-end nav-light" />
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            {list?.map((item, index) => (
              <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
                {item?.image && (
                  <div className="relative overflow-hidden">
                    <img src={toImageUrl(item?.image?.url)} className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" />
                  </div>
                )}

                <div className="relative p-6">
                  <div className="absolute start-6 -top-4">
                    <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">{item.category?.name}</span>
                  </div>

                  <div className="">
                    <div className="flex mb-4">
                      <span className="text-slate-400 text-sm">
                        <i className="uil uil-clock text-slate-900 dark:text-white me-2"></i>
                        {moment(item.createdAt).fromNow()}
                      </span>
                    </div>

                    <Link to={`/blog/${item.slug}`} className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out">
                      {item.title}
                    </Link>

                    <p className="text-sm">{item.description.substring(0, 100)}..</p>

                    <div className="flex justify-between items-center mt-3">
                      <Link to={`/blog/${item.slug}`} className="btn btn-link text-sm hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">
                        Read More <i className="uil uil-arrow-right"></i>
                      </Link>
                      <span className="text-slate-400 text-sm">View {item.viewCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
