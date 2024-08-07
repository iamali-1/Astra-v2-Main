import React from "react";

import Logo from "../Components/Logo";
import SidebarNavs from "../../pages/SidebarNavs";

const Sidebar = () => {
  return (
    <div className="hidden md:block w-[200px]  p-2 h-full fixed bg-gray-200 border border-l-grey-50">
      <div className="p-2">
        <Logo fromH={10} />

        <SidebarNavs />
      </div>
    </div>
  );
};

export default Sidebar;
