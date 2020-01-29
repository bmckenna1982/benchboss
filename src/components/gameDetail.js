import React, { Component } from 'react'

class GameDetail extends Component {
  render() {
    return (
      <section className='GameDetail'>
        <h2>Guinness vs Cossacks</h2>
        <div className='GameDetail_Date'>
          <div className='month'>
            {this.NiceMonth(this.props.game)}
          </div>
          <div className='day'>
            {this.NiceDay(this.props.game)}
          </div>
          <div className='GamePreview_time'>
            {this.NiceTime(this.props.game)}
          </div>
          <div className='GamePreview_location'>
            {this.props.game.location}
          </div>
          <div className='RSVP'>
            <div className='reply_in'></div>
            <div className='reply_maybe'></div>
            <div className='reply_out'></div>
            <div className='reply_pending'></div>
          </div>
        </div>
      </section>
    )
  }
}

export default GameDetail