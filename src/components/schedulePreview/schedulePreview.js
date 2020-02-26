// import config from '../../config'
import React, { Component } from "react";
import GamePreview from "../gamePreview/gamePreview";
import ScheduleService from "../services/schedule-service";
// import Schedule from '../../scheduleData'
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
    // fetch(`${config.API_ENDPOINT}/schedule`, {
    //   headers: {
    //     Authorization: `Bearer ${config.API_KEY}`
    //   },
    //   method: 'GET',
    // })
    // .then(res => {
    //   if (!res.ok) {
    //     throw new Error(res.statusText)
    //   }
    //   return res.json()
    // })
    // .then(data => {
    //   console.log('data', data)
    //   this.setState({
    //     schedule: [
    //       ...data
    //     ]
    //   })
    // })
    // .catch(err => {
    //   this.setState({
    //     error: 'Sorry, could not get the schedule at this time'
    //   })
    // })
  }

  render() {
    const Schedule = this.state.schedule;
    // console.log("Schedule", this.state.schedule);
    return (
      <ul className="SchedulePreview">
        {Schedule.slice(0, 3).map((game, index) => (
          <li key={game.id}>
            <GamePreview game={game} />
          </li>
        ))}
      </ul>
    );
  }
}

export default SchedulePreview;
