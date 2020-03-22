import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GamePreview from '../gamePreview/gamePreview';
import ScheduleService from '../services/schedule-service';
import './schedule.css';

class Schedule extends Component {

  state = {
    schedule: [],
    error: null
  };

  componentDidMount() {
    ScheduleService.getSchedule()
      .then(data => {
        this.setState({
          schedule: [...data]
        });
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get the schedule at this time'
        });
      });
  }

  render() {
    const addToSchedule = this.state.admin
      ? <Link to='/add-game' className='addGame_button'>
        Add to Schedule
        </Link>
      : ''
    return (
      <section className='Schedule background_section'>
        <h2>Schedule</h2>
        {addToSchedule}
        <div className='Schedule_list'>
          {this.state.schedule.map((game, index) => (
            <GamePreview key={index} game={game} />
          ))}
        </div>
      </section>
    );
  }
}

export default Schedule;
