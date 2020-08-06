import React from "react";
import "./style.css";
import ItemBar from "./itemBar";
import { Container } from "react-bootstrap";
function Department() {
	const array = [1, 2, 3];
	return (
		<Container>
			{array.map((item) => {
				return <ItemBar number={item} />;
			})}
		</Container>
	);
}

export default Department;
// use loop to render multiple ItemBar.
