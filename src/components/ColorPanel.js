import React from "react";
import PropTypes from "prop-types";

function ColorPanel(props) {

  // Style objects! :) 
  const mainCurrentStyles = {
    backgroundColor: props.defaultColor,
    width: "200px",
    height: "200px",
    zIndex: -1,
    position: "absolute",
    right: "50%", left: "50%"
  }

  const mixStyles = {
    backgroundColor: props.mixingColor,
    width: "200px",
    height: "200px",
    zIndex: 0,
    position: "absolute",
    opacity: 0.5, right: "50%", left: "50%"
  }
  return (
    <React.Fragment>
      <div>
        <p>Current Primary Color: {props.defaultColor}</p>
        <p>Current Mixing Color: {props.mixingColor}</p>

        {/* color panels themselves! */}
        <div style={mainCurrentStyles}></div>
        <div style={mixStyles}></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </React.Fragment>
  );
}

ColorPanel.propTypes = {
  defaultColor: PropTypes.string,
  mixingColor: PropTypes.string,
}

export default ColorPanel;