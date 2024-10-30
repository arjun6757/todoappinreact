import React, { useState } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Input from "./components/Input";
import ClearButton from "./components/ClearInput";
import AddButton from "./components/AddButton";
import Items from "./components/Items";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../LocalStorage";

function App() {
  const [readyCIBtn, setReadyCIBtn] = useState(false);
  const [input, setInput] = useState("");
  // const [items, setItems] = useState([]); used previously
  const [items, setItems] = useLocalStorage("tasks", []);

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
      // console.log("adding item with following properties: ", updatedArray);
      return updatedArray;
    });
    setInput("");
    setReadyCIBtn(false);
    event.target.blur(); //remove focus from the button
  }

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
    // console.log("data on handleEdit app.jsx", data);
    setEditClicked(true);
    // console.log(data.content.id);
    setTextAreaValue({
      content: data.content.content,
      id: data.id,
    });
  }

  function handleSave(id) {
    setItems((prev) => {
      return prev.map((item) =>
        item.id === id
          ? {
              ...item,
              content: textareaValue.content,
            }
          : item
      );
    });
    setEditClicked(false);
  }

  return (
    <div className="container">
      <div className="todoList">
        <Heading />

        <div className="main">
          <form>
            <div className="input-div">
              <Input
                set={setInput}
                ready={setReadyCIBtn}
                in={input}
                ph={"Enter your task here..."}
              />

              <ClearButton ready={readyCIBtn} clear={clearInput} />
            </div>

            {input.length === 0 ? (
              <span className="emoji-on-add">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-keyboard"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                  <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25z" />
                </svg>
              </span>
            ) : (
              <AddButton add={onAdd} />
            )}
          </form>
        </div>
      </div>

      <Items
        arr={items}
        done={doneWithId}
        delete={deleteWithId}
        edit={handleEdit}
      />

      <Footer />
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
  );
}

export default App;
