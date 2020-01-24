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
        <Nav />
        <main role="main">
          <header role="banner">
            <h1>Guinness Hockey</h1>            
          </header>
          <section className="schedule">
            <h2>Upcoming Games</h2>            
            <SchedulePreview />
          </section>          
          <section className="message-board">
            <h2>Message Board</h2>
            <div className="latest-message">
              <h3>Latest message board activity</h3>              
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
