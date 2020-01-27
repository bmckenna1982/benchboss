import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <section className='log-in'>
        <form className='log-in-form'>
          <legend>Log in to your account</legend>
          <div>
            <label for='username'>Email</label>
            <input type='text' name='username' id='username' />
          </div>
          <div>
            <label for='password'>Password</label>
            <input type='password' name='password' id='password' />
          </div>
          <button type='submit'>Log in</button>
          <div>
            Register for an account here: 
            <NavLink to='/register'>Register</NavLink>
            {/* <a href='/register.html'>Register</a> */}
          </div>

        </form>
      </section>
    )
  }
}

export default Login