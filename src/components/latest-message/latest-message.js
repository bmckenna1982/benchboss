import React, { Component } from 'react'
import Comment from '../comment/comment'
import MessageService from '../services/message-service'
import MessagePreview from '../messagePreview/messagePreview'

class LatestMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {
        id: 1,
        author: {
          full_name: '',
        },
        posted_date: '2020-02-07T16:48:00.000Z',
      },
      comment: {
        posted_date: '2020-02-07T16:48:00.000Z'
      },
      error: null
    }
  }

  componentDidMount() {
    MessageService.getLatestMessage()
      .then(data => {
        console.log('latestMessage', data)
        this.setState({
          message: data.message,
          comment: {
            id: data.comment.id,
            content: data.comment.content,
            posted_date: data.comment.posted_date
          },
          comm_author: data.comment.author
        })
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get the messages at this time'
        })
      })
  }

  render() {
    console.log('this.state.comment', this.state.comment)
    return (
      <div className='latest-message'>
        <MessagePreview message={this.state.message} />
        <Comment comment={this.state.comment} />
      </div>
    )
  }
}

export default LatestMessage