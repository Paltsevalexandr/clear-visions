import React from 'react'
import './Header.scss';
import TopMenu from '../TopMenu/TopMenu';
import logo from '../../assets/images/logo/logo_cropped.png';

export default function Header({ showMenu, setShowMenu }) {
    function isTelegramWebView() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return /Telegram/i.test(userAgent);
    }

    let foo = typeof (navigator.userAgent || navigator.vendor || window.opera);
    console.log(foo)
    if (isTelegramWebView()) {
      alert("Открыто во встроенном браузере Telegram");
    } else {
      console.log(navigator.userAgent || navigator.vendor || window.opera);
    }
  
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img className="header__img" src={logo} alt="logo" />
      </a>
      {/* <span>{{ foo }}</span> */}
      <TopMenu />
      <div className="header__links">
        <a href="tel:+16474028637" className="header__link header__link--call">
          Call Us
        </a>
        <a
          style={{ display: "none" }}
          href="#"
          className="header__link header__link--quote"
        >
          Get a Free Quote
        </a>
      </div>
      <div
        className={`header__burger ${showMenu ? "active" : ""}`}
        onClick={setShowMenu}
      >
        <div className="header__burger-line"></div>
        <div className="header__burger-line"></div>
        <div className="header__burger-line"></div>
      </div>
    </header>
  );
}
