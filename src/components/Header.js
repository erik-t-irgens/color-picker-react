import React from "react";
// import Img from "./maxresdefault.jpg";

// const styles = {
// image: {
//   backgroundImage: `url(${process.env.PUBLIC_URL}/maxresdefault.jpg)`}
// }

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={process.env.PUBLIC_URL + '/maxresdefault.jpg'} alt="cool background" />
    </React.Fragment>
  );
}

export default Header;