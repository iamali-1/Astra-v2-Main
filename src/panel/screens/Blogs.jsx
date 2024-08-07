import React from "react";
import Layout from "../Layout/Layout";
import Breadcrumbs from "../Layout/Breadcrumbs";
import { CiCircleList } from "react-icons/ci";
import PanelHeading from "../Layout/PanelHeading";
import BlogList from "../Components/BlogList";
import { Search } from "react-feather";
import { _useBlogs } from "../../actions/_blogs";

const Blogs = () => {
  const { list, loading, removeBlog } = _useBlogs();

  return (
    <Layout>
      <Breadcrumbs current={"Blogs"} currentIcon={<CiCircleList />} />

      <PanelHeading title={"All Blogs"} para={"You can see all blogs, delete any blog, and can update any blog."} />

      <div className="form-icon relative mt-2 mb-4">
        <Search className="w-4 h-4 absolute top-3 start-4"></Search>
        <input name="subject" id="subject" className="form-input ps-11" placeholder="Search: Any Blog..." />
      </div>

      <BlogList list={list} removeBlog={removeBlog} />
    </Layout>
  );
};

export default Blogs;
