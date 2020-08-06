import React from "react";
import { render } from "react-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class LoginForm extends React.Component {
  state = {
    user: "",
    password: "",
    checkbox: "",
    submit: "",
  };

  render() {
    return (
      <div>
        <Container>
          <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="#">Welcome to BagIt:</Navbar.Brand>
          </Navbar>
        </Container>
        <Form padding-bottom="100px">
          <Form.Group controlId="formBasicUser">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="user" placeholder="Enter User" />
            <Form.Text className="text-muted">
              {/* We'll never share your User with anyone else. */}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button onClick={this.handleClick} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
