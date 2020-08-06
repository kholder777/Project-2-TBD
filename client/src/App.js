import React from "react";
import LoginForm from "./components/loginForm";
import { render } from "react-dom";
import HomePage from "./pages/homePage";

//setup react router routes.
function App() {
	// maybe use dbuser to verify?
	//if LoginForm is filled out and true, proceed to homePage.js
	return (
		<div>
			<HomePage />
		</div>
	);
}
export default App;
