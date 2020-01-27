import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import compareAsc from 'date-fns/compareAsc'
import SchedulePreview from './schedulePreview'
import MessagePreview from './messagePreview'
import Comment from './comment'
import Board from '../messageData'
import CommentList from '../commentData'

class HomePage extends Component {
  findLastMessage() {    
    var mostRecentDate = Math.max.apply(null, Board.messages.map( e => {
      return new Date(e.postedDate);
   }));
    console.log('mostRecentDate', mostRecentDate)
    const mostRecentMessage = new Date(Math.max.apply(null, Board.messages.map( game => new Date(game.postedDate))));
    const mostRecentComment = new Date(Math.max.apply(null, CommentList.comments.map( comment => new Date(comment.postedDate))));
    
    const lastMessage = mostRecentMessage > mostRecentComment
      ? mostRecentMessage
      : mostRecentComment

    console.log('lastMessage', lastMessage)
    return lastMessage
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
          <h2>Message Board</h2>
          <div className='latest-message'>
            <h3>Latest message board activity</h3>
            <MessagePreview message={this.findLastMessage()}/>
            <Comment />
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage