import React, { Component } from 'react';
import Moment from 'react-moment'
import Nav from './components/nav'
import './App.css';

class App extends Component {
  render() {
    console.log('schedule[0].date', schedule[0].date)
    return (
      <div className="App" >        
          {/* <nav role="navigation">
            <div>Home</div>
            <div className="app_name">Bench Boss</div>
            <div>Login</div>
          </nav> */}
          <Nav />
          <main role="main">
            <header role="banner">
              <h1>Bench Boss</h1>
              <h2>Manage like a pro</h2>
            </header>
            <section className="schedule">
              <h2>Schedule</h2>
              {schedule.map(game => (                
                <div className="GameDetail">
                <div className="GameDetail_date">
                  <div className="month">
                  {new DATE(game.date).getMonth()}
                  </div>
                  <div className="day">
                  {new Intl.NumberFormat("en-US", {                    
                    day: "2-digit",                    
                  }).format(game.date)
                  }
                  </div>
                </div>
                <div className="GameDetail_time">
                  {game.time}                  
                </div>
                <div className="GameDetail_location">
                  {game.location}
                </div>
                <div className="GameDetail_opponent">
                  {game.opponent}
                </div>
              </div>
              ))}
              
            </section>
            <section className="game-details_descsription">
              <header>
                <h3>Get full game details</h3>
              </header>
              <p>[<em>placeholder for screenshot of game details</em>]</p>
              <p>See full game details for time, date and location of upcoming games as well as stats from previous games
              </p>
            </section>
            <section className="message-board_description">
              <header>
                <h3>Keep in contact with all team mates</h3>
              </header>
              <p>[<em>placeholder for screenshot of message board</em>]</p>
              <p>Integrated message board allows users and admins to create messages and keep the conversation going</p>
            </section>
          </main>
          <footer role="content-info">Footer</footer>        
      </div>
    )
  }
}

const schedule = [
  { date: "2020-01-23T00:00:00.00Z", time: "10:10 PM", location: "Center Ice Arena", opponent: "Cossacks" },
  { date: "2020-01-29T00:00:00.00Z", time: "10:10 PM", location: "Center Ice Arena", opponent: "VS" },
  { date: "2020-02-06T00:00:00.00Z", time: "9:10 PM", location: "The Ice", opponent: "Hitmen" },

]

export default App;
