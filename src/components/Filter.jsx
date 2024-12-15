import { IoMdArrowDropdown } from "react-icons/io";
import React, { useRef, useState } from "react";

export default function Filter(props) {
  // const rootRef = useRef(null);

  const [optionValue, setOptionValue] = useState("All");
  const [clicked, setClicked] = useState(false);
  // function handleClickOutside(event) {

  function handleOptionChange(event) {
    const option = event.target.value;
    setOptionValue(
      String(option).slice(0, 1).toUpperCase() + String(option).slice(1)
    );
    props.getOption(option);
  }

  return (
    <div className=" bg-transparent text-white rounded-lg absolute top-8 right-8 flex flex-col gap-2 w-32">
      <button onClick={() => setClicked(!clicked)} className="flex justify-between gap-2 align-middle items-center p-1 px-2 bg-gray-700 rounded-lg">
        {optionValue}
        <IoMdArrowDropdown className="text-white" />
      </button>

      <div
        className={`${clicked ? "block" : "hidden"} bg-gray-700 rounded-lg py-2`}
        onClick={handleOptionChange}
        id="dropdown"
        name="options"
      >
        <option
          className="hover:bg-gray-900 text-md px-2 cursor-pointer"
          value="all"
        >
          All
        </option>
        <option
          className="hover:bg-gray-900 text-md px-2 cursor-pointer"
          value="pending"
        >
          Pending
        </option>
        <option
          className="hover:bg-gray-900 text-md px-2 cursor-pointer"
          value="completed"
        >
          Completed
        </option>
        <option
          className="hover:bg-gray-900 text-md px-2 cursor-pointer"
          value="importance"
        >
          Importance
        </option>
      </div>
    </div>
  );
}
