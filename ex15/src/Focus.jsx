import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>useRef - Focus Input</h3>
      <input type="text" placeholder="Type something..." ref={inputRef} />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
};

export default FocusInput;
