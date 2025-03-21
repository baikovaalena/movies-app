import React from "react";
import logo from "../../img/logo-movie.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <ul className="header__ul">
        <li className="header__item-logo">
          <a className="header__link-logo" href="/">
            <img src={logo} alt="header logo" className="header__logo" />
          </a>
        </li>

        <li className="header__list">
          <a className="header__link" href="/">
            Movies
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
