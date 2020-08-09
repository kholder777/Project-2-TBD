import React, { Fragment } from "react";
import { Hero } from "../components";
import { NavBar, Footer, Loading, PrivateRoute } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/loginButton";

const LandingPage = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Fragment>
        <Hero />
      </Fragment>
      <LoginButton />
    </div>
  );
};

export default LandingPage;
