import React from "react";
import Navbar from "../components/partials/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import Policy from "../components/Policy";
import Footer from "../components/partials/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar navClass="justify-end nav-light" />

      <Breadcrumbs _title={"Privacy Policy"} _from={"Privacy Policy"} />

      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <div className="container md:pb-16 mt-20">
        <Policy />
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
