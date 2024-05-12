import React from 'react';
import './Root.css';
import {Link, Outlet} from "react-router-dom";

function Root() {
  return (
      <div style={{ display: "flex" }}>
        <div id="sidebar">
          <h1>Menu</h1>
          <nav>
            <ul>
              <li>
                <Link to={`styling`}>Styling Learning </Link>
              </li>
              <li>
                <a href={`redux`}>React Redux</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
  );
}

export default Root;
