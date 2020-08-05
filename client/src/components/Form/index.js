// hook for Component to start app
// login/username/whatever

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginForm from "./LoginForm";

// class UserSignup extends Component {
// 	// Setting the component's initial state
// 	state = {
// 		userName: "",
// 	};

// 	handleInputChange = (event) => {
// 		// Getting the value and name of the input which triggered the change
// 		const { name, value } = event.target;

// 		// Updating the input's state
// 		this.setState({
// 			[name]: value,
// 		});
// 	};

// 	handleFormSubmit = (event) => {
// 		// Preventing the default behavior of the form submit (which is to refresh the page)
// 		event.preventDefault();

// 		// Alert the user their username, clear `this.stateuserName` clearing the inputs
// 		alert(`Hello ${this.state.userName}`);
// 		this.setState({
// 			userName: "",
// 		});
// 	};
// 	class;
// 	render() {
// 		// greets user
// 		return <LoginForm />;
// 	}
// }

// export default Form;
