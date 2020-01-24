import React, { Component } from 'react'
import SchedulePreview from './schedulePreview'
import Message from './message'
import Comment from './comment'

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <section className="schedule">
          <h2>Upcoming Games</h2>          
          <SchedulePreview />
        </section>
        <section className="message-board">
          <h2>Message Board</h2>
          <div className="latest-message">
            <h3>Latest message board activity</h3>
            <Message />
            <Comment />
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage