import React, { Component } from 'react'
import './landingPage.css'

class LandingPage extends Component {
  render() {
    return (
      <div className='LandingPage'>
        <section className='schedule_preview'>
          <header className='LandingPage_header'>
            <p>To Demo the app login with user: demo@demo.com and password: Demo123!</p>
            <h3>Easily access schedule</h3>
          </header>
          {/* <p>[<em>placeholder for screenshot of schedule</em>]</p> */}
          <img className='LandingPage_image' src='https://benchboss.s3.us-east-2.amazonaws.com/schedule_preview.PNG' alt='schedule preview' ></img>
          <p>The most important part of managing your team is communicating the schedule. Keep the schedule front and
        center with games listed on main page.</p>
        </section>
        <section className='gameDetails_preview'>
          <header className='LandingPage_header'>
            <h3>Get full game details</h3>
          </header>
          {/* <p>[<em>placeholder for screenshot of game details</em>]</p> */}
          <img className='LandingPage_image' src='https://benchboss.s3.us-east-2.amazonaws.com/gameDetail_preview.PNG' alt='gameDetail preview' ></img>
          <p>See full game details for time, date and location of upcoming games as well as RSVP for players
      </p>
        </section>
        <section className='messageBoard_preview'>
          <header className='LandingPage_header'>
            <h3>Keep in contact with all team mates</h3>
          </header>
          {/* <p>[<em>placeholder for screenshot of message board</em>]</p> */}
          <img className='LandingPage_image' src='https://benchboss.s3.us-east-2.amazonaws.com/messageBoard_preview.PNG' alt='messageBoard preview' ></img>
          <p>Integrated message board allows users and admins to create messages and keep the conversation going</p>
        </section>
      </div>
    )
  }
}

export default LandingPage