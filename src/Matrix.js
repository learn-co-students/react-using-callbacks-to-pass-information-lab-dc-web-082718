import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: null
    }
  }

  // Renders cells in each row to the page
  genRow = (vals) => (
    vals.map((val, idx) => <Cell
      key={idx}
      color={val}
      getSelectedColor={this.getSelectedColor}
    />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  pickColor = (newColor) => (
    this.setState({color: newColor.target.style.backgroundColor})
  )

  getSelectedColor = () => (this.state.color)


  render() {
    return (
      <div id="app">
        <ColorSelector pickColor={this.pickColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
