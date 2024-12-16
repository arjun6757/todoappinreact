import React from "react";

function Input(props) {
  const [inputTextLength, setInputTextLength] = React.useState(0);

  function handleChange(event) {
    const { value } = event.target;
    setInputTextLength(value.trim(" ").length);
    props.set(value);
    props.ready(value.length > 0);
  }

  return (
    <input
      style={{ fontFamily: "'Noto Sans', sans-serif" }}
      onKeyDown={(event) => {
        if (inputTextLength === 0) {
          if (event.key === "Enter") event.preventDefault();
        }
      }}
      className="w-full p-5 pr-14 h-full bg-transparent pb-2 pt-2 outline-none text-white"
      onChange={(event) => {
        handleChange(event);
      }}
      type="text"
      placeholder={props.ph}
      value={props.in}
      autoFocus
    />
  );
}

export default Input;
