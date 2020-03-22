import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './landingPage.css'

class LandingPage extends Component {

  render() {
    return (
      <div className='LandingPage'>
        <div className='landingPage_wrapper'>
          <h1>Manage your team like a boss!</h1>
          <p>Benchboss keeps your team in constant communication with easy to access scheduling showing game details and player availability and a team message board.</p>
        </div>
        <div className='LandingPage_button_container'>
          <Link to='/log-in' >
            <button className='login_button'> Log in</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default LandingPage