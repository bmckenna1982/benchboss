import React, { Component } from 'react'
import { format as formatDate, parseISO } from 'date-fns'
import { Link } from 'react-router-dom'
import './styles/gamePreview.css'

class GamePreview extends Component {
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
    console.log('this.props.game', this.props.game)
    return (
      <div className='GamePreview_container'>
        <Link to={`/schedule/${this.props.game.id}`}>
          <div className='GamePreview_date'>
            <div className='month'>
              {this.NiceMonth(this.props.game)}
            </div>
            <div className='day'>
              {this.NiceDay(this.props.game)}
            </div>
          </div>
          <div className='GamePreview_info'>
            <div className='GamePreview_opponent'>
              {this.props.game.summary}
            </div>
            <div className='GamePreview_time'>
              {this.NiceTime(this.props.game)}
            </div>
            <div className='GamePreview_location'>
              {this.props.game.location}
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default GamePreview