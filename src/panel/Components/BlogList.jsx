import React from "react";
import { Edit, Trash } from "react-feather";
import { Link } from "react-router-dom";

const BlogList = ({ list, removeBlog }) => {
  return (
    <div className="grid grid-cols-1 mt-8 gap-[30px]" key={"1"}>
      {list?.map((x) => (
        <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-3">
          <div className="flex flex-col justify-start items-start">
            <Link to="/" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500  ">
              {x.title}
            </Link>

            <p className="text-sm">{x.description}</p>
          </div>

          <div className="flex gap-3 md:mt-0 mt-4">
            <Link to={`/blog-detail/${x._id}`} className="flex items-center gap-2 cursor-pointer">
              <Edit size={13} /> Edit
            </Link>
            <div onClick={() => removeBlog(x._id)} className="flex items-center gap-2 cursor-pointer ">
              <Trash size={13} /> Delete
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
