import React from "react";
import Department from "./department";
import AddBar from "./AddBar";

function HomePage() {
  //if LoginForm is filled out and true, proceed to homePage.js
  return (
    <div>
      <header>
        <AddBar />
      </header>
      <div>
        <Department />
      </div>
    </div>
  );
}
export default HomePage;
