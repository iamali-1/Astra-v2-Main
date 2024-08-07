import React from "react";
import { Link } from "react-router-dom";
import logo_web_white from "../../assets/images/white_logo.png";

const footerNavs = [
  {
    label: "Menu",
    items: [
      { href: "/about", name: "About Us" },
      { href: "/services", name: "Services" },
      { href: "/projects", name: "Projects" },
      { href: "/portfolio", name: "Portfolio" },
      { href: "/blogs", name: "Blogs" },
      { href: "https://cloud.astra-analytica.com/", name: "Cloud Services" },
      { href: "/career", name: "Career" },
      { href: "/contact", name: "Contact Us" },
      { href: "/faq", name: "FAQ" },
      { href: "/login", name: "Login" },
    ],
  },
  {
    label: "Terms",
    items: [
      { href: "/privacy-policy", name: "Privacy & Policy" },
      { href: "/terms-and-condition", name: "Terms and Conditions" },
    ],
  },
  {
    label: "Contact",
    items: [{ email: "contact@astra-analytica.com" }, { number: "+1-6692411463" }, { address: "Astra Analytica Corporation 134 Stuart Ave STE B11 Vally Stream, NY" }],
  },
];

const Footer = () => {
  return (
    <footer className="relative my-footer mt-20">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="relative py-12">
            <div className="relative w-full">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="md:col-span-3 flex justify-center items-center">
                  <Link to="#">
                    <img src={logo_web_white} style={{ width: "100rem", height: "6rem" }} alt="Astra-analytica logo" className="mx-auto" />
                  </Link>
                </div>
                <div className="md:col-span-9 margin-left">
                  <div className="md:flex md:flex-wrap md:justify-between mt-5 md:mt-0">
                    {footerNavs.map((nav, index) => (
                      <div key={index} className="w-full md:w-1/3 mt-8 md:mt-0">
                        <ul className="list-none footer-list text-start">
                          <h4 className="text-emerald-600 text-2xl">{nav.label}</h4>
                          {nav.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="mt-1">
                              {item.href ? (
                                <Link to={item.href} className="btn btn-link font-medium hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">
                                  {item.name}
                                </Link>
                              ) : null}
                              {item.email ? <p className="text-white">{`${item.email}`}</p> : null}
                              {item.number ? <p className="text-white">{` ${item.number}`}</p> : null}
                              {item.address ? <p className="text-white">{` ${item.address}`}</p> : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700 ">
        <div className="container text-center">
          <div className="grid  items-center gap-6">
            <div className="text-center">
              <p className="mb-0 text-gray-300 font-medium">
                Copyright©
                <Link to="/" className="mx-3 text-md text-emerald-600">
                  Astra Analytica
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
