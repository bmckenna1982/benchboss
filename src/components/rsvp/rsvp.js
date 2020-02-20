import React, { Component } from 'react'
import RsvpService from '../services/rsvp-service'

class RSVP extends Component {
  // static defaultProps = {
  //   rsvp: [],
  //   userRsvp: null,
  //   error: null
  // }

  constructor(props) {
    super(props)
    this.state = {
      userRsvp: null
    }
  }

  handleClick = e => {
    e.preventDefault()
    this.setState({
      error: null,
    })
    console.log('e.target.value', e.target.value)

    const userStatus = e.target.value

    const rsvp = {
      game_id: this.props.rsvp[0].game_id,
      game_status: e.target.value
    }

    RsvpService.postRsvp(rsvp)
      .then(res => {
        console.log('Post-res', res)
        this.setState({ userRsvp: userStatus })
      })
      // .then(()=> {
      //   e.target.value = ''      
      // })
      .catch(this.setState({ error: 'error' }))
  }


  render() {
    const rsvpIn = this.props.rsvp.filter(status => status.game_status === 'in')
    const rsvpMaybe = this.props.rsvp.filter(status => status.game_status === 'maybe')
    const rsvpOut = this.props.rsvp.filter(status => status.game_status === 'out')

    const currentlyChecked = this.state.userRsvp || this.props.userRsvp
    
    const rsvpLegend = this.props.userRsvp === 'pending'
      ? 'Please set your RSVP'
      : `Your current RSVP status is '${this.props.userRsvp}'` 


    return (
      // <React.Fragment>
      <div className='RSVP'>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>{rsvpLegend}</legend>
            <div className='RSVP_selection_container'>
              <input onChange={this.handleClick} checked={currentlyChecked === 'in'} type='radio' id='radioIn' name='rsvp_status' value='in'></input>
              <label htmlFor='radioIn'>In</label>
              <input onChange={this.handleClick} checked={currentlyChecked === 'maybe'} type='radio' id='radioMaybe' name='rsvp_status' value='maybe'></input>
              <label htmlFor='radioMaybe'>Maybe</label>
              <input onChange={this.handleClick} checked={currentlyChecked === 'out'} type='radio' id='radioOut' name='rsvp_status' value='out'></input>
              <label htmlFor='radioOut'>Out</label>
            </div>
          </fieldset>
        </form>
        {/* <h3>Please set your RSVP</h3>
          <div className='button_container'>
            <button onClick={this.handleClickIn} className='RSVP_button reply_in'>In</button>
            <button className='RSVP_button reply_maybe'>Maybe</button>
            <button className='RSVP_button reply_out'>Out</button>
          </div>         */}
        <div className="RSVP_status">
          <div className='RSVP_status_in'>
            <h4>Replied In</h4>
            <ul className='RSVP_in_list'>
              {rsvpIn.map(s => {
                return <li key={s.user.id}>{s.user.full_name}</li>
              })}
            </ul>
          </div>
        </div>
        <div className='RSVP_status_maybe'>
          <h4>Replied Maybe</h4>
          <ul className='RSVP_maybe_list'>
            {rsvpMaybe.map(s => {
              return <li key={s.user.id}>{s.user.full_name}</li>
            })}
          </ul>
        </div>
        <div className='RSVP_status_out'>
          <h4>Replied Out</h4>
          <ul className='RSVP_out_list'>
            {rsvpOut.map(s => {
              return <li key={s.user.id}>{s.user.full_name}</li>
            })}
          </ul>
        </div>
        {/* <div className='RSVP_status_pending'>
          <h4>Pending Reply</h4>
          <ul className='RSVP_pending_list'>
            <li>Keith Jones</li>
            <li>Stephen Patch</li>
          </ul>
        </div> */}
      </div>
      /* </React.Fragment > */
    )
  }
}

export default RSVP