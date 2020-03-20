import React, { Component } from 'react';
import GamePreview from '../gamePreview/gamePreview';
import ScheduleService from '../services/schedule-service';
import endOfYesterday from 'date-fns/endOfYesterday'
import './schedulePreview.css';

class SchedulePreview extends Component {

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
    const Schedule = this.state.schedule;
    const start = endOfYesterday()
    const future = Schedule.filter((g) => {
      let date = new Date(g.time).getTime()
      return (date >= start)
    })
    return (
      <ul className='SchedulePreview'>
        {future.slice(0, 3).map((game, index) => (
          <li key={game.id}>
            <GamePreview game={game} />
          </li>
        ))}
      </ul>
    );
  }
}

export default SchedulePreview;
