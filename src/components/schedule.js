import React, { Component } from 'react'
import GamePreview from './gamePreview'
import GAMES from '../scheduleData'
import './styles/schedule.css'

class Schedule extends Component {
  filterGames = (month) => {
    const currentDate = new Date()
    console.log('currentDate', currentDate)

    // GAMES.schedule.filter(game => (
    //   game.time > 
    // ))
    return currentDate
  }
  
  render() {  
    
    return(
      <section className='Schedule'>
        <h2>Schedule</h2>
        {/* <div className='Schedule_header'>
          <span className='chevrons_left'>&#171;</span>
          January
          <span className='chevrons_right'>&#187;</span>
        </div> */}
        <div className='Schedule_list'>
        {/* {this.filterGames('January')} */}
        {GAMES.schedule.map((game, index) => (
          <GamePreview key={index} game={game} />
        ))}        
      </div>
      </section>
    )
  }
}

export default Schedule