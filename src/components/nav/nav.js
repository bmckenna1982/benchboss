import React from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';
import './nav.css'

class Nav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    return (
      <div className='Nav__logged-in'>
        <NavLink onClick={this.handleLogoutClick} to='/' className='navigation_login'>
          Logout
        </NavLink>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='Nav__not-logged-in'>
        <NavLink to='/log-in' className='navigation_login'>Log in</NavLink>
      </div>
    );
  }

  toggleNavSlider() {
    this.setState({
      navSliderVisible: !this.state.navSliderVisible
    })
  }

  render() {
    return (
      <nav role='navigation'>
        <div className='nav_wrapper'>
          <div className='navigation_home'>
            <NavLink className='NavMenu_Link' to={'/home'}>
              Home
          </NavLink>
          </div>
          <div className='app_name'>Bench Boss</div>
          <div className='navigation_login'>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
