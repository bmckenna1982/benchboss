import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MessagePreview from '../messagePreview/messagePreview'
import AddMessage from '../addMessage/addMessage'
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
    let addForm

    if (this.state.addFormOpen) {
      addForm = <AddMessage message_id={this.props.match.params.messageId} />
    } else {
      addForm = <button className='addMessage' onClick={this.toggleMessageForm}>Add Message</button>
    }
    const messageArray = this.state.messages
    return (
      <MessageContext.Provider value={contextValue}>
        <section className="MessageBoard">
          <h2>Message Board</h2>
          {/* {addForm} */}
          <Link to='/add-message'>
            <button className='addMessage'>Add Message</button>
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