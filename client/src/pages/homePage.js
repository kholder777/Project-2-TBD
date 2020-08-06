import React from "react";
import Department from "../components/department";
import AddBar from "../components/AddBar";

function HomePage() {
	//if LoginForm is filled out and true, proceed to homePage.js
	return (
		<div>
			<AddBar />
			<Department />
			{/* array of departments. 
      map departments too.
      Look into props.*/}
		</div>
	);
}
export default HomePage;
