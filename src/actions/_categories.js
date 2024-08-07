import { useEffect, useState } from "react";
import { Err } from "../config/Errs";
import axios from "axios";
import { API } from "../config/API";
import toast from "react-hot-toast";

export const _useCats = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");

  const fetchAllCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API}/all-cats`);
      if (res.status === 200) {
        setList(res.data.categories);
        console.log(res.data, "cateogries");
      }
    } catch (error) {
      Err(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const createCategory = async () => {
    setLoading(true);
    if (!name) {
      return toast.error("Name is required.");
    }
    try {
      const res = await axios.post(`${API}/create`, { name });

      if (res.status === 201) {
        toast.success("Created");
        fetchAllCategories();
        setName("");
      }
    } catch (error) {
      Err(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (x) => {
    setLoading(true);

    try {
      const res = await axios.delete(`${API}/remove/${x}`);
      fetchAllCategories();
      toast.success("Removed.");
    } catch (error) {
      Err(error);
    } finally {
      setLoading(false);
    }
  };

  return { list, loading, createCategory, name, setName, deleteCategory };
};
