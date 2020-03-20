import React, { Component } from 'react'
import './loading.css'

class Loading extends Component {
  render() {
    return (
      <div class='puck'>
        <div class='bottom'></div>
        <div class='middle'></div>
        <div class='top'></div>
      </div>
    )
  }
}

export default Loading