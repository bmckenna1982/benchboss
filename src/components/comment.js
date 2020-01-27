import React, { Component } from 'react'
import './styles/comment.css'

class Comment extends Component {
  render() {
    return(
      <div className='Comment_container'>
        <div className='Comment'>Sent to your venmo</div>
        <div className='Comment_author'>Nick Bertasi</div>
        <div className='Comment_date'>Jan 23, 2020 3:05 PM</div>
      </div>
    )
  }
}

export default Comment