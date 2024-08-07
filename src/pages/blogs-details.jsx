import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import image from "../assets/images/blog/09.jpg";
import image1 from "../assets/images/team/05.jpg";
// import '../assets/images/team/05.jpg'
// import Navbar from "../../components/Navbar";
import BlogComp from "../components/blog-detail-component";
import { Facebook, GitHub, Gitlab, Instagram, Linkedin, Mail, MessageCircle, Twitter, User, Youtube } from "react-feather";
import { blogs_data } from "../assets/data/blogs_data";
import { _useClientBlogs } from "../actions/_blogs";
import moment from "moment";
import { toImageUrl } from "../config/API";
import Footer from "../components/partials/Footer";
import { _useCats } from "../actions/_categories";

export default function BlogDetailPage() {
  const { slug } = useParams();

  const { detail, fetchBlogBySlug, loading, list: blogList, addView } = _useClientBlogs();
  const { list } = _useCats();

  useEffect(() => {
    fetchBlogBySlug(slug);
    addView(slug);
  }, [slug]);

  return (
    <>
      <section className="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white mb-3">{detail?.category?.name}</h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-6">
              <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium p-6">{detail?.title}</h3>

                <div className="p-6">
                  <p className="text-slate-400">{detail.description}</p>
                </div>

                {detail?.image && <img src={toImageUrl(detail?.image?.url)} alt="" />}

                <div className="p-6">
                  <p className="" dangerouslySetInnerHTML={{ __html: detail.content }}></p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
              <div className="sticky top-20">
                {list?.map((x) => (
                  <h5 x={x._id} className="text-sm mb-3 font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
                    {x.name}
                  </h5>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogComp loading={loading} list={blogList} />
      <Footer />
    </>
  );
}
