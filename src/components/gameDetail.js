import React, { Component } from 'react'
import { format as formatDate, parseISO } from 'date-fns'
import Schedule from '../scheduleData'
import './styles/gameDetail.css'

class GameDetail extends Component {

  NiceMonth({ time, format = 'MMM' }) {
    const parseDate = parseISO(time)    
    console.log('Month', formatDate(parseDate, format))
    return formatDate(parseDate, format)
  }
  
  NiceDay({ time, format = 'do' }) {
    const parseDate = parseISO(time)
    console.log('Day', formatDate(parseDate, format))
    return formatDate(parseDate, format)
  }
  
  NiceTime({ time, format = 'h:mm a' }) {
    console.log('time', time)
    const parseDate = parseISO(time)
    console.log('Time', formatDate(parseDate, format))
    return formatDate(parseDate, format)
  }

  render() {
    const selectedGame =  Schedule.games[this.props.match.params.gameId]
    return (
      <section className='GameDetail'>
        <h2>Guinness vs Cossacks</h2>
        <div className='GameDetail_Date'>
          <div className='month'>
            {this.NiceMonth(selectedGame)}
          </div>
          <div className='day'>
            {this.NiceDay(selectedGame)}
          </div>
          <div className='GamePreview_time'>
            {this.NiceTime(selectedGame)}
          </div>
          <div className='GamePreview_location'>
            {selectedGame.location}
          </div>
          <div className='RSVP'>
            <div className='reply_in'>In</div>
            <div className='reply_maybe'>Maybe</div>
            <div className='reply_out'>Out</div>
            <div className='reply_pending'>Pending</div>
          </div>
        </div>
      </section>
    )
  }
}

export default GameDetail