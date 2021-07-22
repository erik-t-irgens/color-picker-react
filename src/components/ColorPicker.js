import React from "react";
import PropTypes from "prop-types";


function ColorPicker(props) {

  // state { myStyles: {height:, width,} }

  // method to change this state
  // I would only call those methods, or reference this state WITHIN THIS COMPONENT ONLY

  return (
    <React.Fragment>
      <div >
        {props.availableColors.map((color) =>
          <div
            style={{
              height: '20px', width: '20px', backgroundColor: color
            }}
            onClick={() => props.onColorChange(color)}
          />
        )}
        <button onClick={props.onClearColor}>Clear Color!</button>
      </div>
    </React.Fragment>
  );
}

ColorPicker.propTypes = {
  onColorChange: PropTypes.func,
  onClearColor: PropTypes.func,
  availableColors: PropTypes.array
}

export default ColorPicker;