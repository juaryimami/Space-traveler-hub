/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavLink() {
  const [line, setLine] = useState('');
  const handleClick = (data) => {
    setLine(data);
  };

  return (
    <div>
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="">
          <img src="./planet.png" width="45px" height="45px" className="me-2" alt="logo" />
          Space Travelers Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto p-3">
            <Nav.Item
              onClick={() => handleClick('rockets')}
              className={
                    (line === 'rockets' ? 'active_item' : '')
                  }
            >
              <Link to="/" className="nav-link">Rockets</Link>
            </Nav.Item>
            <Nav.Item
              onClick={() => handleClick('missions')}
              className={
                    (line === 'missions' ? 'active_item' : '')
                  }
            >
              <Link to="/mission" className="nav-link">Missions</Link>

            </Nav.Item>
            <Nav.Item
              onClick={() => handleClick('profile')}
              className={
                    (line === 'profile' ? 'active_item' : '')
                  }
            >
              <Link to="/profile" className="nav-link">Profile</Link>

            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>

  );
}
export default NavLink;
