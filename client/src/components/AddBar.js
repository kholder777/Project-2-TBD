import React, { useState } from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";

function AddBar(props) {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <header>
      <Form.Control
        type="text"
        placeholder="Add Item"
        name="item"
        value={props.item}
        onChange={props.changeText}
      />
      <Button id="addItemButt" onClick={props.handleSave}>
        Add Item
      </Button>

      <select
        name="dropDownValue"
        id="dropDown"
        value={props.dropDownValue}
        onChange={props.changeValue}
      >
        {props.categories.length > 0
          ? props.categories.map((category) => {
              return (
                <option key={category.id}>
                  {category.id + " " + category.category_name}
                </option>
              );
            })
          : ""}
      </select>
    </header>
  );
}

export default AddBar;
