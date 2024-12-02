import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const DomainBlocks = ({ language }) => {
    return (
        <div className='domain-block'>
            <div className="container">
                <h1 className='h1'>
                    {language === 'ru' 
                        ? "Домены в зоне .UZ за 30 500 сум в год" 
                        : ".UZ zonadagi domenlar yiliga 30 500 so'm"}
                </h1>
                <div className="promotion">
                    <div className="check-domain">
                        <div className="check-domain-form">
                            <input placeholder={language === 'ru' ? 'Введите имя домена' : 'Domen nomini kiriting'} className='domain-search' type="search" />
                            <Link style={{ color: 'gray' }} className='hwois'>
                                {language === 'ru' ? 'Whois' : 'Whois'}
                            </Link>
                            <button type='submit'>
                                {language === 'ru' ? 'Подобрать' : 'Tanlash'}
                            </button>
                        </div>
                    </div>
                    <div className="promotion-footer">
                        <Link href='#'>
                            {language === 'ru' 
                                ? "Правила регистрации и пользования доменными именами в домене «UZ»" 
                                : "UZ domenida domen nomlarini ro'yxatga olish va ulardan foydalanish qoidalari"}
                        </Link>
                    </div>
                </div>
                <Link className='connect' href="">
                    {language === 'ru' 
                        ? "Перенести домен к нам" 
                        : "Domenni bizga o'tkazish"}
                </Link>
            </div>
        </div>
    );
};

export default DomainBlocks;
