import React, { useEffect, useState, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import { AiTwotoneDelete } from "react-icons/ai";

function Item(props) {
  const [ival, setIval] = useState(props.importance); //default value is gonna be it's importance

  const [showDelete, setShowDelete] = useState(false);

  return (
    <div id={props.index} className="list-item-div">
      <li
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}
        style={{ fontFamily: "'Noto Sans', sans-serif" }}
        className={`${
          props.completed ? "text-green-500" : ""
        } leading-7 p-2 py-4 text-md break-words overflow-x-hidden border-b border-gray-600 items-center transition-all duration-300`}
      >
        <div className="flex items-center relative">
          <div className="flex gap-4 h-full items-center">
            <button
              onClick={props.done}
              title="Done"
              aria-label="done"
              className={` rounded-full h-[26px] p-1 border border-white`}
            >
              <div
                className={`${
                  props.completed ? "bg-white" : ""
                } w-full p-2 h-full rounded-full transition-all duration-300`}
              >
                {" "}
              </div>
            </button>

            {props.content}
          </div>

          <button
            title="Delete"
            onClick={props.delete}
            aria-label="delete"
            className={`w-fit h-full rounded-full transition-all duration-500 block absolute right-0 sm:${
              showDelete ? "block" : "hidden"
            }`}
          >
            <AiTwotoneDelete className="text-white text-xl" />
          </button>
        </div>
      </li>

      <div className="container-item-prop">
        {/* <div className="button-div">
          

          <IconButton
            title="Edit"
            onClick={props.edit}
            className="edit-btn"
            aria-label="edit"
            fontSize="small"
          >
            <EditIcon
              sx={{
                color: "#eee",
              }}
              fontSize="small"
            />
          </IconButton>

          
        </div> */}

        {/* <div className="div-importance" title="importance of tasks">
          <input
            type="text"
            value={ival}
            className="props-importance"
            onChange={(e) => setIval(e.target.value)}
            onBlur={() => props.changeImportance(ival)} //when the element loses it's focus
          />
        </div> */}
      </div>
    </div>
  );
}

export default Item;
