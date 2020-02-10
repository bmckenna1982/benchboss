import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Nav from '../nav/nav'
import './App.css'
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
        <footer>&copy; BENCHBOSS 2020</footer>
      </div>
    )
  }
}


export default withRouter(App);
