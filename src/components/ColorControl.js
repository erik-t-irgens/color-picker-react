import React from 'react';
import ColorPicker from './ColorPicker';
import ColorPanel from './ColorPanel';
import ImagePanel from './ImagePanel';

class ColorControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterColorList: ["red", "green", "blue", "white", "yellow", "purple", "gray", "black"],
      currentColor: null // I need a function to change this color using some sort of color picker
    };
  }

  handleChangeCurrentActiveColor = (newColor) => {
    this.setState({ currentColor: newColor });
  }

  handleClearCurrentActiveColor = () => {
    this.setState({ currentColor: null })
  }

  handleAddNewColorToList = (newColor) => {
    this.setState({
      masterColorList: [...this.state.masterColorList, newColor]
      // this.state.masterColorList.concat(newColor)
    })
  }

  render() {
    const { masterColorList, currentColor } = this.state;
    return (
      <React.Fragment>
        <ColorPanel defaultColor="blue" mixingColor={currentColor} />
        <ColorPanel defaultColor="green" mixingColor={currentColor} />
        <ColorPanel defaultColor="red" mixingColor={currentColor} />


        <ColorPicker availableColors={masterColorList} onChangeCurrentActiveColor={this.handleChangeCurrentActiveColor}
          onClearCurrentActiveColor={this.handleClearCurrentActiveColor} />


      </React.Fragment>
    );
  }
}

export default ColorControl;

