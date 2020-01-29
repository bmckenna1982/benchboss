import React, { Component } from 'react'
import { NiceMonth, NiceDay, NiceTime } from './utils'
import { Link } from 'react-router-dom'
import './styles/gamePreview.css'

class GamePreview extends Component {
  // NiceMonth({ time, format = 'MMM' }) {
  //   const parseDate = parseISO(time)
  //   console.log('Month', formatDate(parseDate, format))
  //   return formatDate(parseDate, format)
  // }

  // NiceDay({ time, format = 'do' }) {
  //   const parseDate = parseISO(time)
  //   console.log('Day', formatDate(parseDate, format))
  //   return formatDate(parseDate, format)
  // }

  // NiceTime({ time, format = 'h:mm a' }) {
  //   console.log('time', time)
  //   const parseDate = parseISO(time)
  //   console.log('Time', formatDate(parseDate, format))
  //   return formatDate(parseDate, format)
  // }

  render() {
    console.log('this.props.game', this.props.game)
    return (
      <div className='GamePreview_container'>
        <Link to={`/schedule/${this.props.game.id}`}>
          <div className='GamePreview_date'>
            <div className='month'>
              <NiceMonth date={this.props.game.time} />
              {/* {this.NiceMonth(this.props.game)} */}
            </div>
            <div className='day'>
              <NiceDay date={this.props.game.time} />
              {/* {this.NiceDay(this.props.game)} */}
            </div>
          </div>
          <div className='GamePreview_info'>
            <div className='GamePreview_opponent'>
              {this.props.game.summary}
            </div>
            <div className='GamePreview_time'>
            <NiceTime date={this.props.game.time} />
              {/* {this.NiceTime(this.props.game)} */}
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