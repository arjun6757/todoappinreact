import React, { useEffect } from "react";
import { LiaPlusSolid } from "react-icons/lia";

function AddButton(props) {

  return (
    <button
      tabIndex={props.content.trim(" ").length > 0 ? 0 : -1}
      title="Add item"
      onClick={props.add}
      className={`${
        props.content.trim(" ").length > 0 ? "opacity-100" : "opacity-50 pointer-events-none"
      } transition-all duration-300 absolute top-0 right-0 h-full outline-blue-500 w-fit bg-gray-500 rounded-md p-3 text-white`}
    >
      <LiaPlusSolid />
    </button>
  );
}

export default AddButton;
