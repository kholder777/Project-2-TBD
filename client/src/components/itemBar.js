import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Col, Button } from "react-bootstrap";
function ItemBar(props) {
	return (
		<Form id="ItemBar">
			{props.number}
			{["radio"].map((type) => (
				<div key={`inline-${type}`} className="mb-3">
					<Row>
						<Col>
							<Form.Check
								inline
								label="check-off"
								type={type}
								id={`inline-${type}-1`}
							/>
						</Col>
						<Col>
							{/* maybe need to use dbitems? */}
							<p>INSERT PROPS CALL FOR ITEM NAME HERE</p>
						</Col>
						{/* don't need both the fav check and the star button */}
						<Col>
							<Form.Check
								inline
								label="Fav"
								type={type}
								id={`inline-${type}-2`}
							/>
							<Button>
								{/* when clicked, selected item must be copied to fav list and also button color must change to yellow. */}
								<svg
									width="3em"
									height="3em"
									viewBox="0 0 16 16"
									className="bi bi-star"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
									/>
								</svg>
							</Button>
						</Col>
					</Row>
				</div>
			))}
		</Form>
	);
}

export default ItemBar;
