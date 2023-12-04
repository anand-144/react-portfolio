import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav__logo">
        <span>A</span><span className='dot'>.</span>
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <div className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
                <span className="icon-text">Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
                <span className="icon-text">About</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="icon-briefcase"></i>
                <span className="icon-text">Services</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
                <span className="icon-text">Experiences</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i>
                <span className="icon-text">Portfolio</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-phone"></i>
                <span className="icon-text">Contact</span>
              </a>
            </li>
          </div>
        </div>
      </nav>

      <div className='nav__footer'>
        <span className="copyright">&copy; Anand Singh 2023-2024.</span>
      </div>
    </aside>
  );
}

export default Sidebar;
