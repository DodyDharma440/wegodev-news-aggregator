import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { BsCheckCircle } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";

const Snackbar = ({ children, variant, open, onClose, duration, title }) => {
  if (duration) {
    setTimeout(() => {
      onClose();
    }, duration);
  }

  const Icon = () => {
    return variant === "success" ? (
      <BsCheckCircle className="text-4xl text-green-400" />
    ) : variant === "danger" ? (
      <CgDanger className="text-4xl text-red-500" />
    ) : null;
  };

  const containerStyle = classnames(
    "fixed bottom-14 left-3 bg-white shadow-lg pr-5 pl-2 py-4 rounded-r-xl grid border-l-8 grid-cols-4",
    {
      "border-green-400": variant === "success",
      "border-red-500": variant === "danger",
    }
  );

  return open ? (
    <div onClick={onClose} className={containerStyle} style={{ maxWidth: 300 }}>
      <div className="col-span-1 flex items-center justify-center">
        <Icon />
      </div>
      <div className="col-span-3 ml-2">
        <h5 className="text-md font-bold">{title}</h5>
        {children}
      </div>
    </div>
  ) : null;
};

Snackbar.defaultProps = {
  variant: "success",
  title: "",
};

Snackbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  variant: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  title: PropTypes.string,
};

export default Snackbar;
