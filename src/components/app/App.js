import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Nav from "../nav/nav";
import PrivateRoute from "../../utils/PrivateRoute";
import PublicOnlyRoute from "../../utils/PublicOnlyRoute";

import Hero from "../hero/hero";
import HomePage from "../homePage/homePage";
import Message from "../message/message";
import Login from "../login/login";
import Register from "../register/register";
import MessageBoard from "../messageBoard/messageBoard";
import Schedule from "../schedule/schedule";
import GameDetail from "../gameDetail/gameDetail";
import AddComment from "../addComment/addComment";
import AddGame from "../addGame/addGame";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import IdleService from "../services/idle-service";
import "./App.css";

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount() {
    /*
      set the function (callback) to call when a user goes idle
      we'll set this to logout a user when they're idle
    */
    IdleService.setIdleCallback(this.logoutFromIdle);

    /* if a user is logged in */
    if (TokenService.hasAuthToken()) {
      /*
        tell the idle service to register event listeners
        the event listeners are fired when a user does something, e.g. move their mouse
        if the user doesn't trigger one of these event listeners,
          the idleCallback (logout) will be invoked
      */
      console.log("loggedIn");
      IdleService.registerIdleTimerResets();

      /*
        Tell the token service to read the JWT, looking at the exp value
        and queue a timeout just before the token expires
      */
      TokenService.queueCallbackBeforeExpiry(() => {
        /* the timoue will call this callback just before the token expires */
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    /*
      when the app unmounts,
      stop the event listeners that auto logout (clear the token from storage)
    */
    IdleService.unRegisterIdleResets();
    /*
      and remove the refresh endpoint request
    */
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    /* remove the token from localStorage */
    console.log('logout')
    TokenService.clearAuthToken();
    /* remove any queued calls to the refresh endpoint */
    TokenService.clearCallbackBeforeExpiry();
    /* remove the timeouts that auto logout when idle */
    IdleService.unRegisterIdleResets();
    /*
      react won't know the token has been removed from local storage,
      so we need to tell React to rerender
    */
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <main role="main">
          <Hero />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PublicOnlyRoute exact path="/log-in" component={Login} />
            <PublicOnlyRoute exact path="/register" component={Register} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/message-board" component={MessageBoard} />
            <PrivateRoute
              exact
              path="/schedule/:gameId"
              component={GameDetail}
            />
            <PrivateRoute
              exact
              path="/message-board/:messageId"
              component={Message}
            />
            <PrivateRoute exact path="/add-comment" component={AddComment} />
            <PrivateRoute exact path="/add-game" component={AddGame} />
            {/* <Route exact path='/addMessage' component={AddMessage} /> */}
          </Switch>
        </main>
        <footer>&copy; BENCHBOSS 2020</footer>
      </div>
    )
  }
}

export default withRouter(App);
