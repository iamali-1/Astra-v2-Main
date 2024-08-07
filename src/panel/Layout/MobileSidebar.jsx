import React from "react";
import Logo from "../Components/Logo";
import SidebarNavs from "../../pages/SidebarNavs";

const MobileSidebar = ({ Toggle }) => {
  return (
    <div className="w-full  p-2 h-full fixed bg-gray-200 border border-l-grey-50">
      <div className="flex justify-between items-center p-2">
        <Logo fromH={10} />
        <div onClick={Toggle}>X</div>
      </div>

      <SidebarNavs />
    </div>
  );
};

export default MobileSidebar;
