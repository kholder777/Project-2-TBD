import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";

function AddBar() {
	return (
		<header>
			<Form.Control type="text" placeholder="Add Item" />
		</header>
	);
	//use state hook to keep track of value in input and use it!
	// (use effect hook as well as some others cases)
}
// drop down to grab categories from table when they add item
export default AddBar;

// class component is good for managing state
// function component used for presentation purposes mostly.
// function component use HOOKS.
