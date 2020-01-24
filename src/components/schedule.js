import React, { Component } from 'react'
import GameDetail from './gameDetail'
import './styles/schedule.css'

class Schedule extends Component {
  render() {
    return(
      <section className="Schedule">
        <h2>Schedule</h2>
        <div className="Schedule_header">
          <span className="chevrons_left">&#171;</span>
          January
          <span className="chevrons_right">&#187;</span>
        </div>
        <GameDetail />
        {/* <div className="Schedule_list-view">
          <ul className="Schedule_list">
            <li className="">
              <div className="Schedule_list_top">
                <div className="Schedule_list_date"></div>
                <div className="Schedule_list_opponent"></div>
              </div>
              <div className="Schedule_list_bottom">
                <div className="Schedule_list_time"></div>
                <div className="Schedule_list_location"></div>
              </div>
            </li>
          </ul>
        </div> */}
      </section>
    )
  }
}

export default Schedule