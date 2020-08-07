import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-bvb5jton.us.auth0.com"
    clientId="Ot86tbijaCqs37Ezh7db0TV1C3Om9rbr"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

export default Auth0Provider;
