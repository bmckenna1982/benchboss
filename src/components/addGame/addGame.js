import React, { Component } from 'react'
import DateTimePicker from 'react-datetime-picker'

class AddGame extends Component {
  state = {
    date: new Date(),
  }

  handleChange = date => this.setState({ date })

  locations = () => (
    [
      'Ice Complex',
      'The Cooler (Red)',
      'The Cooler (Blue)',
      'Sandy Springs'
    ]
  )

  render() {
    return (
      <div className='AddGame'>
        <h2>Add Game to Schedule</h2>
        {/* <ValidationError message={this.validateName()} /> */}
        <DateTimePicker value={this.state.date} onChange={this.handleChange} />
        <form className='AddGame_form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <div className='opponent_container' >
              <label htmlFor='AddGame_opponent'>Opponent: </label>
              <input type='text' name='AddGame_opponent' id='AddGame_opponent' required></input>
              <p>Team status: </p>
              <input type='radio' name='AddGame_team_status' id='home' value='home' />
              <label htmlFor='home'>Home</label>
              <input type='radio' name='AddGame_team_status' id='away' value='away' />
              <label htmlFor='away'>Away</label>
            </div>
            <label htmlFor='AddGame_location'>Select the location:</label>
            <select name='AddGame_location' id='AddGame_location' required>
              {this.locations().map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <button
            type='submit'
            className='AddGame_form__submit'
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default AddGame