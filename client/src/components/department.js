import React from "react";
import "./style.css";
import ItemBar from "./itemBar";
import { Container } from "react-bootstrap";
function Department() {
	const array = [1, 2, 3];
	return (
		<Container id="departmentContainer">
			Department Name here!
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
