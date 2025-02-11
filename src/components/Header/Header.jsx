import React from 'react';
import logo from '../../images/logo-move.svg';
import './Header.css'
//сделать логотип ссылкой на главнудю стр

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <ul className="header__ul">
                    <li className='header__list-logo'>
                        <a className='header__link-logo' href="#"><img src={logo} alt="header logo" className="header__logo"/></a>
                    </li>
                    <li className='header__list'>
                        <a className='header__link' href="#">Фильмы</a>
                    </li>
                    <li  className='header__list'>
                        <a className='header__link' href="#">Сериалы</a>
                    </li>
                    <li className='header__list'>
                        <a className='header__link' href="#">TV</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;