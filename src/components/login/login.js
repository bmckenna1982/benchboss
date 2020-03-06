import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";


class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { }
    }
  };

  state = { error: null };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/home";
    console.log("destination", destination);
    history.push(destination);
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    console.log("ev.target", ev.target);
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        console.log("res", res);
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        console.log("auth");
        this.handleLoginSuccess();
      })
      .catch(res => {
        console.log("error", res.error);
        this.setState({ error: res.error });
      });
  };



  render() {
    const { error } = this.state;
    return (
      <section className="log-in">
        <p>To Demo the app login with user: demo@demo.com and password: Demo123!</p>
        <form onSubmit={this.handleSubmitJwtAuth} className="log-in-form">
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <legend>Log in to your account</legend>
          <div>
            <label htmlFor="user_name">Email</label>
            <input type="text" name="user_name" id="user_name" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Log in</button>
          <div>
            Register for an account here:
            <NavLink to="/register">Register</NavLink>
            {/* <a href='/register.html'>Register</a> */}
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
