import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <div className="containerCenter">
        <div className="contentBlock">
          <header id="public-header">
            <nav>
              <ul id="left-nav">
                <li>
                  <Link className="inter_regular" to="/">
                    Logo
                  </Link>
                </li>
              </ul>
              <ul id="center-nav">
                <li>
                  <Link className="inter_regular" to="/">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="inter_regular" to="/service">
                    UseCases
                  </Link>
                </li>
                <li>
                  <Link className="inter_regular" to="/jpt">
                    Document
                  </Link>
                </li>
                <li>
                  <Link className="inter_regular" to="/jpt">
                    Pricing
                  </Link>
                </li>
              </ul>
              <ul id="right-nav">
                <li>
                  <Link className="inter_regular" to="/jpt">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link className="inter_regular" to="/jpt">
                    Sign up
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
