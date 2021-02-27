import React from "react";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <div className="fixed inset-x-0 top-0 bg-white px-4 py-3 text-center shadow-md">
      <h1 className="text-gray-900 text-xl font-bold">
        <span>
          <Link to="/">NEWS</Link>
        </span>
      </h1>
    </div>
  );
};

export default NavbarTop;
