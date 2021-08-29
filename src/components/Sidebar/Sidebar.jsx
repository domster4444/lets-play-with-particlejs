import React from 'react';

const Sidebar = () => {
  return (
    <>
      <nav className="st-menu st-effect-11" id="menu-11">
        <h2 className="jpt">Sidebar</h2>
        <ul>
          <li>
            <a className="jpt" href="https://google.com">
              Data Management
            </a>
          </li>
          <li>
            <a className="jpt" href="https://google.com">
              Location
            </a>
          </li>
          <li>
            <a className="jpt" href="https://google.com">
              Study
            </a>
          </li>
          <li>
            <a className="jpt" href="https://google.com">
              Collections
            </a>
          </li>
          <li>
            <a className="jpt" href="https://google.com">
              Credits
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
