import React, { Component } from 'react'
import MessagePreview from '../messagePreview/messagePreview'
import Board from '../../messageData'


class MessageBoard extends Component {
  render() {
    
    return(
      <section className="MessageBoard">
        <h2>Message Board</h2>
        {Board.messages.map((message, index) => (
          <MessagePreview key={index} message={message} />         
        ))}
      </section>
    )
  }
}

export default MessageBoard