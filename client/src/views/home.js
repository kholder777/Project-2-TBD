// import React from "react";
// import { Route, Switch } from "react-router-dom";
// import { Container } from "react-bootstrap";
// // import Department from "../components/department";
// // import AddBar from "../components/AddBar";
// import NavBar from "../components";
// import Profile from "./profile";
// // import Department from "../components/department";
// // import Auth0ProviderWithHistory from "../auth0-provider-with-history";

// function Home() {
// 	//if LoginForm is filled out and true, proceed to homePage.js

// 	return (
// 		<div>
// 			<NavBar />
// 			<Container className="flex-grow-1 mt-5">
// 				<Switch>
// 					<Route path="/" exact component={Home} />
// 					<Route path="/profile" component={Profile} />
// 				</Switch>
// 			</Container>
// 		</div>
// 	);
// }
// export default Home;

import React, { Fragment } from "react";
import { Hero } from "../components";
import { NavBar, Footer, Loading, PrivateRoute } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/loginButton";

const Home = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Fragment>
        <Hero />
      </Fragment>
    </div>
  );
};

export default Home;
