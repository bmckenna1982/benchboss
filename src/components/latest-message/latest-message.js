import React, { Component } from 'react';
import Comment from '../comment/comment';
import MessagePreview from '../messagePreview/messagePreview';
import MessageService from '../services/message-service';
import TokenService from '../services/token-service'
import './latest-message.css'

class LatestMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        id: 1,
        author: {
          full_name: ''
        },
        posted_date: '2020-02-07T16:48:00.000Z'
      },
      comment: {
        posted_date: '2020-02-07T16:48:00.000Z'
      },
      error: null
    };
  }

  componentDidMount() {
    MessageService.getLatestMessage()
      .then(data => {
        //if no comments exist then set state to null for comments
        const newComment = (!data.comment)
          ? null
          : { ...data.comment, author: data.comment.author.full_name }

        this.setState({
          message: data.message,
          comment: newComment
        });
      })
      .then(() => {
        document.getElementById('MessagePreview').classList.remove('raised')
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get the messages at this time'
        });
      });

  }

  render() {
    // const latestComment = (!this.state.comment)
    //   ? <div className='noComment_container'>
    //     This message has no comments at this time
    //   </div>
    //   : <Comment comment={this.state.comment} />
    const latestComment = (!this.state.comment)
      ? <div className='noComment_container'>
        This message has no comments at this time
      </div>
      : TokenService.hasAuthToken()
        ? <Comment comment={this.state.comment} />
        : <div className='noComment_container'>
          You must login to view comments
      </div>

    return (
      <div className='latest-message raised'>
        <MessagePreview message={this.state.message} />
        {latestComment}
      </div>
    );
  }
}

export default LatestMessage;
