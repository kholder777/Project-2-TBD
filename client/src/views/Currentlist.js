import React from "react";
import AddBar from "../components/AddBar";
// import NavBar from "../components/navBar";
import Department from "../components/department";
import Auth0ProviderWithHistory from "../auth0-provider-with-history";

function Currentlist() {
  //if LoginForm is filled out and true, proceed to homePage.js
  const array = [1];

  return (
    <div>
      <AddBar />
      <Auth0ProviderWithHistory>
        {/* //map this department */}
        {array.map((DeptArray) => {
          return <Department key={DeptArray} />;
        })}
        {/* Array of departments. Map departments too. Look into props.*/}
      </Auth0ProviderWithHistory>
    </div>
  );
}
export default Currentlist;
