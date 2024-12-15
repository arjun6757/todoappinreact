import React from "react";

function Input(props) {
  function handleChange(event) {
    const { value } = event.target;
    props.set(value);
    props.ready(value.length > 0);
  }

  return (
    <input
    style={{fontFamily:"'Noto Sans', sans-serif"}}
    className="w-full p-5 h-full bg-transparent pb-2 pt-2 outline-none text-white"
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
