import React, { Component } from 'react'
import Board from '../../messageData'
import CommentsList from '../../commentData'
import Comment from './comment'
import './styles/message.css'

class Message extends Component {
  render() {    
    const messageComments = CommentsList.comments.filter(comment => comment.messageId == this.props.match.params.messageId)
    console.log('this.props.match.params.messageId', this.props.match.params.messageId)
    console.log('messageComments', messageComments)
    return (
      <div className='Message_container'>
        <h2 className='Message_title'>{Board.messages[this.props.match.params.messageId - 1].title}</h2>
        <div className='Message_content'>{Board.messages[this.props.match.params.messageId - 1].content}</div>
        <div className='Message_author'>{Board.messages[this.props.match.params.messageId - 1].author}</div>
        <div className='Message_date'>{Board.messages[this.props.match.params.messageId - 1].postedDate}</div>
        {/* <div>
          {Board.messages[this.props.match.params.messageId - 1]}
        </div> */}
        <button className='addComment'>Add Comment</button>
        <div>
          {messageComments.map((comment, index) =>
            <Comment key={index} comment={comment} />)}
        </div>
      </div>
    )
  }
}

export default Message