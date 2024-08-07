import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import Breadcrumbs from "../Layout/Breadcrumbs";
import PanelHeading from "../Layout/PanelHeading";
import { _useBlogs } from "../../actions/_blogs";
import { useParams } from "react-router-dom";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { RiSeoFill } from "react-icons/ri";
import { _useCats } from "../../actions/_categories";
import { MdArrowDropDown, MdCreate, MdDescription, MdTitle } from "react-icons/md";
import { MessageCircle } from "react-feather";
import { toImageUrl } from "../../config/API";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";

const BlogDetail = () => {
  const { id } = useParams();
  const [auth] = useAuth();

  const { list: cats, loading: catsLoading } = _useCats();

  const { fetchOneBlog, _values, _setValues, changeHandler, loading, editBlog } = _useBlogs();

  useEffect(() => {
    if (auth && auth?.token) fetchOneBlog(id);
  }, [auth && auth?.token, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!_values.title || !_values.description || !_values.slug || !_values.content || !_values.category || !_values.seoTitle || !_values.metaDescription) {
      return toast.error("All fields are required");
    }

    const _formData = new FormData();
    _formData.append("title", _values.title);
    _formData.append("description", _values.description);
    _formData.append("slug", _values.slug);
    _formData.append("content", _values.content);
    _formData.append("category", _values.category);
    _formData.append("seoTitle", _values.seoTitle);
    _formData.append("metaDescription", _values.metaDescription);

    if (_values.image && !_values.prevImage) {
      _formData.append("image", _values.image);
    } else if (_values.prevImage && !_values.image) {
      _formData.append("image", _values.prevImage);
    }
    editBlog(id, _formData);
  };

  return (
    <Layout>
      <Breadcrumbs current={"Edit Blog"} currentIcon={<MdCreate />} />
      <PanelHeading title={"Edit Blog"} para={""} />

      <form onSubmit={() => {}} className="border p-2 rounded-md">
        <div className="grid lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4 mb-5">
            <div className="text-left">
              <label htmlFor="name" className="font-semibold">
                Meta title of the blog:
              </label>
              <div className="form-icon relative mt-2">
                <MdTitle className="w-4 h-4 absolute top-3 start-4"></MdTitle>
                <input value={_values.seoTitle} onChange={changeHandler} name="seoTitle" type="text" className="form-input ps-11" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 mb-5">
            <div className="text-left">
              <label htmlFor="name" className="font-semibold">
                Meta description of the blog:
              </label>
              <div className="form-icon relative mt-2">
                <MdDescription className="w-4 h-4 absolute top-3 start-4"></MdDescription>
                <input value={_values.metaDescription} name="metaDescription" onChange={changeHandler} type="text" className="form-input ps-11" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 mb-5">
            <div className="text-left">
              <label htmlFor="name" className="font-semibold">
                Slug of the blog:
              </label>
              <div className="form-icon relative mt-2">
                <RiSeoFill className="w-4 h-4 absolute top-3 start-4"></RiSeoFill>
                <input value={_values.slug} name="slug" onChange={changeHandler} type="text" className="form-input ps-11" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-6 mt-5">
          <div className="lg:col-span-6 mb-5">
            <div className="text-left">
              <label htmlFor="name" className="font-semibold">
                Title of the blog:
              </label>
              <div className="form-icon relative mt-2">
                <MdTitle className="w-4 h-4 absolute top-3 start-4"></MdTitle>
                <input value={_values.title} name="title" onChange={changeHandler} type="text" className="form-input ps-11" placeholder="Title" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 mb-5">
            <div className="text-left">
              <label htmlFor="email" className="font-semibold">
                Select Blog Category {catsLoading && "..."}
              </label>
              <div className="form-icon relative mt-2">
                <MdArrowDropDown className="w-4 h-4 absolute top-3 start-4"></MdArrowDropDown>
                <select className="form-input ps-11" value={_values.category} name="category" onChange={changeHandler}>
                  <option value="">Please select a category</option>
                  {cats.map((x) => (
                    <option key={x._id} value={x._id}>
                      {x.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="mb-5">
            {_values.prevImage ? (
              <div className="text-left">
                <label htmlFor="subject" className="font-semibold">
                  Select Feature Image:
                </label>
                <div className="form-icon relative mt-2">
                  <img src={toImageUrl(_values.prevImage?.url)} alt="uploadedimage" width={400} height={400} />{" "}
                  <small className="text-red-700" onClick={() => _setValues((prev) => ({ ...prev, prevImage: null }))}>
                    Remove Image
                  </small>
                </div>
              </div>
            ) : (
              <div className="text-left">
                <label htmlFor="subject" className="font-semibold">
                  Select Feature Image:
                </label>
                <div className="form-icon relative mt-2">
                  <input name="image" onChange={changeHandler} type="file" className="form-input " placeholder="Subject :" />
                </div>
              </div>
            )}
          </div>

          <div className="mb-5">
            <div className="text-left">
              <label htmlFor="comments" className="font-semibold">
                Write Description:
              </label>
              <div className="form-icon relative mt-2">
                <MessageCircle className="w-4 h-4 absolute top-3 start-4"></MessageCircle>
                <textarea className="form-input ps-11 h-28" placeholder="Description :" value={_values.description} name="description" onChange={changeHandler}></textarea>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="text-left">
              <label htmlFor="comments" className="font-semibold">
                Detail Content:
              </label>
              <div className="form-icon relative mt-2">
                <ReactQuill
                  theme="snow"
                  className="h-40 font-bold form-inputs "
                  style={{ border: "none" }}
                  value={_values.content}
                  onChange={(v) => _setValues((p) => ({ ...p, content: v }))}
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-1 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
              <button onClick={handleSubmit} className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">
                {loading ? "loading.." : "Create"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default BlogDetail;
