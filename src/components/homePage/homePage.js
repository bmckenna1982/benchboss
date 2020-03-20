import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SchedulePreview from '../schedulePreview/schedulePreview';
import LatestMessage from '../latest-message/latest-message';
import './homePage.css'

class HomePage extends Component {

  render() {
    return (
      <div className='HomePage background_section'>
        <section className='schedule'>
          <h2>Upcoming Games</h2>
          <SchedulePreview />
          <Link className='schedule_link' to={'/schedule'}>
            <button className='bttn' >View Complete Schedule</button>
          </Link>
        </section>
        <section className='message-board'>
          <h2>Latest Message Activity</h2>
          <LatestMessage />
          <Link className='message-board_link' to={'/message-board'}>
            <button className='bttn' >View Message Board</button>
          </Link>
        </section>
      </div>
    );
  }
}

export default HomePage;
