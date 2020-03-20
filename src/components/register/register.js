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
    const { full_name, user_name, password } = ev.target

    this.setState({ error: null })

    AuthApiService.postUser({
      full_name: full_name.value,
      user_name: user_name.value.toLowerCase(),
      password: password.value,
    })
      .then(user => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const error = this.state.error
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
          <div>
            <label htmlFor='user_name'>Email</label>
            <input type='text' name='user_name' id='user_name' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </section>
    )
  }
}

export default Register