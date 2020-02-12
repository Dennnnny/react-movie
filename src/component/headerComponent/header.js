import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// component 
// import Carousel from './Carousel';
// items 
import LogoImage from '../../Assets/images/logo.jpg';

function Header() {

  return (
    <div>

      <header>

        <div className="logo">
          <img src={LogoImage} alt="logo" width="50px" height="50px" />
        </div>

        <nav>
          <ul>
            <li> <Link to='/'>Home</Link> </li>

            <li> <Link to="/Homepage2"> Home2</Link> </li>

            <li> <Link to="/Homepage3"> Oscar</Link> </li>

            <li> <a href="/"> Home4</a> </li>

            <li> <a href="/"> Home5</a> </li>
          </ul>
        </nav>

      </header>


    </div>
  );
}

export default Header;
