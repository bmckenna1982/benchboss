import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SchedulePreview from '../schedulePreview/schedulePreview'
import MessagePreview from '../messagePreview/messagePreview'
import Comment from '../comment/comment'
import MessageService from '../services/message-service'
import Board from '../../messageData'
import CommentList from '../../commentData'
import LatestMessage from '../latest-message/latest-message'


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      error: null
    }
  }
  // findLastMessage() {    
  //   var mostRecentDate = Math.max.apply(null, Board.messages.map( e => {
  //     return new Date(e.postedDate);
  //  }));
  //   console.log('mostRecentDate', mostRecentDate)
  //   const mostRecentMessage = new Date(Math.max.apply(null, Board.messages.map( game => new Date(game.postedDate))));
  //   const mostRecentComment = new Date(Math.max.apply(null, CommentList.comments.map( comment => new Date(comment.postedDate))));
    
  //   const lastMessage = mostRecentMessage > mostRecentComment
  //     ? mostRecentMessage
  //     : mostRecentComment

  //   console.log('lastMessage', lastMessage)
  //   return lastMessage
  // }
  
componentDidMount() {
  // MessageService.getMessageBoard()
  //   .then(data => {
  //     console.log('data', data)
  //     this.setState({
  //       messages: [
  //         ...data
  //       ]
  //     })
  //   })
  //   .catch(err => {
  //     this.setState({
  //       error: 'Sorry, could not get the messages at this time'
  //     })
  //   })    
  console.log('mounted')
  
}

  render() {
    return (
      <div className='HomePage'>
        <section className='schedule'>
          <h2>Upcoming Games</h2>
          <NavLink className='schedule_link' to={'/schedule'}>
            View Complete Schedule
          </NavLink>

          <SchedulePreview />
        </section>
        <section className='message-board'>
          <h2>Latest Message Activity</h2>
          <NavLink className='schedule_link' to={'/message-board'}>
            View Message Board
          </NavLink>
          <LatestMessage /> 
          {/* <div className='latest-message'>            
            <MessagePreview message={this.state.messages[2]}/>
            <Comment comment={CommentList.comments[3]}/>
          </div> */}
        </section>
      </div>
    )
  }
}

export default HomePage