import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
function ItemBar(props) {
  return (
    <Form id="ItemBar">
      {/* {props.number} */}
      {["checkbox"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Row>
            <Form.Check
              className="checkBox"
              inline
              type={type}
              id={`inline-${type}-1`}
            />
            <Col>
              <p className="indItem">{props.itemName}</p>
            </Col>
          </Row>
        </div>
      ))}
    </Form>
  );
}

export default ItemBar;
