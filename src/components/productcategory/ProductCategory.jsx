import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import sslLenta from './ssl-lenta.png';
import sslFree from './ssl-free.png';
import pciLogo from './pci-logo.png';

const ProductCategory = ({ language }) => {
    return (
        <div className='productCategory'>
            <div className="containerProduct">
                <h1>
                    {language === 'ru' 
                        ? "Хостинг в Узбекистане" 
                        : "O'zbekistonda xosting"}
                </h1>
                <div className="rowProduct">
                    <p>
                        {language === 'ru' 
                            ? "Предоставляем оптимальный хостинг для веб-проектов и предлагаем круглосуточную техническую поддержку. Облако и VPS сертифицированы по международному стандарту безопасности PCI DSS 3.2.1. Подходит для хранения данных платежных карт" 
                            : "Veb-loyihalar uchun optimal xostingni taqdim etamiz va 24/7 texnik yordamni taklif qilamiz. Bulut va VPS PCI DSS 3.2.1 xalqaro xavfsizlik standarti bo'yicha sertifikatlangan. To'lov kartalari ma'lumotlarini saqlash uchun mos keladi"}
                    </p>
                    <div className="left-row">
                        <Link href="">
                            <h2 className='rowbtnText'>
                                {language === 'ru' ? "Протестируйте" : "Sinab ko'ring"}
                            </h2>
                            <p style={{ color: 'white' }} className='rowbtnText2'>
                                {language === 'ru' ? "наши услуги бесплатно" : "xizmatlarimizni bepul sinab ko'ring"}
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="product_wrapper">
                    <div className="product_item">
                        <div className="item-logo1">
                            <img src='https://pscloud.uz/assets/images/shared.svg' alt="" />
                        </div>
                        <img className="lenta" src={sslLenta} alt="" />
                        <img className='Free' src={sslFree} alt="" />
                        <Link className='xosting' href='#'>
                            {language === 'ru' ? "Хостинг сайтов" : "Veb-saytlar uchun xosting"}
                        </Link>
                        <div className="item-text">
                            <h5>
                                {language === 'ru' ? "от 26 400 сум в месяц" : "oyiga 26 400 so'mdan"}
                            </h5>
                            <p>
                                {language === 'ru' ? "Надёжный и недорогой виртуальный хостинг." : "Ishonchli va arzon virtual xosting."}
                            </p>
                        </div>
                        <Link className='share' hrefLang='#'>
                            {language === 'ru' ? "Подробнее" : "Batafsil"}
                        </Link>
                    </div>
                    <div className="product_item">
                        <div className="item-logo2">
                            <img src='https://pscloud.uz/assets/images/cloudvps.svg' alt="" />
                        </div>
                        <img className='PCI' src={pciLogo} alt="" />
                        <Link className='xosting' href='#'>
                            {language === 'ru' ? "Облачные VPS" : "Bulutli VPS"}
                        </Link>
                        <div className="item-text">
                            <h5>
                                {language === 'ru' ? "от 84 000 сум в месяц" : "oyiga 84 000 so'mdan"}
                            </h5>
                            <p>
                                {language === 'ru' ? "Особые возможности для посещаемых сайтов." : "Tashrif buyuriladigan saytlar uchun maxsus imkoniyatlar."}
                            </p>
                        </div>
                        <Link className='share' hrefLang='#'>
                            {language === 'ru' ? "Подробнее" : "Batafsil"}
                        </Link>
                    </div>
                    <div className="product_item">
                        <div className="item-logo3">
                            <img id='vcn' src='https://pscloud.uz/assets/images/products/vpc.png' alt="" />
                        </div>
                        <img className='PCI' src={pciLogo} alt="" />
                        <Link className='xosting' href='#'>
                            {language === 'ru' ? "Облачный сервер" : "Bulutli server"}
                        </Link>
                        <div className="item-text">
                            <h5>
                                {language === 'ru' ? "от 340 000 сум в месяц" : "oyiga 340 000 so'mdan"}
                            </h5>
                            <p>
                                {language === 'ru' 
                                    ? "Виртуальный дата‑центр, для задач любой сложности." 
                                    : "Virtual data-markaz, har qanday murakkablikdagi vazifalar uchun."}
                            </p>
                        </div>
                        <Link className='share' hrefLang='#'>
                            {language === 'ru' ? "Подробнее" : "Batafsil"}
                        </Link>
                    </div>
                </div>
                <div className="news">
                    <div className="newsContainer">
                        <div className="newsTextCenter">
                            <Link style={{ borderBottom: '1px solid #464646' }} className='newsTextCenter-text'>
                                {language === 'ru' ? "Новости" : "Yangiliklar"}
                            </Link>
                            <p className='newsTextCenter-text'>
                                {language === 'ru' ? "и сообщения" : "va xabarlar"}
                            </p>
                        </div>
                        <div className="newsRow">
                            <div className="newsRow-item">
                                <Link className='newsRow-item-a'>
                                    {language === 'ru' ? "Розыгрыш подарков за участие в опросе" : "So'rovda qatnashganlarga sovg'alar taqsimoti"}
                                </Link>
                                <p className='newsRow-item-p'>7 июня 2024</p>
                            </div>
                            <div className="newsRow-item">
                                <Link className='newsRow-item-a'>
                                    {language === 'ru' 
                                        ? "Новые тарифы на регистрацию доменов .UZ с 1 июля 2024 года" 
                                        : "2024 yil 1 iyuldan .UZ domenlarini ro'yxatga olish uchun yangi tariflar"}
                                </Link>
                                <p className='newsRow-item-p'>5 июня 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment">
                    <div className="paymentContainer">
                        <Link style={{ borderBottom: '1px solid #464646' }} className='newsTextCenter-text'>
                            {language === 'ru' ? "Способы оплаты" : "To'lov usullari"}
                        </Link>
                        <div className="payment-types">
                            <img className='payment-img1' src="https://pscloud.uz/upload/content/36/humo.png" alt="" />
                            <img className='payment-img2' src="https://pscloud.uz/upload/content/36/uzcard.png" alt="" />
                            <img className='payment-img3' src="https://pscloud.uz/upload/content/36/visa.png" alt="" />
                            <img className='payment-img4' src="https://pscloud.uz/upload/content/36/mastercard.png" alt="" />
                            <img className='payment-img5' src="https://pscloud.uz/upload/content/36/payme.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="gap"></div>
            </div>
        </div>
    );
};

export default ProductCategory;
