import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";

class AddBar extends React.Component {
  render() {
    return (
      <Form.Control type="text" placeholder="Readonly input here..." readOnly />
    );
  }
}
// drop down to grab categories from table when they add item
export default AddBar;
