import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

function Item(props) {
  return (
    <div id={props.index} className="list-item-div">
      <li className={props.completed ? "completed" : null}>{props.content}</li>

      <div className="button-div">
        <IconButton
          title="Delete"
          onClick={props.delete}
          className="delete-btn"
          aria-label="delete"
          fontSize="small"
          // sx={{
          //   "&:hover": {
          //     backgroundColor: "blueviolet",
          //     color: "#fff",
          //   },
          // }}
        >
          <DeleteIcon
            sx={{
              color: "#eee",
            }}
            fontSize="small"
          />
        </IconButton>

        <IconButton
          className="mui-done-button"
          onClick={props.done}
          title="Done"
          color="primary"
          aria-label="done"
          // sx={{
          //   "&:hover": {
          //     backgroundColor: "blueviolet",
          //     color: "#fff",
          //   },
          // }}
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
      </div>
    </div>
  );
}

export default Item;
