import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Alert = ({ children, variant }) => {
  const alertStyle = classnames(
    "px-6 py-4 mt-2 rounded-2xl text-center font-bold",
    {
      "border-myPalette-textDanger bg-myPalette-bgDanger text-myPalette-textDanger":
        variant === "danger",
      "border-myPalette-textSuccess bg-myPalette-bgSuccess text-myPalette-textSuccess":
        variant === "success",
      "border-myPalette-textWarning bg-myPalette-bgWarning text-myPalette-textWarning":
        variant === "warning",
    }
  );

  return (
    <div style={{ border: "1px solid" }} className={alertStyle}>
      {children}
    </div>
  );
};

Alert.defaultProps = {
  variant: "success",
};

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Alert;
