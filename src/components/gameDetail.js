import React, { Component } from 'react'
import { format as formatDate, parseISO } from 'date-fns'
import './styles/gameDetail.css'

class GameDetail extends Component {
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
      <div className="GameDetail">
        <div className="GameDetail_date">
          <div className="month">
            {this.NiceMonth(this.props.game)}
          </div>
          <div className="day">
            {this.NiceDay(this.props.game)}
          </div>
        </div>
        <div className="GameDetail_info">
          <div className="GameDetail_opponent">
            Guinness vs {this.props.game.opponent}
          </div>
          <div className="GameDetail_time">
            {this.props.game.time}
          </div>
          <div className="GameDetail_location">
            {this.props.game.location}
          </div>
        </div>
      </div>
    )
  }
}

export default GameDetail