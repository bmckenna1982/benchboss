import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <div>
          <a href="/index" >Home</a></div>
        <div className="app_name">Bench Boss</div>
        <div>
          <a href="/log-in" >Login</a>
        </div>
      </nav>
    )
  }
}

export default Nav