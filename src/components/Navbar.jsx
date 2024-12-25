/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navbarMenus } from "../utils/static";
import HamburgerMenu from "../../public/icons/Hamburger";

const Navbar = () => {
  const [openSubMenu, setOpenSubMenu] = useState({});
  const [openMobile, setOpenMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  const toggleSubMenu = (id) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const location = useLocation();

  return (
    <header className="py-5 relative">
      <nav>
        <div className="container">
          <div className="flex items-center justify-between lg:justify-normal gap-x-20 w-full">
            <Link to={"/"} className="lg:hidden">
              <p className="text-red-900 font-semibold text-4xl">DIAMOND TAS -</p>
              <p className="text-lg">Jakarta</p>
            </Link>
            <Link
              to={"/"}
              className="hidden lg:flex lg:place-content-center lg:items-center border-2 border-orange-500 rounded-[50%] w-28 h-28"
            >
              <div
                className={`transition-transform duration-1000 ease-out ${
                  isVisible
                    ? "translate-x-0 opacity-100 relative"
                    : "translate-x-[100vw] right-0"
                }`}
              >
                <p className="text-xl text-red-900 font-medium leading-none">
                  DIAMOND
                </p>
                <p className="text-xl text-red-900 font-medium leading-none">
                  TAS - <span className="text-sm text-black">Jakarta</span>
                </p>
              </div>
            </Link>

            <ul className="lg:flex items-center gap-5 gap-x-10 hidden">
              {navbarMenus.map((menu, id) => (
                <li key={id} className="text-lg">
                  {menu.link ? (
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-green-500"
                          : "hover:text-green-500 transition-all duration-300"
                      }
                      to={menu.link}
                    >
                      {menu.menu}
                    </NavLink>
                  ) : (
                    <div className="group relative cursor-default">
                      <p
                        className={`${
                          menu.subs_menu.some(
                            (item) => location.pathname === item.link
                          )
                            ? "text-green-500"
                            : ""
                        }`}
                      >
                        {menu.menu}
                      </p>
                      <div className="hidden flex-col space-y-1 bg-white shadow-sm group-hover:flex absolute top-7 -left-3 p-3 whitespace-nowrap">
                        {menu.subs_menu.map((item, id) => (
                          <NavLink
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "text-green-500"
                                : "hover:text-green-500 transition-all duration-300"
                            }
                            to={item.link}
                            key={id}
                          >
                            {item.menu}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <ul
              className={`${
                openMobile ? "flex" : "hidden"
              } flex-col absolute z-20 bg-[#a2cc01] right-5 left-5 top-24`}
            >
              {navbarMenus.map((menu, id) => (
                <li key={id}>
                  {menu.link ? (
                    <NavLink
                      to={menu.link}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "bg-gray-300 text-[#a2cc01] flex font-semibold p-2"
                          : "p-2 bg-transparent flex"
                      }
                      onClick={() => setOpenMobile(!openMobile)}
                    >
                      {menu.menu}
                    </NavLink>
                  ) : (
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between p-2">
                        <p>{menu.menu}</p>
                        <button onClick={() => toggleSubMenu(id)}>
                          <img
                            src="/icons/up-arrow.svg"
                            alt="icon"
                            className={`${
                              openSubMenu[id] ? "rotate-90" : "-rotate-90"
                            }`}
                          />
                        </button>
                      </div>
                      <div
                        className={`${
                          openSubMenu[id] ? "flex flex-col" : "hidden"
                        }`}
                      >
                        {menu.subs_menu.map((sub, id) => (
                          <NavLink
                            key={id}
                            to={sub.link}
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "bg-gray-300 font-semibold text-[#a2cc01] flex p-2"
                                : "p-2 bg-transparent"
                            }
                            onClick={() => {
                              setOpenMobile(!openMobile);
                              // setOpenSubMenu(!openSubMenu)
                            }}
                          >
                            {sub.menu}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div
              className="bg-[#a2cc01] p-2 lg:hidden w-12 h-12 flex place-content-center items-center"
              onClick={() => setOpenMobile(!openMobile)}
            >
              {openMobile ? (
                <span className="text-white text-2xl">✖</span>
              ) : (
                <HamburgerMenu color="white" size={32} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
