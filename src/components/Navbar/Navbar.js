import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleCollapse, toggleUserDropdown } from '../../reducers/nav';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleUserDropdown = this.toggleUserDropdown.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  toggleNav() {
    this.props.dispatch(toggleCollapse());
  }

  toggleUserDropdown() {
    this.props.dispatch(toggleUserDropdown());
  }

  signOut() {
    firebase.auth().signOut();
  }

  render() {
    const isAuth = this.props.auth.user !== null;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" exact className="navbar-brand" href="#nav">
          HelloApp
        </NavLink>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={
            (this.props.nav.collapsed ? 'collapse' : '') + ' navbar-collapse'
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {isAuth && (
                <NavLink
                  to="/dashboard"
                  exact
                  className="nav-link"
                  href="#dashboard"
                >
                  Dashboard <span className="sr-only">(current)</span>
                </NavLink>
              )}
            </li>
          </ul>
          <ul className="navbar-nav">
            {isAuth ? (
              <li className="nav-item dropdown">
                <a
                  onClick={this.toggleUserDropdown}
                  className="nav-link dropdown-toggle"
                  href="#user"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Welcome, {this.props.auth.user.displayName}
                </a>
                <div
                  className={
                    (this.props.nav.showUserDropdown ? 'show' : '') +
                    ' dropdown-menu'
                  }
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    onClick={this.signOut}
                    className="dropdown-item"
                    href="#signout"
                  >
                    Sign out
                  </a>
                </div>
              </li>
            ) : (
              <NavLink className="btn btn-outline-info" to="/login">
                Login
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const NavbarWithState = connect(({ nav, auth }) => ({
  nav,
  auth,
}))(Navbar);

export default NavbarWithState;
