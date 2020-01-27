import React, { Component } from 'react'
import CommentList from '../commentData'
import './styles/message.css'

class MessagePreview extends Component {
  render() {
    console.log('this.props', this.props)
    const commentCount = CommentList.comments.filter(comment => comment.messageId === this.props.message.id).length
    console.log('commentCount', commentCount)
    return(
      <div className='Message_container'>
        <div className='Message_title'>{this.props.message.title}</div>
        <div className='Message_author'>{this.props.message.author}</div>
        <div className='Message_date'>{this.props.message.postedDate}</div>
        <div className='comment_icon'>
          {commentCount}
        </div>
      </div>
    )
  }
}

export default MessagePreview