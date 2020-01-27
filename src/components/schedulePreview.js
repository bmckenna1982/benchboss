import React, { Component } from 'react'
import GamePreview from './gamePreview'
import GAMES from '../scheduleData'


class SchedulePreview extends Component {
  render() {

    // const schedule = [
    //   { date: '2020-01-23T09:00:00.00Z', time: '10:10 PM', location: 'Center Ice Arena', opponent: 'Cossacks' },
    //   { date: '2020-01-29T10:00:00.00Z', time: '10:10 PM', location: 'Center Ice Arena', opponent: 'VS' },
    //   { date: '2020-02-06T11:00:00.00Z', time: '9:10 PM', location: 'The Ice', opponent: 'Hitmen' },

    // ]
console.log('GAMES', GAMES)
    return (
      <div className='SchedulePreview'>
        {GAMES.schedule.slice(0, 3).map((game, index) => (
          <GamePreview key={index} game={game} />
        ))}        
      </div>
    )
  }
}



export default SchedulePreview