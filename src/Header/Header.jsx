import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Header() {


  let handle = () => {
    let bars = document.getElementById("bars");
    let menu = document.getElementById("smallMenu");
    let cross = document.querySelector("#cross");
    menu.classList.remove("hidden");
    bars.classList.add("hidden");
    cross.classList.remove("hidden");
  };
  let handle2 = () => {
    let bars = document.getElementById("bars");
    let menu = document.getElementById("smallMenu");
    let cross = document.querySelector("#cross");
    menu.classList.add("hidden");
    cross.classList.add("hidden");
    bars.classList.remove("hidden");
  };
  return (
    <header className="bg-[#040b16]">
        <div className="flex justify-between py-5 px-3 md:px-20">
          <div className="space-x-2">
            <span className=" text-white text-lg font-bold">Prajwal</span>
            <span className="text-lg font-bold text-[#00abf0]">Kamdi</span>
          </div>
          <FaBars
            className="text-white mt-1  md:hidden "
            id="bars"
            onClick={handle}
          />
          <RxCross2
            className=" hidden text-white"
            onClick={handle2}
            id="cross"
          />
          {/* //large menu */}
          <div className="hidden md:flex text-white ">
            <nav className="">
              <ul className=" flex m-auto md:space-x-10 lg:space-x-24 xl:space-x-[150px]">
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      isActive ? "text-[#00abf0] font-semibold" : "text-white"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="education"
                    className={({ isActive }) =>
                      isActive ? "text-[#00abf0] font-semibold" : "text-white"
                    }
                  >
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="skills"
                    className={({ isActive }) =>
                      isActive ? "text-[#00abf0] font-smibold" : "text-white"
                    }
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="project"
                    className={({ isActive }) =>
                      isActive ? "text-[#00abf0] font-semibold" : "text-white"
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      isActive ? "text-[#00abf0] font-semibold" : "text-white"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div
          id="smallMenu"
          className="hidden  text-white bg-gray-900"
          onClick={handle2}
        >
          <nav>
            <ul className="space-y-10 py-5 px-3">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"education"}>Education</NavLink>
              </li>
              <li>
                <NavLink to={"skills"}>Skills</NavLink>
              </li>
              <li>
                <NavLink to={"project"}>Project</NavLink>
              </li>
              <li>
                <NavLink to={"contact"}>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
   
    </header>
  );
}

export default Header;
