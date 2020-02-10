import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import SchedulePreview from '../schedulePreview/schedulePreview'
import LatestMessage from '../latest-message/latest-message'


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      error: null
    }
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
          <NavLink className='message-board_link' to={'/message-board'}>
            View Message Board
          </NavLink>
          <LatestMessage />           
        </section>
      </div>
    )
  }
}

export default HomePage