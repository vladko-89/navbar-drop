import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [dropdown, setDropdown] = useState(null);




  return (
    <>
      <nav className='navbar'>
        <Link to='/location' className='navbar-logo' >
          ICON
        </Link>

        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/location' className='nav-links' >
              Офисы
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/devices' className='nav-links' >
              Оборудование
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={() => setDropdown(2)}
            onMouseLeave={() => setDropdown(null)}
          >
            <Link
              className='nav-links'

            >
              Phones <i className='fas fa-caret-down' />
            </Link>
            {(dropdown === 2) && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={() => setDropdown(3)}
            onMouseLeave={() => setDropdown(null)}
          >
            <Link
              className='nav-links'

            >
              IP Planing <i className='fas fa-caret-down' />
            </Link>
            {(dropdown === 3) && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/reports'
              className='nav-links'

            >
              Reports
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={() => setDropdown(5)}
            onMouseLeave={() => setDropdown(null)}
          >
            <Link
              className='nav-links'

            >
              Phones Reports <i className='fas fa-caret-down' />
            </Link>
            {(dropdown === 5) && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={() => setDropdown(6)}
            onMouseLeave={() => setDropdown(null)}
          >
            <Link
              className='nav-links'

            >
              Tools <i className='fas fa-caret-down' />
            </Link>
            {(dropdown === 6) && <Dropdown />}
          </li>
        </ul>
        <div className='wrapper nav-item'
          onMouseEnter={() => setDropdown(0)}
          onMouseLeave={() => setDropdown(null)}>
          <Link
            className='nav-links'


          >
            Справочники <i className='fas fa-caret-down' />
          </Link>
          {(dropdown === 0) && <Dropdown />}
        </div>

      </nav>
    </>
  );
}

export default Navbar;
