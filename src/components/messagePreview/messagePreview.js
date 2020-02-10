import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MessageService from '../services/message-service'
import CommentList from '../../commentData'
import { NiceDate } from '../../utils/utils'
import './messagePreview.css'


class MessagePreview extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     message: 
  //       {
  //           id: 1,
  //           title: 'title',
  //           author: {
  //             full_name: 'full name'
  //           },
  //           posted_date: '2020-02-07T10:45:00.000Z',
  //           number_of_comments: 1
  //         }
  //     ,
  //     error: null
  //   }
  // }

  // componentDidMount() {
  //   MessageService.getLatestMessage()
  //     .then(data => {
  //       console.log('latest', data)
  //       this.setState({
  //         message: data
  //       })
  //     })
  //     .catch(err => {
  //       this.setState({
  //         error: 'Sorry, could not get the messages at this time'
  //       })
  //     })
  // }

  render() {
    // const commentCount = CommentList.comments.filter(comment => comment.messageId === this.props.message.id).length
    
    console.log('this.props.message', this.props.message)
    return (
      <div className='MessagePreview_container'>
        <Link to={`/message-board/${this.props.message.id}`}>
          <div className='MessagePreview_title'>{this.props.message.title}</div>
          <div className='MessagePreview_author'>{this.props.message.author.full_name}</div>
          <div className='MessagePreview_date'>
            <NiceDate date={this.props.message.posted_date} />
          </div>
        </Link>
        <div className='comment_icon'>
          {/* {commentCount} */}
          {this.props.message.number_of_comments}
        </div>
      </div>
    )
  }
}

MessagePreview.defaultProps = {
  message: {
    id: 1,
    title: 'title',
    author: {
      full_name: 'full name'
    },
    posted_date: '2020-02-07T10:45:00.000Z',
    number_of_comments: 1
  }
}

export default MessagePreview