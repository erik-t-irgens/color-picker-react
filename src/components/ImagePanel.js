import React from "react";
import PropTypes from "prop-types";

function ImagePanel(props) {

  // The styling for the main image or color in our component
  const mainCurrentStyles = {
    backgroundImage: "url(http://placekitten.com/200/200)",
    width: "200px",
    height: "200px",
    zIndex: -1,
    position: "absolute",
    right: "50%", left: "50%"
  }

  // Mix style is for the box that lives ontop of the main image, and has translucency and contains a color to mix ontop of the main one
  const mixStyles = {
    backgroundColor: props.filterColor,
    width: "200px",
    height: "200px",
    zIndex: 0,
    position: "absolute",
    opacity: 0.5, right: "50%", left: "50%"
  }
  return (
    <React.Fragment>

      <div style={mainCurrentStyles}></div>
      <div style={mixStyles}></div>

    </React.Fragment >
  )

}

ImagePanel.propTypes = {



}

export default ImagePanel;