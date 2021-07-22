import React from 'react';
import ColorPicker from './ColorPicker';
import ColorPanel from './ColorPanel';
import ImagePanel from './ImagePanel';

class ColorControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterColorList: ["red", "green", "blue", "white", "yellow", "purple", "gray", "black"],
      currentColor: null
    };
  }

  handleChangeCurrentActiveColor = (newColor) => {
    this.setState({
      currentColor: newColor
    })
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
        <ColorPanel defaultColor="yellow" mixingColor={currentColor} />
        <ColorPanel defaultColor="red" mixingColor={currentColor} />
        <ColorPanel defaultColor="purple" mixingColor={currentColor} />
        <ColorPanel defaultColor="gray" mixingColor={currentColor} />


        <ColorPicker availableColors={masterColorList} onColorChange={this.handleChangeCurrentActiveColor} onClearColor={this.handleClearCurrentActiveColor} />

        <ImagePanel filterColor={currentColor} />

      </React.Fragment>
    );
  }
}

export default ColorControl;

