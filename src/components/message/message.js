import React, { Component } from 'react'

import Comment from '../comment/comment'
import MessageService from '../services/message-service'
import { NiceDate } from '../../utils/utils'
import './message.css'


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
        comments: []
      }
    }

  componentDidMount() {
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
          error: 'Sorry, could not get the message at this time'
        })
      })
  }

  render() {    
    const messageComments = this.state.comments
    // console.log('this.props.match.params.messageId', this.props.match.params.messageId)
    // console.log('CommentsList.comments[0].messageId', CommentsList.comments[0].messageId)
    console.log('messageComments', messageComments)
    return (
      <div className='Message_container'>
        <h2 className='Message_title'>{this.state.message.title}</h2>
        <div className='Message_content'>{this.state.message.content}</div>
        <div className='Message_author'>{this.state.message.author}</div>
        <div className='Message_date'>
          <NiceDate date={this.state.message.posted_date} />
        </div>
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