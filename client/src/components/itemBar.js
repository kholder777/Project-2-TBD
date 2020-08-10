import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Col, Button } from "react-bootstrap";
function ItemBar(props) {
  return (
    <Form id="ItemBar">
      {/* {props.number} */}
      {["checkbox"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Row>
            <Col>
              <Form.Check
                inline
                label="shopped"
                type={type}
                id={`inline-${type}-1`}
              />
            </Col>
            <Col>
              <p>{props.itemName}</p>
            </Col>
          </Row>
        </div>
      ))}
    </Form>
  );
}

export default ItemBar;
