import React from 'react';
import { Link } from 'react-router-dom';
import i1 from '../../images/i1.png';
import i2 from '../../images/i2.png';
import i3 from '../../images/i3.png';
import i4 from '../../images/i4.png';
import i5 from '../../images/i5.png';

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas border border-secondary-subtle border-start-0 border-top-0 border-bottom-0 sidebar-contain" id="sidebar">
        <ul className="nav">
          <li>
            <Link to="/">
              <img src={i2} className="menu-icon img-width" alt="Icon 1" />
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/upload">
              <img src={i3} className="menu-icon img-width" alt="Icon 2" />
            </Link>
          </li>
          <li className="mt-2">
            <Link to="">
              <img src={i1} className="menu-icon img-width" alt="Icon 3" />
            </Link>
          </li>
          <li className="mt-2">
            <Link to="">
              <img src={i4} className="menu-icon img-width" alt="Icon 4" />
            </Link>
          </li>
          <li className="mt-2">
            <Link to="">
              <img src={i5} className="menu-icon img-width" alt="Icon 5" />
            </Link>
          </li>
          {/* Add SVG Icons */}
          <li className="mt-2">
            <Link to="">
              <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-icon img-width">
                <g opacity="0.5">
                  <path d="M0.960938 0.245163V32.5452H33.2609V0.245163H0.960938ZM11.0547 23.7131V9.01411L25.1859 16.3952L11.0547 23.7131Z" fill="white" />
                </g>
              </svg>
            </Link>
          </li>
          <li className="mt-2">
            <Link to="">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.710205" y="0.12085" width="24" height="12" fill="white"/>
              <rect x="0.710205" y="16.0876" width="24" height="4" fill="white"/>
              <rect x="0.710205" y="24.0546" width="24" height="4" fill="white"/>
            </svg>

            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
