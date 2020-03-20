import React, { Component } from 'react'
import MessageService from '../services/message-service'
import Comment from '../comment/comment'

class LatestComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: {
        id: 1,
        content: '',
        author: '',
        posted_date: '2020-02-07T16:48:00.000Z'
      },
      error: null
    }
  }

  componentDidMount() {
    MessageService.getLatestComment(this.props.messageId)
      .then(data => {
        this.setState({
          comment: data
        })
      })

      .catch(err => {
        this.setState({
          error: 'Sorry, could not get the messages at this time'
        })
      })
  }

  render() {
    return (
      <Comment comment={this.state.comment} />
    )
  }
}

export default LatestComment