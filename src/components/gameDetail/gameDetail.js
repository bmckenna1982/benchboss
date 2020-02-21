import React, { Component } from 'react'
import { NiceMonth, NiceDay, NiceTime } from '../../utils/utils'
import Schedule from '../../scheduleData'
import ScheduleService from '../services/schedule-service'
import RSVP from '../rsvp/rsvp'
import './gameDetail.css'

class GameDetail extends Component {
  static defaultProps = {

  }

  state = {
    game: {
      time: '2020-02-19T10:54:00.000Z'
    },
    rsvp: [
      {
        user: {
          full_name: ''
        }
      }
    ],
    userRsvp: {
      game_status: ''
    },
    error: null
  }

  componentDidMount() {
    const { gameId } = this.props.match.params
    // this.setState({ error: null })
    // ScheduleService.getGame(gameId)
    //   .then(res => {
    //     this.setState({ game: res })
    //   })
    //   .catch()
    // ScheduleService.getRsvp(gameId)
    //   .then(res => {
    //     console.log('res', res)
    //     this.setState({ 
    //       rsvp: res.teamRsvp,
    //       userRsvp: res.userRsvp[0]
    //     })
    //   })      
    //   .catch()
    ScheduleService.getGame(gameId)
      .then(res => {
        // this.setState({ game: res })
        console.log('res', res)
        ScheduleService.getRsvp(res.id)
          .then(gameRsvp => {
            console.log('gameRsvp', gameRsvp)
            console.log('res', res)
            this.setState({
              rsvp: gameRsvp.teamRsvp,
              userRsvp: gameRsvp.userRsvp[0],
              game: res
            })
          })
      })
      .catch()
  }

  render() {
    const selectedGame = this.state.game
    console.log('selectedGame', selectedGame)
    const currentUserRsvp = this.state.userRsvp
      ? this.state.userRsvp
      : 'pending'
      
    return (
      <section className='GameDetail'>
        <h2>{selectedGame.summary}</h2>
        <div className='GameDetail_Date'>
          <div className='month'>
            <NiceMonth date={selectedGame.time} />
          </div>
          <div className='day'>
            <NiceDay date={selectedGame.time} />
          </div>
          <div className='GamePreview_time'>
            <NiceTime date={selectedGame.time} />
          </div>
          <div className='GamePreview_location'>
            {selectedGame.location}
          </div>
          <RSVP rsvp={this.state.rsvp} userRsvp={currentUserRsvp} />          
        </div>
      </section >
    )
  }
}

export default GameDetail