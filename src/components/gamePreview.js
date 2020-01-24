import React, { Component } from 'react'
import { format as formatDate, parseISO } from 'date-fns'
import './styles/gamePreview.css'

class GamePreview extends Component {
  NiceMonth({ date, format = 'MMMM' }) {
    const parseDate = parseISO(date)
    console.log('parseDate', formatDate(parseDate, format))
    return formatDate(parseDate, format)
  }

  NiceDay({ date, format = 'Do' }) {
    const parseDate = parseISO(date)
    console.log('parseDate', formatDate(parseDate, format))
    return formatDate(parseDate, format)
  }

  render() {
    return (
      <div className="GamePreview">
        <div className="GamePreview_date">
          <div className="month">
            {this.NiceMonth(this.props.game)}
          </div>
          <div className="day">
            {this.NiceDay(this.props.game)}
          </div>
        </div>
        <div className="GamePreview_info">
          <div className="GamePreview_opponent">
            Guinness vs {this.props.game.opponent}
          </div>
          <div className="GamePreview_time">
            {this.props.game.time}
          </div>
          <div className="GamePreview_location">
            {this.props.game.location}
          </div>
        </div>
      </div>
    )
  }
}

export default GamePreview