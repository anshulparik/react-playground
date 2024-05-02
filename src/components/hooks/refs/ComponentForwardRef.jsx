import { useState, useRef } from "react";
import CustomInput from "./CustomInput";

// forwardRef useCase:
// NOTE: We cannot pass ref as a prop directly in react.
// 1. If we want to pass ref as a prop, then we will use forwardRef.
// 2. We will pass it as a prop, then we will access it with forwardRef.

const ComponentForwardRef = () => {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef();

  const handleClick = () => {
    const value = inputRef?.current?.value;
    if (!value) {
      inputRef?.current?.focus();
    } else {
      alert(value);
      setInputText("");
    }
  };

  return (
    <div className="input-container">
      <CustomInput
        ref={inputRef}
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default ComponentForwardRef;
