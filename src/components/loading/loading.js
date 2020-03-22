import React, { Component } from 'react'
import './loading.css'

class Loading extends Component {
  render() {
    return (
      <div class='Loading'>
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default Loading