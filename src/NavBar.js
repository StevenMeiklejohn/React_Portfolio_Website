import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <header>



<div class="lines">
        <span>
        <div class="navLine">
        <div class="line1">
          <Link class="navText" to="/" style={{ textDecoration: 'none' }}>Home</Link>
          </div>
          </div>
        </span>
        <span>
        <div class="navLine">
        <div class="line1">
          <Link class="navText" to="/portfolio" style={{ textDecoration: 'none' }}>Portfolio</Link>
          </div>
          </div>
        </span>
        <span>
        <div class="navLine">
        <div class="line1">
          <Link class="navText" to="/experience" style={{ textDecoration: 'none' }}>Experience</Link>
          </div>
          </div>
        </span>
        <span>
        <div class="navLine">
        <div class="line1">
          <Link class="navText" to="/pixelart" style={{ textDecoration: 'none' }}>Pixel Art</Link>
          </div>
          </div>
        </span>
        <span>
        <div class="navLine">
        <div class="line1">
          <Link class="navText" to="/sketches" style={{ textDecoration: 'none' }}>Sketches</Link>
          </div>
          </div>
        </span>
    </div>

    </header>
  )
}

export default NavBar;