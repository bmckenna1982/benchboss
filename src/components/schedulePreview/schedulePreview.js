import React, { Component } from 'react'
import GamePreview from '../gamePreview/gamePreview'
import Schedule from '../../scheduleData'
import './schedulePreview.css'


class SchedulePreview extends Component {
  render() {
      
    return (
      <ul className='SchedulePreview'>
        {Schedule.games.slice(0, 3).map((game, index) => (
          <li key={game.id}>
            <GamePreview game={game} />
          </li>
        ))}        
      </ul>
    )
  }
}



export default SchedulePreview