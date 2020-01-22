import React, { Component } from 'react'

class GameDetail extends Component {
  render() {
    return(
      <div className="GameDetail">
        <div className="GameDetail_date">
          <div className="month"></div>
          <div className="day"></div>
        </div>        
        <div className="GameDetail_time">
          10:10 PM
        </div>
        <div className="GameDetail_location">
          Center Ice Arena
        </div>
        <div className="GameDetail_opponent">
          Cossacks
        </div>        
      </div>
    )
  }
}

export default GameDetail