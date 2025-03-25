import React from "react";
import logo from "../../img/logo-movie.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <ul className="header__ul">
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
