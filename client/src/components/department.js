import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../utils/API";
import ItemBar from "./itemBar";
import { Container } from "react-bootstrap";

function Department() {
	var itemsArray = [];
	const array = [1, 2, 3];
	const [result] = useState(0);
	useEffect(() => {
		API.getAllItems()
			.then((res) => itemsArray.push(res.data.items))
			.catch((err) => console.log(err));
	}, [result]);
	console.log(itemsArray);
	return (
		<Container id="departmentContainer">
			<h4>Department Name here!</h4>
			{/* needs to know based on what the user picks in the drop down */}
			{/* {DepartmentName} here... with hook? */}
			{array.map((item) => {
				return <ItemBar />;
			})}
		</Container>
	);
}

export default Department;
// use loop to render multiple ItemBar.
