import React from 'react';
import './style.css';
import psi from './psi-logo.png';
import { Link } from 'react-router-dom';

const Footer = ({ language }) => {
    return (
        <div className='footer'>
            <div className="meta-info">
                <div className="meta-infoContainer">
                    <p>
                        {language === 'ru' 
                            ? "© 2024 ИП ООО «PS Cloud Services» — хостинг и регистрация доменов в Узбекистане" 
                            : "© 2024 ИП ООО «PS Cloud Services» — O'zbekistonda xosting va domenlarni ro'yxatdan o'tkazish"}
                    </p>
                </div>
            </div>
            <div className="footerBottom">
                <div className="footer-nav">
                    <div className="footer-nav-item">
                        <h3 className='footer-nav-item-title'>
                            {language === 'ru' ? "Домены" : "Domenlar"}
                        </h3>
                        <div className="footer-links">
                            <a className='footer-nav-item-link' href='#'>
                                {language === 'ru' ? "Купить домен" : "Domen sotib olish"}
                            </a>
                            <a className='footer-nav-item-link' href='#'>
                                {language === 'ru' ? "Whois" : "Whois"}
                            </a>
                        </div>
                    </div>
                    <div className="footer-nav-item">
                        <h3 className='footer-nav-item-title'>
                            {language === 'ru' ? "Хостинг в Узбекистане" : "O'zbekistonda xosting"}
                        </h3>
                        <div className="footer-links">
                            <a className='footer-nav-item-link' href='#'>
                                {language === 'ru' ? "Хостинг сайтов" : "Veb-saytlar uchun xosting"}
                            </a>
                            <a className='footer-nav-item-link' href='#'>
                                {language === 'ru' ? "Облачные VPS" : "Bulutli VPS"}
                            </a>
                            <a className='footer-nav-item-link' href='#'>
                                {language === 'ru' ? "Облачные серверы" : "Bulutli serverlar"}
                            </a>
                            <a className='footer-nav-item-link' href='#'>
                                {language === 'ru' ? "Объектное хранилище" : "Ob'ekt saqlash"}
                            </a>
                        </div>
                    </div>
                    <div className="footer-nav-item">
                        <h3 className='footer-nav-item-title'>
                            {language === 'ru' ? "О компании" : "Kompaniya haqida"}
                        </h3>
                        <div className="footer-links">
                            <a className='footer-nav-item-link' href='#'>
                                {language === 'ru' ? "О компании" : "Kompaniya haqida"}
                            </a>
                            <a className='footer-nav-item-link' href='#'>
                                {language === 'ru' ? "Учредительные документы" : "Asos soluvchi hujjatlar"}
                            </a>
                            <a className='footer-nav-item-link' href='#'>
                                {language === 'ru' ? "Публичный договор (оферта)" : "Jamoat shartnomasi (offer)"}
                            </a>
                            <a className='footer-nav-item-link' href='#'>
                                {language === 'ru' ? "Контакты" : "Aloqa"}
                            </a>
                        </div>
                    </div>
                    <div className="footer-nav-item">
                        <p className='footer-end'>
                            {language === 'ru' ? "Сертифицировано по стандарту PCI DSS 3.2.1" : "PCI DSS 3.2.1 standarti bo'yicha sertifikatlangan"}
                        </p>
                        <Link className='footer-logo'>
                            <img src={psi} alt="" />
                        </Link>
                    </div>
                    <div className="footer-nav-item"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
