import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = ({ setLanguage, language }) => {
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div className='navbarContainer'>
            <div className="header_wrapper">
                <div className="header_left">
                    <Link to='/'>
                        <div className="header_logo">
                            <img src="https://pscloud.uz/assets/images/pscs_logo.svg" alt="" />
                        </div>
                    </Link>
                    <div className="header_language">
                        <select value={language} onChange={handleLanguageChange}>
                            <option value="ru">Tilni tanlang</option>
                            <option value="uz">Uzbek</option>
                            <option value="ru">Russian</option>
                        </select>
                    </div>
                </div>
                <div className="header_right">
                    <div className="header_contact">
                        <Link id='connectMe' href="#">
                            {language === 'ru' ? "Связаться с нами" : "Biz bilan bog'lanish"}

                        </Link>
                    </div>
                    <div className="header_basket">
                        <img src="https://pscloud.uz/assets/images/header/basket.png" alt="" />
                        <span>0</span>
                    </div>
                    <div className="header_auth">
                        <Link href="#">
                            {language === 'ru' ? "Вход" : "Kirish"}
                        </Link>
                        /
                        <Link href="#">
                        {language === 'ru' ? "Регистрация" : "Registratsiya"}
                            
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
