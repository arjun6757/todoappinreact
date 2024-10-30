import React, { useState, useEffect } from "react";
import Item from "./IndividualItem";
import Filter from "./Filter";

function Items(props) {
  const items = props.arr;
  const [optionBasedItems, setOptionBasedItems] = useState(items);
  const [savedOption, setSavedOption] = useState("all");
  // Update optionBasedItems whenever items prop changes
  useEffect(() => {
    setOptionBasedItems(items);
  }, [items]);

  // re-run filtering whenever item state changes meaning whenever i change the boolean of completed
  useEffect(() => {
    handleOption(savedOption);
  }, [items]);

  function handleDelete(id) {
    props.delete(id);
  }

  function handleDone(id) {
    props.done(id);
  }

  function handleEdit(id) {
    let data = items.find(i=> i.id === id);
    let obj = {content: data, id: id};
    // console.log('im in handleEdit printing data requested', obj);
    props.edit(obj);
  }

  function handleOption(option) {
    setSavedOption(option);
    if (option === "pending") {
      const newArray = items.filter((item) => item.completed === false);
      setOptionBasedItems(newArray);
    } else if (option === "completed") {
      const newArray = items.filter((item) => item.completed === true);
      setOptionBasedItems(newArray);
    } else if (option === "all") {
      setOptionBasedItems(items);
    }
  }

  return (
    <div className="items">
      <Filter array={items} getOption={handleOption} />

      {optionBasedItems.length === 0 ? (
        <span>(┬┬﹏┬┬)</span>
      ) : (
        <ul>
          {optionBasedItems.map((item) => {
            return (
              <Item
                completed={item.completed}
                key={item.id}
                content={item.content}
                done={() => handleDone(item.id)}
                delete={() => handleDelete(item.id)}
                edit={() => handleEdit(item.id)}
                index={item.id}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Items;
