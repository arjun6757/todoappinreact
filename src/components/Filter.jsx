import React from "react";

function Filter(props) {
  // const items = props.array;

  function handleOptionChange(event) {
    const option = event.target.value;
    props.getOption(option);
  }

  return (
    // items.length !== 0 && (
      <select defaultValue={"all"} onChange={handleOptionChange} id="dropdown" name="options">
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    // )
  );
}

export default Filter;
