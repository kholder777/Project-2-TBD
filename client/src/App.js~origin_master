// src/App.js
import React from "react";
import HomePage from "./pages/homePage";
import FavPage from "./pages/favoritesPage";
import LoginButton from "./components/loginButton";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginButton} />
      <Route exact path="/fav" component={FavPage} />
    </Router>
  );
}

export default App;
