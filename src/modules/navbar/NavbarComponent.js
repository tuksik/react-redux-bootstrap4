import React from 'react'
import { Link } from 'react-router'
import IntlDropdown from '../intl-dropdown/IntlDropdownContainer'

export default function NavbarComponent() {
  return (
    <nav className="navbar navbar-static-top navbar-light bg-faded m-b-1">
      <Link to="/" className="navbar-brand">Home</Link>
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/counter" className="nav-link">Counter</Link>
        </li>
        <li className="nav-item pull-xs-right">
          <IntlDropdown />
        </li>
      </ul>
    </nav>
  )
}
