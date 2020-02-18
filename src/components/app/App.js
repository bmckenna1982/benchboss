import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Nav from '../nav/nav'
import PrivateRoute from '../../utils/PrivateRoute'
import PublicOnlyRoute from '../../utils/PublicOnlyRoute'

import Hero from '../hero/hero'
import HomePage from '../homePage/homePage'
import Message from '../message/message'
import Login from '../login/login'
import Register from '../register/register'
import MessageBoard from '../messageBoard/messageBoard'
import Schedule from '../schedule/schedule'
import GameDetail from '../gameDetail/gameDetail'
import AddComment from '../addComment/addComment'
import AddGame from '../addGame/addGame'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className='App' >
        <Nav />
        <main role='main'>
          <Hero />          
          <Switch>
            <Route exact path='/' component={HomePage} />
            <PublicOnlyRoute exact path='/log-in' component={Login} />
            <PublicOnlyRoute exact path='/register' component={Register} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/message-board' component={MessageBoard} />
            <PrivateRoute exact path='/schedule/:gameId' component={GameDetail} />
            <PrivateRoute exact path='/message-board/:messageId' component={Message} />
            <PrivateRoute exact path='/add-comment' component={AddComment} />            
            <PrivateRoute exact path='/add-game' component={AddGame} />            
            {/* <Route exact path='/addMessage' component={AddMessage} /> */}
          </Switch>            
        </main>
        <footer>&copy; BENCHBOSS 2020</footer>
      </div>
    )
  }
}


export default withRouter(App);
