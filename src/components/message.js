import React, { Component } from 'react'
import './styles/message.css'

class Message extends Component {
  render() {
    return(
      <div className='Message_container'>
        <div className='Message'>New jerseys and socks have arrived. I will bring them to the game tomorrow. Please send the money to my venmo and message when you have paid.</div>
        <div className='Message_author'>Brian McKenna</div>
        <div className='Message_date'>Jan 23, 2020 3:03 PM</div>
      </div>
    )
  }
}

export default Message