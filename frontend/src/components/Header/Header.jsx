import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/">1</Link>
        </li>
        <li>
          <Link to="/service">2</Link>
        </li>
        <li>
          <Link to="/jpt">3</Link>
        </li>
        <li>
          <Link to="/jpt">4</Link>
        </li>
        <li>
          <Link to="/jpt">5</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Header;
