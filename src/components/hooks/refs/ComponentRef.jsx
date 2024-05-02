import React, { useEffect, useState, useRef } from "react";

// useRef usecase:
// 1. To store a value which persist b/w d/f render cycles.
// 2. Used to refer any HTML element in the DOM.

const ComponentRef = () => {
  const [text, setText] = useState("");
  //   const [count, setCount] = useState(0);
  const count = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    // setCount((prev) => prev + 1);
    count.current = count.current + 1;
  });

  const handleClick = () => {
    const value = inputRef?.current?.value;
    if (!value) {
      inputRef?.current?.focus();
    } else {
      alert(value);
      setText("");
    }
  };

  return (
    <div className="input-container">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
      <br />
      <div>Here is the input text {text}</div>
      <div>`Here is the render count {count.current}</div>
    </div>
  );
};

export default ComponentRef;
