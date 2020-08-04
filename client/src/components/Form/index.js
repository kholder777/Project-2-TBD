// hook for Component to start app
// login/username/whatever

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class Form extends Component {
	// Setting the component's initial state
	state = {
		userName: "",
	};

	handleInputChange = (event) => {
		// Getting the value and name of the input which triggered the change
		const { name, value } = event.target;

		// Updating the input's state
		this.setState({
			[name]: value,
		});
	};

	handleFormSubmit = (event) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();

		// Alert the user their username, clear `this.stateuserName` clearing the inputs
		alert(`Hello ${this.state.userName}`);
		this.setState({
			userName: "",
		});
	};

	render() {
		// greets user
		return (
			<div>
				{/* {<Container>
					<Navbar fixed="top" expand="lg" variant="dark" bg="dark">
						<Navbar.Brand href="#">Navbar</Navbar.Brand>
					</Navbar>
				</Container>} */}
				<p>Hello {this.state.userName}</p>
				<form className="form">
					<input
						value={this.state.userName}
						name="userName"
						onChange={this.handleInputChange}
						type="text"
						placeholder="Username"
					/>
					<button onClick={this.handleFormSubmit}>login</button>
				</form>
			</div>
		);
	}
}

export default Form;
