import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import { NavBar, Footer, Loading, PrivateRuate } from "./components";
import { Home, Profile, ExternalApi, Currentlist } from "./views";
import { useAuth0 } from "@auth0/auth0-react";

import "./app.css";

const App = () => {
	const { isLoading } = useAuth0();
	if (isLoading) {
		return <Loading />;
	}

	return (
		<div id="app" className="d-flex flex-column h-100">
			<NavBar />
			<Container className="flex-grow-1 mt-5">
				<Switch>
					{/* <PrivateRuate path="/" exact component={Currentlist} /> */}
					<Route path="/" exact component={Home} />
					<PrivateRuate path="/profile" component={Profile} />
					<Route path="/external-api" component={ExternalApi} />
					<PrivateRuate path="/currentlist" component={Currentlist} />
				</Switch>
			</Container>
			<Footer />
		</div>
	);
};

export default App;

// // src/App.js
// import React from "react";
// import HomePage from "./views/home";

// function App() {
// 	return (
// 		<div>
// 			<HomePage />
// 		</div>
// 	);
// }

// export default App;
