import React from "react";
import LoginForm from "./components/Form/loginForm";
import { render } from "react-dom";
import HomePage from "./components/Form/homePage";
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
