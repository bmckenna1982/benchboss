import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import CommentService from '../services/comment-service'
import MessageContext from '../contexts/messageContext'

class AddComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  static contextType = MessageContext

  handleChange = (event) => {
    this.setState({ content: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newComment = {
      message_id: this.props.message_id,
      content: this.state.content
    }
    CommentService.postComment(newComment)
      .then(res => {
        this.setState({ content: '' })
        this.context.toggleCommentForm()
        this.context.addComment(res)
      })
  }

  render() {
    return (
      <div className="AddComment">
        <h2>Add a Comment</h2>
        {/* <ValidationError message={this.validateName()} /> */}
        <form className='AddComment_form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='commentContent'>New comment content: </label>
            <textarea name='commentContent' value={this.state.comment} onChange={this.handleChange} id='commentContent' rows='6' cols='45' required></textarea>
          </div>
          <button
            type='submit'
            className='AddComment_form__submit'
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default AddComment