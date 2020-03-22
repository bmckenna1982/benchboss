import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Nav from '../nav/nav';
import PrivateRoute from '../../utils/PrivateRoute';
import PublicOnlyRoute from '../../utils/PublicOnlyRoute';

import Hero from '../hero/hero';
import HomePage from '../homePage/homePage';
import Message from '../message/message';
import Login from '../login/login';
import Register from '../register/register';
import MessageBoard from '../messageBoard/messageBoard';
import Schedule from '../schedule/schedule';
import GameDetail from '../gameDetail/gameDetail';
import AddMessage from '../addMessage/addMessage';
import AddComment from '../addComment/addComment';
import AddGame from '../addGame/addGame';
import LandingPage from '../landingPage/landingPage'
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import IdleService from '../services/idle-service';
import './App.css';

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);

    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
  };

  render() {
    return (
      <div className='App'>
        <Nav />
        <main role='main'>
          <Switch>
            <PublicOnlyRoute exact path='/' component={LandingPage} />
            <Route path='/' component={Hero} />
          </Switch>
          <Switch>
            <Route exact path='/home' component={HomePage} />
            <PublicOnlyRoute exact path='/log-in' component={Login} />
            <PublicOnlyRoute exact path='/register' component={Register} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/message-board' component={MessageBoard} />
            <PrivateRoute
              exact
              path='/schedule/:gameId'
              component={GameDetail}
            />
            <PrivateRoute
              exact
              path='/message-board/:messageId'
              component={Message}
            />
            <PrivateRoute exact path='/add-comment' component={AddComment} />
            <PrivateRoute exact path='/add-game' component={AddGame} />
            <PrivateRoute exact path='/add-message' component={AddMessage} />
          </Switch>
        </main>
        <footer>&copy; BENCHBOSS 2020</footer>
      </div>
    )
  }
}

export default withRouter(App);
