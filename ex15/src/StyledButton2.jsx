import React from "react";

const StyledButtonInternal = () => {
  return (
    <div>
      <style>{`
        .internal-button {
          background-color: purple;
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
      `}</style>
      <button className="internal-button">Click Me (Internal)</button>
    </div>
  );
};

export default StyledButtonInternal;
