import React from "react";

const StyledButtonInline = () => {
  const style = {
    backgroundColor: "teal",
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  };

  return <button style={style}>Click Me (Inline)</button>;
};

export default StyledButtonInline;
