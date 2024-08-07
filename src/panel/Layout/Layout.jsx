import React, { useEffect, useState } from "react";
import useWindowResize from "../../hooks/useWidth";

import { LogOut, Menu } from "react-feather";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import Redirecting from "../../config/Redirecting";
import { _useCommon } from "../../actions/_common";

const Layout = ({ children }) => {
  const [auth, setAuth, loading] = useAuth();

  const { logout } = _useCommon();

  const { width } = useWindowResize();
  const [show, setShow] = useState(false);

  const Toggle = () => setShow(!show);

  useEffect(() => {
    if (width > 769) setShow(false);
  }, [width]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-2" style={{ marginLeft: width > 769 ? "200px" : "0px", display: show ? "none" : "block" }}>
        <div className="flex justify-between shadow-md rounded-md p-2">
          <div>
            <div className="block md:hidden" onClick={Toggle}>
              <Menu size={16} />
            </div>
          </div>
          <div className="text-end flex justify-center items-center gap-2" onClick={logout}>
            Logout <LogOut size={16} />
          </div>
        </div>

        <div className="mt-3 p-3">{loading ? <Redirecting /> : children}</div>
      </div>

      {show && <MobileSidebar Toggle={Toggle} />}
    </div>
  );
};

export default Layout;
