import logo_light from "../../assets/images/logo-light.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo_icon_40 from "../../assets/images/logo-icon-40.png";
import logo_icon_40_white from "../../assets/images/logo-icon-40-white.png";
import logo_mob_white from "../../assets/images/mob_white.png";
import logo_mob_dark from "../../assets/images/mob_dark.png";

// for web logos
import logo_web_dark from "../../assets/images/dark_logo.png";
import logo_web_white from "../../assets/images/white_logo.png";

import logo_dark from "../../assets/images/logo-dark.png";
import logo_white from "../../assets/images/logo-white.png";
import image from "../../assets/images/team/05.jpg";
import { useAuth } from "../../context/authContext";

export default function Navbar(props) {
  const [auth] = useAuth();

  const { navClass, topnavClass, isContainerFluid } = props;
  const [isOpen, setMenu] = useState(true);

  window.addEventListener("scroll", windowScroll);
  useEffect(() => {
    activateMenu();
  }, []);

  function windowScroll() {
    const navbar = document.getElementById("topnav");
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
      if (navbar !== null) {
        navbar?.classList.add("nav-sticky");
      }
    } else {
      if (navbar !== null) {
        navbar?.classList.remove("nav-sticky");
      }
    }

    const mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.classList.add("flex");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("flex");
      }
    }
  }

  const toggleMenu = () => {
    setMenu(!isOpen);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  const getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) { }
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(matchingMenuItem, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  };
  return (
    <nav id="topnav" className={`defaultscroll is-sticky ${topnavClass}`}>
      <div className={`${isContainerFluid === true ? "container-fluid md:px-8 px-3" : "container"}`}>
        <Link className="logo" to="/">
          <div className="block sm:hidden">
            <img src={logo_mob_dark} className="h-10 inline-block dark:hidden" alt="" />
            <img src={logo_mob_white} className="h-10 hidden dark:inline-block" alt="" />
          </div>

          {navClass && navClass.includes("nav-light") ? (
            <div className="sm:block hidden">
              <span className="inline-block dark:hidden">
                <img src={logo_web_dark} className="h-10 l-dark" alt="" />
                <img src={logo_web_white} className="h-10 l-light" alt="" />
              </span>
              <img src={logo_web_white} className="h-10 hidden dark:inline-block" alt="" />
            </div>
          ) : (
            <div className="sm:block hidden">
              <img src={logo_web_dark} className="h-10 inline-block dark:hidden" alt="" />
              <img src={logo_web_white} className="h-10 hidden dark:inline-block" alt="" />
            </div>
          )}
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            <Link to="#" className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>
        {/* <!-- End Mobile Toggle --> */}

        {/* <!--Login button Start--> */}
        <ul className="buy-button list-none mb-0">
          <li className="inline-block ps-1 mb-0">
            {!auth?.user ? (
              <Link to="/quote" className="btn rounded-lg primary-things text-white hover:text-[#300596]">
                <button> Get a Quote </button>
              </Link>
            ) : (
              <Link to="/dashboard" className="btn rounded-lg primary-things text-white hover:text-[#300596]">
                <button> Dashboard </button>
              </Link>
            )}
          </li>
        </ul>

        <div id="navigation" className={`${isOpen === true ? "hidden" : "block"}`}>
          <ul className={`navigation-menu ${navClass}`}>
            <li>
              <Link to="/" className="sub-menu-item text-red">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="sub-menu-item">
                About
              </Link>
            </li>

            <li>
              <Link to="/services" className="sub-menu-item">
                Services
              </Link>
            </li>

            <li>
              <Link to="/projects" className="sub-menu-item">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="sub-menu-item">
                Portfolio
              </Link>
            </li>

            <li>
              <a href="https://cloud.astra-analytica.com/" target="_blank" className="sub-menu-item">
                Cloud Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
