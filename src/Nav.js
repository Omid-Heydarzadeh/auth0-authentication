import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  const { isAuthenticated, login, logout } = props.auth;
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
          <li>
            <NavLink to={'/profile'}>Profile</NavLink>
          </li>
      </ul>
    </nav>
  );
}
