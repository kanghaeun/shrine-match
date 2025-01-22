import React from "react";
import colors from "../../../styles/color";

const Divider = ({ theme }) => {
  const lightStyle = {
    backgroundColor: `${colors.primary}`,

    height: "3px",
    width: "460px",
    margin: "6px 0",
  };

  const darkStyle = {
    backgroundColor: `${colors.secondary}`,
    height: "3px",
    width: "460px",
    margin: "6px 0",
  };

  return (
    <div>
      {theme === "light" ? (
        <>
          <div style={lightStyle}></div>
          <div style={lightStyle}></div>
          <div style={lightStyle}></div>
        </>
      ) : (
        <div style={darkStyle}></div>
      )}
    </div>
  );
};

export default Divider;
