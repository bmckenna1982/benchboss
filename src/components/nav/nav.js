import React from "react";
import { NavLink } from "react-router-dom";
import TokenService from "../services/token-service";
import IdleService from "../services/idle-service";

class Nav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    return (
      <div className="Nav__logged-in">
        <NavLink onClick={this.handleLogoutClick} to="/">
          Logout
        </NavLink>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Nav__not-logged-in">
        <NavLink to="/log-in">Log in</NavLink>
        {" / "}
        <NavLink to="/register">Register</NavLink>
      </div>
    );
  }

  render() {
    return (
      <nav role="navigation">
        <div>
          <NavLink className="NavMenu_Link" to={"/"}>
            Home
          </NavLink>
        </div>
        <div className="app_name">Bench Boss</div>
        <div>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
          {/* <NavLink className='NavMenu_Link' to={'/log-in'}>Login</NavLink> */}
        </div>
      </nav>
    );
  }
}

export default Nav;
