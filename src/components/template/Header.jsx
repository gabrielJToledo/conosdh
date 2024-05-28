import React from 'react';
import './Header.css';
import { logo, linkLogo, menu, phone } from '../../global';
import { Link, animateScroll as scroll } from 'react-scroll';
import talkToUs from '../../assets/talkToUs.png';

// Importing Components
import TopContact from './TopContact';

function Header() {
  return (
    <header className="header">
      {/* <TopContact/> */}
      
      <div className="c-headerComponent">
        <div className="c-headerComponent__headerContainer">
          <div className="c-headerComponent__logo">
            <Link to={linkLogo}>
              <img className='c-headerComponent__logo' src={logo} alt="Logo" />
            </Link>
          </div>

          <nav className="c-headerComponent__nav">
            <ul className="c-headerComponent__firstUl">
              {menu.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    activeClass="active"
                    to={menuItem.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="c-headerComponent__link"
                  >
                    {menuItem.menuName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='c-headerWPPLink'>
            <a title='Whatsapp' href='#default'><img src={talkToUs} alt="Whatsapp" /></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
