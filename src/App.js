import React, { Component } from 'react';
import { format as formatDate, parseISO } from 'date-fns'
import { Route, withRouter } from 'react-router-dom'
import Nav from './components/nav'
import './App.css';
import SchedulePreview from './components/schedulePreview';
import Message from './components/message';
import Comment from './components/comment';

class App extends Component {
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
      <div className="App" >
        {/* <nav role="navigation">
            <div>Home</div>
            <div className="app_name">Bench Boss</div>
            <div>Login</div>
          </nav> */}
        <Nav />
        <main role="main">
          <header role="banner">
            <h1>Guinness Hockey</h1>            
          </header>
          <section className="schedule">
            <h2>Upcoming Games</h2>
            {/* {schedule.map((game, index) => (
              <GameDetail key={index} game={game} />
            ))} */}
            <SchedulePreview />
          </section>
          {/* <section className="schedule">
              <h2>Schedule</h2>
              {schedule.map((game, index) => (                
                <div key={index} className="GameDetail">
                <div className="GameDetail_date">
                  <div className="month">
                  {this.NiceMonth(game)}
                  </div>
                  <div className="day">
                  {this.NiceDay(game)}
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
              
            </section> */}
          <section className="message-board">
            <h2>Message Board</h2>
            <div className="latest-message">
              <h3>Latest message board activity</h3>
              {/* <div>
                <ul>
                  <li>Contents of latest message</li>
                  <li>Author</li>
                  <li>Date posted</li>
                </ul>
                <ul>
                  <li>Contents of latest comment on latest message</li>
                  <li>Author</li>
                  <li>Date posted</li>
                </ul>
              </div> */}
              <Message />
              <Comment />
            </div>
          </section>          
        </main>
        <footer role="content-info">Footer</footer>
      </div>
    )
  }
}


export default withRouter(App);
