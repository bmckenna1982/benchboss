import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'

class Register extends Component {
  state = { error: null }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/log-in')
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password, teamcode } = ev.target

    this.setState({ error: null })

    AuthApiService.postUser({
      full_name: full_name.value,
      user_name: user_name.value,
      password: password.value,
    })
      .then(user => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        console.log('res.error', res.error)
        this.setState({ error: res.error })
      })
  }

  render() {
    const error = this.state.error
    console.log('error', error)
    return (
      <section className='registration'>
        <form onSubmit={this.handleSubmit} className='register-form'>
          <legend>Register using the team code provided by your captain.</legend>
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div>
            <label htmlFor='full_name'>full name</label>
            <input placeholder='full Name' type='text' name='full_name' id='full_name' />
          </div>
          {/* <div>
              <label for='last_name'>Last name</label>
              <input type='text' name='last_name' id='last_name' placeholder='Last Name' />
          </div> */}
          <div>
            <label htmlFor='user_name'>Email</label>
            <input type='text' name='user_name' id='user_name' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
          </div>
          <div>
            <label htmlFor='teamcode'>Team Code</label>
            <input type='teamcode' name='teamcode' id='teamcode' />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </section>
    )
  }
}

export default Register