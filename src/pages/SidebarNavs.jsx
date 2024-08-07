import React from "react";
import { MdAdd, MdCreate, MdDashboard } from "react-icons/md";
import { BiLeftArrow } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { useActive } from "../hooks/useActive";
import { Link } from "react-router-dom";

const SidebarNavs = () => {
  const { isActive } = useActive();
  return (
    <div className="mt-10 text-sm ">
      <Link to={"/dashboard"} className={`flex justify-start items-center gap-2 cursor-pointer layout-nav ${isActive("/dashboard") && "layout-nav-active"} `}>
        <MdDashboard size={17} /> Dashboard
      </Link>
      <Link to={"/blogs-list"} className={`flex justify-start items-center gap-2 cursor-pointer mt-5 layout-nav ${isActive("/blogs-list") && "layout-nav-active"}`}>
        <BsList size={17} /> Blogs
      </Link>
      <Link to={"/create-blog"} className={`flex justify-start items-center gap-2 cursor-pointer mt-3 layout-nav ${isActive("/create-blog") && "layout-nav-active"}`}>
        <MdCreate size={17} /> Create Blog
      </Link>

      <Link to={"/cagories-list"} className={`flex justify-start items-center gap-2 cursor-pointer mt-5 layout-nav ${isActive("/cagories-list") && "layout-nav-active"}`}>
        <BsList size={17} /> Categories
      </Link>
    

      <Link to={"/"} className={`flex justify-start items-center gap-2 cursor-pointer mt-5 layout-nav`}>
        <BiLeftArrow size={17} /> Back to home
      </Link>
    </div>
  );
};

export default SidebarNavs;
