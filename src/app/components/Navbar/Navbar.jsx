import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={`/`}>
        <img
          src="https://assets-global.website-files.com/620252cf99d07328f02a4be9/620252cf99d073918b2a4c72_logo.svg"
          alt="ismart-logo"
        />
      </Link>
    </div>
  );
};

export default Navbar;
