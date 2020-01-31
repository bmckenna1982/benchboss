import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Nav from './components/nav'
import './App.css'
import Hero from './components/hero'
import HomePage from './components/homePage'
import Message from './components/message'
import Login from './components/login'
import Register from './components/register'
import MessageBoard from './components/messageBoard'
import Schedule from './components/schedule'
import GameDetail from './components/gameDetail'
import AddComment from './components/addComment'
import AddGame from './components/addGame'


class App extends Component {
  render() {
    return (
      <div className='App' >
        <Nav />
        <main role='main'>
          <Hero />          
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/log-in' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/message-board' component={MessageBoard} />
            <Route exact path='/schedule/:gameId' component={GameDetail} />
            <Route exact path='/message-board/:messageId' component={Message} />
            <Route exact path='/add-comment' component={AddComment} />            
            <Route exact path='/add-game' component={AddGame} />            
            {/* <Route exact path='/addMessage' component={AddMessage} /> */}
          </Switch>            
        </main>
        <footer role='content-info'>&copy; BENCHBOSS 2020</footer>
      </div>
    )
  }
}


export default withRouter(App);
