import React, { Component } from 'react'

import Comment from '../comment/comment'
import AddComment from '../addComment/addComment'
import MessageService from '../services/message-service'
import { NiceDate } from '../../utils/utils'
import './message.css'
import MessageContext from '../contexts/messageContext'


class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {
        title: '',
        content: '',
        author: '',
        posted_date: '2020-02-10T10:24:00.000Z'

      },
      comments: [],
      addFormOpen: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ error: null })
    MessageService.getMessage(this.props.match.params.messageId)
      .then(data => {
        const formatComments = data.comments.map(com => (
          {
            id: com.id,
            content: com.content,
            posted_date: com.posted_date,
            author: com.author.full_name
          }
        ))
        this.setState({
          message: {
            id: data.message.id,
            title: data.message.title,
            content: data.message.content,
            author: data.message.author.full_name,
            posted_date: data.message.posted_date
          },
          comments: formatComments
        })
        return data.id
      })
      .catch(err => {
        this.setState({
          error: 'Unauthorized'
        })
      })
  }

  handleClick = () => {
    this.setState({
      addFormOpen: (!this.state.addFormOpen)
    })
  }

  toggleCommentForm = () => {
    this.setState({
      addFormOpen: (!this.state.addFormOpen)
    })
  }

  addComment = (newComment) => {
    const newCommentAuthorName = {
      ...newComment,
      author: newComment.author.full_name
    }
    this.setState({
      comments: [...this.state.comments, newCommentAuthorName]
    })
  }

  render() {
    const messageComments = this.state.comments
    const error = this.state.error
    let addForm

    if (this.state.addFormOpen) {
      addForm = <AddComment message_id={this.props.match.params.messageId} />
    } else {
      addForm = <button className='addComment bttn' onClick={this.toggleCommentForm}>Add Comment</button>
    }
    const contextValue = {
      message: this.state.message,
      comments: this.state.comments,
      addFormOpen: this.state.addFormOpen,
      addComment: this.addComment,
      toggleCommentForm: this.toggleCommentForm,
    }
    return (
      <MessageContext.Provider value={contextValue}>
        <div className='Message_container background_section'>
          <span className='error'>
            {error
              ? <p className='red'>{error}</p>
              : ''
            }
          </span>
          <h2 className='Message_title'>{this.state.message.title}</h2>
          <div className='Message_content'>{this.state.message.content}</div>
          <div className='Message_author'>{this.state.message.author}</div>
          <div className='Message_date'>
            <NiceDate date={this.state.message.posted_date} />
          </div>
          {addForm}
          <div className='display_comments'>
            {messageComments.map((comment, index) =>
              <Comment key={index} comment={comment} />)}
          </div>
        </div>
      </MessageContext.Provider>
    )
  }
}

export default Message