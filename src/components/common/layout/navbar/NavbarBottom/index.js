import React from "react";
import PropTypes from "prop-types";

import { HiHome, HiClipboardList, HiSearch, HiBookmark } from "react-icons/hi";

const menuItems = [
  {
    url: "",
    icon: <HiHome className="m-auto text-2xl" />,
  },
  {
    url: "",
    icon: <HiClipboardList className="m-auto text-2xl" />,
  },
  {
    url: "",
    icon: <HiSearch className="m-auto text-2xl" />,
  },
  {
    url: "",
    icon: <HiBookmark className="m-auto text-2xl" />,
  },
];

const NavbarTop = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-green-500">
      <div className="flex justify-center">
        {menuItems.map((menuItem, index) => {
          return (
            <div
              key={index}
              className="py-3 px-5 hover:bg-green-600 text-center"
              style={{ width: `calc(100vh / ${menuItems.length})` }}
            >
              <p className="text-gray-100 font-bold text-xl">{menuItem.icon}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

NavbarTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default NavbarTop;
