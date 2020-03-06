// import config from '../../config'
import React, { Component } from "react";
import GamePreview from "../gamePreview/gamePreview";
import ScheduleService from "../services/schedule-service";
import startOfYesterday from 'date-fns/startOfYesterday'
import "./schedulePreview.css";

class SchedulePreview extends Component {
  // constructor(props) {
  //   super(props)
  state = {
    schedule: [],
    error: null
  };
  // }

  componentDidMount() {
    ScheduleService.getSchedule()
      .then(data => {
        // console.log("data", data);
        this.setState({
          schedule: [...data]
        });
      })
      .catch(err => {
        this.setState({
          error: "Sorry, could not get the schedule at this time"
        });
      });
  }

  render() {
    const Schedule = this.state.schedule;
    // const start = new Date().getTime()
    const start = startOfYesterday()
    console.log('start', start)
    console.log('schedule', Schedule)
    const future = Schedule.filter((g) => {
      let date = new Date(g.time).getTime()
      console.log('date', date)
      return (date >= start)
    })
    // const future = Schedule.filter(g => new Date(g.time) >= start)
    console.log('future', future)
    return (
      <ul className="SchedulePreview">
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
