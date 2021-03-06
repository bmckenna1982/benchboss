import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MessagePreview from '../messagePreview/messagePreview'
import MessageService from '../services/message-service'
import MessageContext from '../contexts/messageContext'



class MessageBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      error: null,
      addFormOpen: false,
    }
  }

  static contextType = MessageContext

  componentDidMount() {
    MessageService.getMessageBoard()
      .then(data => {
        this.setState({
          messages: data
        })
      })
  }

  toggleMessageForm = () => {
    this.setState({
      addFormOpen: (!this.state.addFormOpen)
    })
  }

  addMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, message]
    })
  }

  render() {
    const contextValue = {
      message: this.state.message,
      comments: this.state.comments,
      addFormOpen: this.state.addFormOpen,
      toggleCommentsForm: () => { },
      addComments: () => { },
      toggleMessageForm: () => { },
      addMessage: () => { }
    }

    const messageArray = this.state.messages
    return (
      <MessageContext.Provider value={contextValue}>
        <section className='MessageBoard background_section'>
          <h2>Message Board</h2>
          <Link to='/add-message'>
            <button className='addMessage bttn'>Add Message</button>
          </Link>
          {messageArray.map((message, index) => (
            <MessagePreview key={index} message={message} />
          ))}
        </section>
      </MessageContext.Provider>
    )
  }
}

export default MessageBoard