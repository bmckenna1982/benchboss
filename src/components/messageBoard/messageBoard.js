import React, { Component } from 'react'
import MessagePreview from '../messagePreview/messagePreview'
import MessageService from '../services/message-service'
// import Board from '../../messageData'


class MessageBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      error: null
    }
  }
  
  componentDidMount() {
    MessageService.getMessageBoard()
    .then(data => {      
      this.setState({
        messages: data
      })
    })
  }
  
  render() {
    const messageArray = this.state.messages    
    return(
      <section className="MessageBoard">
        <h2>Message Board</h2>
        {messageArray.map((message, index) => (
          <MessagePreview key={index} message={message} />         
        ))}
      </section>
    )
  }
}

export default MessageBoard