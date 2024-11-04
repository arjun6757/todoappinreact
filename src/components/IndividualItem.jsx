import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";

function Item(props) {

  const [ival, setIval] = useState(props.importance); //default value is gonna be it's importance

  return (
    <div id={props.index} className="list-item-div">
      <li className={props.completed ? "completed" : null}>{props.content}</li>

      <div className="container-item-prop">
        <div className="button-div">
          <IconButton
            className="mui-done-button"
            onClick={props.done}
            title="Done"
            color="primary"
            aria-label="done"
            fontSize="small"
          >
            <CheckIcon
              className="mui-done-icon"
              sx={{
                color: "#eee",
              }}
              fontSize="small"
            />
          </IconButton>

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

          <IconButton
            title="Delete"
            onClick={props.delete}
            className="delete-btn"
            aria-label="delete"
            fontSize="small"
          >
            <DeleteIcon
              sx={{
                color: "#eee",
              }}
              fontSize="small"
            />
          </IconButton>
        </div>

        <div className="div-importance" title="importance of tasks">
          imp :
          <input
            type="text"
            value={ival}
            className="props-importance"
            onChange={(e) => setIval(e.target.value)}
            onBlur={() => props.changeImportance(ival)} //when the element loses it's focus
          />
        </div>
      </div>
    </div>
  );
}

export default Item;
