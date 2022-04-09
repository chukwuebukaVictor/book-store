import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const HeaderStyle = {
  color: '#0290ff',
};

const Navbar = () => (
  <nav className="nav">
    <div className="nav1">
      <h1 className="header1" style={HeaderStyle}>Bookstore CMS</h1>
      <ul className="nav_links">
        <Link to="/"><li>Books</li></Link>
        <Link to="/Categories"><li className="cate">Categories</li></Link>
      </ul>
    </div>
    <ImUser className="user" />
  </nav>
);

export default Navbar;
