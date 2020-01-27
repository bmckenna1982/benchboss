import React, { Component } from 'react'
import MessagePreview from './messagePreview'
import Board from '../messageData'


class MessageBoard extends Component {
  render() {
    console.log('Board.messages', Board.messages)
    return(
      <section className="MessageBoard">
        {Board.messages.map((message, index) => (
          <MessagePreview key={index} message={message} />         
        ))}
      </section>
    )
  }
}

export default MessageBoard