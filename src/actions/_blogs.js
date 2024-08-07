import { useEffect, useState } from "react";
import { Err } from "../config/Errs";
import axios from "axios";
import { API } from "../config/API";
import toast from "react-hot-toast";
import { useAuth } from "../context/authContext";

const initialState = {
  slug: "",
  seoTitle: "",
  metaDescription: "",
  title: "",
  description: "",
  content: "",
  image: "",
  category: "",
  prevImage: null,
};

export const _useBlogs = () => {
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [_values, _setValues] = useState(initialState);

  const fetchAllBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/admin-blogs`, {
        headers: {
          Authorization: auth && auth?.token,
        },
      });
      setList(data);
    } catch (error) {
      Err(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth && auth?.token) fetchAllBlogs();
  }, [auth && auth?.token]);

  const fetchOneBlog = async (x) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/admin/blog/${x}`);
      _setValues(data);
      _setValues((prev) => ({ ...prev, prevImage: data.image }));
      _setValues((prev) => ({ ...prev, image: "" }));
    } catch (error) {
      Err(error);
    } finally {
      setLoading(false);
    }
  };

  const editBlog = async (blogId, payloadData) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/blog/${blogId}`, payloadData);
      toast.success("Edited");
    } catch (error) {
      Err(error);
    } finally {
      setLoading(false);
    }
  };

  const createBlog = async (payloadData) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/create-blog`, payloadData);
      toast.success("Created");
    } catch (error) {
      Err(error);
    } finally {
      setLoading(false);
    }
  };

  const removeBlog = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.delete(`${API}/blog/${id}`);
      toast.success("Removed");
      fetchAllBlogs();
    } catch (error) {
      Err(error);
    } finally {
      setLoading(false);
    }
  };

  const changeHandler = (e) => {
    if (e.target.files) {
      _setValues((prevValues) => ({ ...prevValues, image: e.target.files[0] }));
    } else {
      const { name, value } = e.target;
      _setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  return { list, loading, createBlog, fetchOneBlog, changeHandler, _setValues, _values, editBlog, removeBlog };
};

export const _useClientBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const [detail, setDetail] = useState({});

  const fetchAllBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/all-blogs`);
      setList(data);
    } catch (error) {
      Err(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogBySlug = async (slug) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/by-slug/${slug}`);
      console.log("detail", data);
      setDetail(data);
    } catch (error) {
      Err(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const addView = async (slug) => {
    try {
      const { data } = await axios.put(`${API}/add-view/${slug}`);
    } catch (error) {
      Err(error);
    }
  };

  return { loading, list, detail, fetchBlogBySlug, addView };
};
