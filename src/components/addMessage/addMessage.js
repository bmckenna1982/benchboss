import React, { Component } from 'react'
import MessageService from '../services/message-service'
import MessageContext from '../contexts/messageContext'
import './addMessage.css'

class AddMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      title: ''
    }
  }

  static contextType = MessageContext

  handleChange = (event) => {
    this.setState({ content: event.target.value })
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newMessage = {
      title: this.state.title,
      content: this.state.content
    }
    MessageService.postMessage(newMessage)
      .then(res => {
        this.setState({
          content: '',
          title: ''
        })
        this.context.addMessage(res)
        return res
      })
      .then((res) => {
        this.props.history.push(`/message-board/${res.id}`)
      })
  }

  render() {
    return (
      <div className='AddMessage background_section'>
        <h2>Add a Message</h2>
        {/* <ValidationError message={this.validateName()} /> */}
        <form className='AddMessage_form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='messageTitle'>New message title:</label>
            <input type='text' name='messageTitle' value={this.state.messageTitle} onChange={this.handleTitleChange} id='messageTitle' required></input>
          </div>
          <div className='form-group'>
            <label htmlFor='messageContent'>New message content: </label>
            <textarea name='messageContent' value={this.state.message} onChange={this.handleChange} id='messageContent' rows='6' cols='45' required></textarea>
          </div>
          <button
            type='submit'
            className='AddMessage_form__submit bttn'
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default AddMessage