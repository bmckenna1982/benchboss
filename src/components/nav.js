import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <nav role='navigation'>
        <div>
          <NavLink className='NavMenu_Link' to={'/'}>Home</NavLink>
        </div>
        <div className='app_name'>Bench Boss</div>
        <div>
          <NavLink className='NavMenu_Link' to={'/log-in'}>Login</NavLink>
        </div>
      </nav>
    )
  }
}

export default Nav