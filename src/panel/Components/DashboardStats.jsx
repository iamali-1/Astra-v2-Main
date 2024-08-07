import React from "react";
import { MdCategory } from "react-icons/md";
import { Users } from "react-feather";
import { BsList } from "react-icons/bs";

const DashboardStats = () => {
  return (
    <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-4 ">
      <div className="flex justify-between items-end border rounded-md shadow-md p-3 font-bold">
        <div>
          <Users size={17} />
          <span>Users</span>
        </div>
        <span>100</span>
      </div>

      <div className="flex justify-between items-end border rounded-md shadow-md p-3 font-bold">
        <div>
          <MdCategory size={17} />
          <span>Categories</span>
        </div>
        <span>100</span>
      </div>

      <div className="flex justify-between items-end border rounded-md shadow-md p-3 font-bold">
        <div>
          <BsList size={17} />
          <span>Blogs</span>
        </div>
        <span>100</span>
      </div>
    </div>
  );
};

export default DashboardStats;
