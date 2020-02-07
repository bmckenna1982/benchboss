import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GamePreview from '../gamePreview/gamePreview'
import ScheduleService from '../services/schedule-service'
import ScheduleList from '../../scheduleData'
import './schedule.css'

class Schedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schedule: [],
      error: null
    }
  }
  
  componentDidMount() {
    ScheduleService.getSchedule()
      .then(data => {
      console.log('data', data)
      this.setState({
        schedule: [
          ...data
        ]
      })
    })
    .catch(err => {
      this.setState({
        error: 'Sorry, could not get the schedule at this time'
      })
    })
  }

  render() {  
    
    return(
      <section className='Schedule'>
        <h2>Schedule</h2>
        <Link to='/add-game' className='addGame_button'>Add to Schedule</Link>        
        <div className='Schedule_list'>
        {/* {this.filterGames('January')} */}
        {this.state.schedule.map((game, index) => (
          <GamePreview key={index} game={game} />
        ))}        
      </div>
      </section>
    )
  }
}

export default Schedule