import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../styles/nav.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <h1>Bookstore CMS</h1>
        </li>
        <li>
          <Link className="links" to="/">BOOKS</Link>
        </li>
        <li>
          <Link className="links" to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div className="avatar-cont">
        <FaUser className="avatar" />
      </div>
    </nav>
  );
}

export default Navigation;
