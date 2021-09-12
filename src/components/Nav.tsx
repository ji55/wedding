import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <Link className="navLinkLeft" to="/about-us">
        About Us
      </Link>
      <Link className="navLinkLeft" to="/">
        Story
      </Link>
      <Link className="navLinkLeft" to="/">
        Gallery
      </Link>
      <Link className="navLogo" to="/">
        Liam ❤ Emma
      </Link>
      <Link className="navLinkRight" to="/">
        The Wedding
      </Link>
      <Link className="navLinkRight" to="/">
        Registry
      </Link>
      <Link className="navLinkRight" to="/">
        RSVP
      </Link>
    </div>
  )
}

export default Nav
