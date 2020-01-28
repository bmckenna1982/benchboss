import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Nav from './components/nav'
import './App.css'
import HomePage from './components/homePage'
import Message from './components/messagePreview'
import Login from './components/login'
import Register from './components/register'
import MessageBoard from './components/messageBoard'
import Schedule from './components/schedule'
import GameDetail from './components/gameDetail'


class App extends Component {
  render() {
    return (
      <div className='App' >
        <Nav />
        <main role='main'>
          <header role='banner'>
            <h1>Guinness Hockey</h1>
          </header>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/log-in' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/message-board' component={MessageBoard} />
            <Route exact path='/schedule/:gameId' component={GameDetail} />
            <Route exact path='/message-board/:messageId' component={Message} />
          </Switch>          
        </main>
        <footer role='content-info'>&copy; BENCHBOSS 2020</footer>
      </div>
    )
  }
}


export default withRouter(App);
