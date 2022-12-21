import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navBar.module.css';

const activeStyle = {
  textDecoration: 'underline',
};

function NavBar() {
  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.navContainer}>
        <img className={styles.navbar_img} src="planet.png" alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className={styles.navlinks}>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={styles.links}
            to="/"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={styles.linkss}
            to="/missions"
          >
            {' '}
            Missions
            {' '}
          </NavLink>
        </li>

        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={styles.profilelinks}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
