import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = (e) => {
    const newColor = this.props.getSelectedColor()
    this.setState({
      color: newColor
    })
    console.log(newColor)
    console.log(this.state)
  }

  render() {
    return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
