import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';


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
    const destination = (location.state || {}).from || '/home';
    history.push(destination);
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value.toLowerCase(),
      password: password.value
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.handleLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };



  render() {
    const { error } = this.state;
    return (
      <section className='log-in background_section'>
        <p>To Demo the app login with user: demo@demo.com and password: Demo123!</p>
        <form onSubmit={this.handleSubmitJwtAuth} className='log-in-form'>
          <div role='alert'>{error && <p className='red'>{error}</p>}</div>
          <legend>Log in to your account</legend>
          <div>
            <label htmlFor='user_name'>Email</label>
            <input type='text' name='user_name' id='user_name' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
          </div>
          <button className='bttn' type='submit'>Log in</button>
          <div>
            Register for an account here:
            <NavLink to='/register'>Register</NavLink>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
