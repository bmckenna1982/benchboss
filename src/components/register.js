import React, { Component } from 'react'
class Register extends Component {
  render() {
    return(
      <section className='registration'>      
      <form className='register-form'>
        <legend>Register using the team code provided by your captain.</legend>
          <div>
              <label for='first-name'>First name</label>
              <input placeholder='First Name' type='text' name='first-name' id='first-name' />
          </div>
          <div>
              <label for='last-name'>Last name</label>
              <input type='text' name='last-name' id='last-name' placeholder='Last Name' />
          </div>
          <div>
              <label for='username'>Email</label>
              <input type='text' name='username' id='username' />
          </div>
          <div>
              <label for='password'>Password</label>
              <input type='password' name='password' id='password' />
          </div>
          <div>
              <label for='teamcode'>Team Code</label>
              <input type='teamcode' name='teamcode' id='teamcode' />
          </div>
          <button type='submit'>Sign Up</button>
      </form>
  </section>
    )
  }
}

export default Register