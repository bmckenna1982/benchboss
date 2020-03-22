import React, { Component } from 'react'
import './loading.css'

class Loading extends Component {
  render() {
    return (
      <div className='Loading'>
        <div className="lds-ring">
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