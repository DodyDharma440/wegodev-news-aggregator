import React from "react";
import { Link } from "react-router-dom";

import logoText from "assets/images/logo/logoText.png";

const NavbarTop = () => {
  return (
    <div className="fixed inset-x-0 top-0 bg-white px-4 py-3 text-center shadow-md z-50">
      <Link to="/">
        <img src={logoText} alt="logo" className="h-8 mx-auto" />
      </Link>
    </div>
  );
};

export default NavbarTop;
