import React, { Component } from 'react'
import SpinnerGif from './Dual Ring-1s-200px.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-5">
        <img src={SpinnerGif} style={{width: "100px"}} alt="Loading"/>
      </div>
    )
  }
}

export default Spinner