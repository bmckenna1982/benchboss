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
    console.log('this.props', this.props)
    MessageService.getMessage(this.props.match.params.messageId)
      .then(data => {
        console.log('data', data)
        const formatComments = data.comments.map(com => (
          {
            id: com.id,
            content: com.content,
            posted_date: com.posted_date,
            author: com.author.full_name
          }
        ))
        console.log('formatComments', formatComments)
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
    // e.preventdefault()
    console.log('this.state.addFormOpen', this.state.addFormOpen)
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
    console.log('error', error)
    // console.log('this.props.match.params.messageId', this.props.match.params.messageId)
    // console.log('CommentsList.comments[0].messageId', CommentsList.comments[0].messageId)
    console.log('messageComments', messageComments)
    if (this.state.addFormOpen) {
      addForm = <AddComment message_id={this.props.match.params.messageId} />
    } else {
      addForm = <button className='addComment' onClick={this.handleClick}>Add Comment</button>
    }
    const contextValue = {
      message: this.state.message,
      comments: this.state.comments,
      addFormOpen: this.state.addFormOpen,
      addComment: this.addComment,
      toggleCommentForm: this.toggleCommentForm,
    }
    console.log('this.state.message.posted_date', this.state.message.posted_date)
    return (
      <MessageContext.Provider value={contextValue}>
        <div className='Message_container'>
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
          {/* <div>
          {Board.messages[this.props.match.params.messageId - 1]}
        </div> */}
          {addForm}
          {/* <button className='addComment' onClick={this.handleClick}>Add Comment</button> */}
          <div>
            {messageComments.map((comment, index) =>
              <Comment key={index} comment={comment} />)}
          </div>
        </div>
      </MessageContext.Provider>
    )
  }
}



export default Message