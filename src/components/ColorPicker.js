import React from "react";
import PropTypes from "prop-types";


function ColorPicker(props) {

  return (
    <React.Fragment>
      {props.availableColors.map((color) =>
        <div
          style={{
            height: '20px', width: "20px", backgroundColor: color, cursor: "crosshair"
          }}

          onClick={() => props.onChangeCurrentActiveColor(color)}
        />
      )}
      <button onClick={props.onClearCurrentActiveColor}>Clear current color</button>

    </React.Fragment>
  );
}

ColorPicker.propTypes = {
  availableColors: PropTypes.array,
  onChangeCurrentActiveColor: PropTypes.func,
  onClearCurrentActiveColor: PropTypes.func
}

export default ColorPicker;