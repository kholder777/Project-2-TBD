import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";

class SearchBar extends React.Component {
	render() {
		return (
			<Form.Control type="text" placeholder="Readonly input here..." readOnly />
		);
	}
}
export default SearchBar;
