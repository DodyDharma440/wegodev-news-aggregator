import React from "react";
import { NavLink } from "react-router-dom";

import { HiHome, HiClipboardList, HiSearch, HiBookmark } from "react-icons/hi";

const menuItems = [
  {
    url: "/",
    icon: <HiHome className="m-auto" />,
  },
  {
    url: "/category",
    icon: <HiClipboardList className="m-auto" />,
  },
  {
    url: "/explore",
    icon: <HiSearch className="m-auto" />,
  },
  {
    url: "/bookmarks",
    icon: <HiBookmark className="m-auto" />,
  },
];

const NavbarBottom = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-myPalette-dark1">
      <div className="flex justify-center">
        {menuItems.map((menuItem, index) => {
          return (
            <NavLink
              key={index}
              exact
              to={menuItem.url}
              activeClassName="bg-myPalette-dark2"
              className="py-3 px-5 text-center"
              style={{ width: `calc(100vh / ${menuItems.length})` }}
            >
              <span className="m-auto text-2xl text-gray-100">
                {menuItem.icon}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarBottom;
