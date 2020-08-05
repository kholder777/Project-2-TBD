import React from "react";
import "./style.css";
import ItemBar from "./itemBar";
import { Container } from "react-bootstrap";
class Department extends React.Component {
	render() {
		return (
			<Container>
				<ItemBar />
			</Container>
		);
	}
}

export default Department;
