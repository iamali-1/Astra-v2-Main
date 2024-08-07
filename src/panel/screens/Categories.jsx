import React from "react";
import Layout from "../Layout/Layout";
import Breadcrumbs from "../Layout/Breadcrumbs";
import { BiCategory } from "react-icons/bi";
import PanelHeading from "../Layout/PanelHeading";
import { Search, Trash } from "react-feather";
import { MdAdd } from "react-icons/md";
import { _useCats } from "../../actions/_categories";

const Categories = () => {
  const { list, loading, createCategory, name, setName, deleteCategory } = _useCats();

  return (
    <Layout>
      <Breadcrumbs current={"Categoires"} currentIcon={<BiCategory />} />
      <PanelHeading title={"All Categories"} para={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly"} />

      {/* add category */}
      <div className="my-10">
        <div className="text-left">
          <label htmlFor="subject" className="text-sm">
            Add Category:
          </label>
          <div className="form-icon relative mt-2">
            <input name="name" onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-input ps-11" placeholder="Category..." />
            {loading ? <p className="w-4 h-4 absolute top-3 start-4">...</p> : <MdAdd className="w-4 h-4 absolute top-3 start-4 cursor-pointer" onClick={createCategory}></MdAdd>}
          </div>
        </div>
      </div>

      <div className="mt-10 grid lg:grid-cols-4 grid-cols-1 gap-4 ">
        {list.map((x) => (
          <div key={x._id} className="border rounded-md p-2 flex justify-between items-center">
            <span>{x.name}</span>
            <Trash className="text-red-600 cursor-pointer" size={15} onClick={() => deleteCategory(x._id)} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
