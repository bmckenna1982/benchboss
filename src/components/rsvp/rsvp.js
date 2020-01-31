import React, { Component } from 'react'

class RSVP extends Component {
  render() {
    return (
      <rf>
        <div className='RSVP'>
          <h3>Please set your RSVP</h3>
          <div className='button_container'>
            <button className='RSVP_button reply_in'>In</button>
            <button className='RSVP_button reply_maybe'>Maybe</button>
            <button className='RSVP_button reply_out'>Out</button>
          </div>
        </div>
        <div className="RSVP_status">
          <div className='RSVP_status_in'>
            <h4>Replied In</h4>
            <ul className='RSVP_in_list'>
              <li>Brian McKenna</li>
              <li>Darcy Hayes</li>
              <li>Jake Toepfer</li>
              <li>John Kenney</li>
              <li>Erik Nilsson</li>
              <li>Josh Ochs</li>
              <li>Andrew Patch</li>
              <li>Shane Sullivan</li>
              <li>Merik Tomana</li>
              <li>Steven Mercante</li>
              <li>Daniel Rodriguez</li>
            </ul>
          </div>
        </div>
        <div className='RSVP_status_maybe'>
          <h4>Replied Maybe</h4>
          <ul className='RSVP_maybe_list'>
            <li>Mitch Gianoni</li>
          </ul>
        </div>
        <div className='RSVP_status_out'>
          <h4>Replied Out</h4>
          <ul className='RSVP_out_list'>
            <li>Greg Suits</li>
            <li>Nick Bertasi</li>
            <li>Buckman Fergusson</li>
            <li>Justin Derosa</li>
          </ul>
        </div>
        <div className='RSVP_status_pending'>
          <h4>Pending Reply</h4>
          <ul className='RSVP_pending_list'>
            <li>Keith Jones</li>
            <li>Stephen Patch</li>
          </ul>
        </div>        
      </rf >
    )
  }
}

export default RSVP