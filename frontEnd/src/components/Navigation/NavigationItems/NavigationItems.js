import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItems.css';

const navItems = [
  { id: 'feed', text: 'Feed', faIcon: 'comments', link: '/', auth: true },
  { id: 'login', text: 'Login', faIcon: 'sign-in-alt', link: '/', auth: false },
  { id: 'signup', text: 'Signup', faIcon: 'user-plus', link: '/signup', auth: false }
];

const navigationItems = props => [
  ...navItems.filter(item => item.auth === props.isAuth).map(item => (
    <li
      key={item.id}
      className={['navigation-item', props.mobile ? 'mobile' : ''].join(' ')}
    >
      <NavLink to={item.link} exact onClick={props.onChoose} >
        {item.text}
        &nbsp;
        {item.faIcon && (<i className={'fas fa-' + item.faIcon}></i>)}
      </NavLink>
    </li>
  )),
  props.isAuth && (
    <li className="navigation-item" key="logout">
      <button onClick={props.onLogout}>Logout <i className="fas fa-sign-out-alt"></i></button>
    </li>
  )
];

export default navigationItems;
