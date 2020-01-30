import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CommentList from '../commentData'
import { NiceDate } from './utils'
import './styles/messagePreview.css'


class MessagePreview extends Component {
  
  render() {
    const commentCount = CommentList.comments.filter(comment => comment.messageId === this.props.message.id).length

    return (
      <div className='MessagePreview_container'>
        <Link to={`/message-board/${this.props.message.id}`}>
          <div className='MessagePreview_title'>{this.props.message.title}</div>
          <div className='MessagePreview_author'>{this.props.message.author}</div>
          <div className='MessagePreview_date'>
            <NiceDate date={this.props.message.postedDate} />
          </div>          
        </Link>
        <div className='comment_icon'>
            {commentCount}
        </div>
      </div>
    )
  }
}

export default MessagePreview