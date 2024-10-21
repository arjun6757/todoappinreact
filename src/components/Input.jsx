import React from "react";

function Input(props) {
  function handleChange(event) {
    const { value } = event.target;
    props.set(value);
    props.ready(value.length > 0);
  }

  return (
    <input
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
