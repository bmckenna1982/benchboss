import React, { Component } from 'react';
import { format as formatDate, parseISO } from 'date-fns'
import { Route, withRouter, Switch } from 'react-router-dom'
import Nav from './components/nav'
import './App.css';
import HomePage from './components/homePage';
import Message from './components/message';
import MessageBoard from './components/messageBoard';
import Schedule from './components/schedule';
import GameDetail from './components/gameDetail';


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
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/message-board" component={MessageBoard} />
            <Route exact path="/schedule/:gameId" component={GameDetail} />
            <Route exact path="/message-board/:messageId" component={Message} />
          </Switch>          
        </main>
        <footer role="content-info">&copy; BENCHBOSS 2020</footer>
      </div>
    )
  }
}


export default withRouter(App);
