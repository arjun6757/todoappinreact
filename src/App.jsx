import React, { useState } from "react";
import Heading from "./components/Heading";
import Input from "./components/Input";
import ClearButton from "./components/ClearInput";
import AddButton from "./components/AddButton";
import Items from "./components/Items";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../LocalStorage";
import LoadingSpinner from "./components/Loading";
import "./index.css";

function App() {
  const [readyCIBtn, setReadyCIBtn] = useState(false);
  const [input, setInput] = useState("");
  const [items, setItems] = useLocalStorage("tasks", []);
  const [loading, setLoading] = useState(false);

  const [editClicked, setEditClicked] = useState(false);
  const [textareaValue, setTextAreaValue] = useState({
    content: "",
    id: "",
  });

  function clearInput(event) {
    event.preventDefault();
    setInput("");
    setReadyCIBtn(false);
  }

  function onAdd(event) {
    event.preventDefault();

    setItems((prev) => {
      const itemValue = {
        content: input,
        id: uuidv4(),
        completed: false,
      };
      const updatedArray = [...prev, itemValue];
      console.log("adding item with following properties: ", updatedArray);
      return updatedArray;
    });
    setInput("");
    setReadyCIBtn(false);
    event.target.blur(); //remove focus from the button
    // setLoading(false); it's working too fast so there's no scope
  }

  /* need to have five level of importance 
  regular(1), slightly(2), important(3), fairly(4), largely(5)
  will settle with 3 hehehe
  */

  // function checkImp() {
  //   const splitText = input.split(" ");
  //   if (splitText.includes("!important")) {
  //     return 3;
  //   } else if (splitText.includes("!slightly")) {
  //     return 2;
  //   } else if (splitText.includes("!fairly")) {
  //     return 4;
  //   } else if (splitText.includes("!largely")) {
  //     return 5;
  //   } else if (splitText.includes("!regular")) {
  //     return 1;
  //   }
  // }

  function deleteWithId(id) {
    setItems((prev) => {
      const newArray = prev.filter((item) => item.id !== id);
      return newArray;
    });
  }

  function doneWithId(id) {
    setItems((prev) => {
      return prev.map(
        (item) =>
          item.id === id
            ? { ...item, completed: item.completed ? false : true }
            : item // this will detect the item with same id and will set only the 'completed' attribute to 'true' and if it doesn't match given id then it will return it's original value
      );
    });
  }

  function handleEdit(data) {
    setEditClicked(true);
    setTextAreaValue({
      content: data.content.content,
      id: data.id,
    });
  }

  function handleSave(id) {
    let typed = textareaValue.content;
    setItems((prev) => {
      return prev.map((item) =>
        item.id === id
          ? {
              ...item,
              content: typed,
            }
          : item
      );
    });
    setEditClicked(false);
  }

  function handleChangeImportance(id, value) {
    setItems((prev) => {
      return prev.map((item) => {
        const obj = { ...item, importance: parseInt(value) };
        return item.id === id ? obj : item;
      });
    });
  }

  return (
    <div className="bg-gray-950 flex justify-center py-8 px-25 min-h-screen p-4">
      <div className="container flex flex-col items-center">
        <div className="todoList bg-gray-900 w-full sm:w-[50vw] p-6 flex flex-col rounded-lg gap-5">
          <Heading />

          <div className="main relative">
            <form>
              <div className="input-div w-full h-10 relative bg-gray-800 rounded-lg">
                <Input
                  set={setInput}
                  ready={setReadyCIBtn}
                  in={input}
                  ph={"Enter your task here..."}
                />

                {/* <ClearButton ready={readyCIBtn} clear={clearInput} /> */}
              </div>

              <AddButton add={onAdd} content={input} />
            </form>
          </div>
        </div>

        <Items
          arr={items}
          done={doneWithId}
          delete={deleteWithId}
          edit={handleEdit}
          handleImportance={handleChangeImportance}
          setSpin={(boolean) => setLoading(boolean)}
        />

        {editClicked ? (
          <div className="edit-form">
            <textarea
              autoFocus
              name="textarea"
              value={textareaValue.content}
              onChange={(e) => {
                setTextAreaValue((prev) => ({
                  ...prev,
                  content: e.target.value,
                }));
              }}
            />
            <div className="edit-button-div">
              <button
                onClick={() => setEditClicked(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleSave(textareaValue.id);
                }}
                className="save-btn"
              >
                Save
              </button>
            </div>
          </div>
        ) : null}
      </div>
      {loading ? <LoadingSpinner /> : null}
    </div>
  );
}

export default App;
