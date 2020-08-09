import React from "react";
import StickyFooter from "react-sticky-footer";

const Footer = () => (
  // <footer className="bg-dark p-3 text-center ">
  //   <div className="logo" />
  //   <p className="lead">
  //     Check out our repo @{" "}
  //     <a
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       href="https://github.com/The-CallBack-Cats"
  //     >
  //       The-CallBack-Cats
  //     </a>
  //     .
  //   </p>
  // </footer>
  <StickyFooter
    bottomThreshold={0}
    normalStyles={{
      backgroundColor: "#999999",
      padding: "2rem",
    }}
    stickyStyles={{
      backgroundColor: "rgba(000)",
      padding: "2rem",
    }}
  >
    <p className="lead">
      Check out our repo @{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/The-CallBack-Cats"
      >
        The-CallBack-Cats
      </a>
      .
    </p>
  </StickyFooter>
);

export default Footer;
