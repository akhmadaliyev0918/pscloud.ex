import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const MainNav = ({ setLanguage, language }) => {
  const [activeModal, setActiveModal] = useState(null); // Qaysi modal ochilganligini saqlaydi
  const modalRef = useRef(null);

  const handleModalClose = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActiveModal(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = (modalType) => {
    if (activeModal === modalType) {
      setActiveModal(null);
    } else {
      setActiveModal(modalType);
    }
  };

  return (
    <div className="MainNavContainer">
      <div className="main-menu">
        <button
          className={activeModal === 'domains' ? 'active' : ''}
          onClick={() => handleButtonClick('domains')}
        >
          {language === 'ru' ? "Домены" : "Domenlar"}
        </button>
        <button
          className={activeModal === 'hosting' ? 'active' : ''}
          onClick={() => handleButtonClick('hosting')}
        >
          {language === 'ru' ? "Хостинг и серверы" : "Xosting va serverlar"}
        </button>
        <button
          className={activeModal === 'services' ? 'active' : ''}
          onClick={() => handleButtonClick('services')}
        >
          {language === 'ru' ? "Другие услуги" : "Boshqa xizmatlar"}
        </button>
        <button
          className={activeModal === 'company' ? 'active' : ''}
          onClick={() => handleButtonClick('company')}
        >
          {language === 'ru' ? "О компании" : "Kompaniya haqida"}
        </button>
        <Link style={{ textDecoration: 'none' }}>
          <button
            className={activeModal === 'account' ? 'active' : ''}
            onClick={() => handleButtonClick('account')}
          >
            {language === 'ru' ? "Личный кабинет" : "Shaxsiy kabinet"}
          </button>
        </Link>

        {activeModal === 'domains' && (
          <div className="modal" ref={modalRef}>
            <div style={{ margin: "0 200px 5px 5px" }} className="modal-item1">
              <h1 className='modal-head-title'>{language === 'ru' ? "Регистрация" : "Ro'yxatdan o'tish"}</h1>
              <div className="modal-link">
                <Link onClick={() => handleModalClose()} to='/domains'>
                  {language === 'ru' ? "Купить домен" : "Domen sotib olish"}
                </Link>
                <Link>
                  {language === 'ru' ? "Трансфер доменов" : "Domenlar o'tkazish"}
                </Link>
              </div>
            </div>
            <div className="modal-item1">
              <h1 className='modal-head-title'>{language === 'ru' ? "Инструменты" : "Asboblar"}</h1>
              <div className="modal-link">
                <Link>
                  {language === 'ru' ? "WHOIS — проверить домен" : "WHOIS — domenni tekshirish"}
                </Link>
              </div>
            </div>
            <div className="modal-item1">
              <h1 className='modal-head-title'>{language === 'ru' ? "Другие услуги" : "Boshqa xizmatlar"}</h1>
              <div className="modal-link">
                <Link>
                  {language === 'ru' ? "NFT-сертификат для домена" : "Domen uchun NFT-sertifikat"} 
                  <div className="newico">New</div>
                </Link>
              </div>
            </div>
          </div>
        )}
        {activeModal === 'hosting' && (
          <div className="modal" ref={modalRef}>
            <div style={{ margin: "0 110px 5px 5px" }} className="modal-item1">
              <h1 className='modal-head-title'>{language === 'ru' ? "Классический хостинг" : "Klassik xosting"}</h1>
              <div className="modal-link">
                <Link>{language === 'ru' ? "Хостинг сайтов" : "Saytlar xostingi"}</Link>
                <Link>{language === 'ru' ? "Облачные VPS" : "Bulutli VPS"}</Link>
                <Link>{language === 'ru' ? "Конструктор сайтов" : "Sayt quruvchisi"}</Link>
              </div>
            </div>
            <div className="modal-item1">
              <h1 className='modal-head-title'>{language === 'ru' ? "Облачный хостинг" : "Bulutli xosting"}</h1>
              <div className="modal-link">
                <Link>{language === 'ru' ? "Облачные серверы" : "Bulutli serverlar"}</Link>
                <Link>{language === 'ru' ? "Объектное хранилище" : "Obyekt saqlash"}</Link>
              </div>
            </div>
            <div className="modal-item1">
              <h1 className='modal-head-title'>{language === 'ru' ? "Услуги дата-центра" : "Ma'lumot markazi xizmatlari"}</h1>
              <div className="modal-link">
                <Link>{language === 'ru' ? "Аренда серверов (Dedicated)" : "Serverlarni ijaraga olish (Dedicated)"}</Link>
                <Link>{language === 'ru' ? "Размещение серверов (Colocation)" : "Serverlarni joylashtirish (Colocation)"}</Link>
              </div>
            </div>
          </div>
        )}
        {activeModal === 'services' && (
          <div className="modal" ref={modalRef}>
            <div style={{ margin: "0 130px 5px 5px" }} className="modal-item1">
              <h1 className='modal-head-title'>{language === 'ru' ? "Панели управления" : "Boshqaruv panellari"}</h1>
              <div className="modal-link">
                <Link>{language === 'ru' ? "ISPmanager" : "ISPmanager"} <div className="newico1">New</div></Link>
                <Link>{language === 'ru' ? "Plesk" : "Plesk"}<div className="newico2">New</div></Link>
              </div>
            </div>
            <div className="modal-item1">
              <h1 className='modal-head-title'>{language === 'ru' ? "Защита сайта" : "Saytni himoya qilish"}</h1>
              <div className="modal-link">
                <Link>{language === 'ru' ? "SSL‑сертификаты" : "SSL‑sertifikatlar"}</Link>
              </div>
            </div>
          </div>
        )}
        {activeModal === 'company' && (
          <div className="modal" ref={modalRef}>
            <div style={{ margin: "0 180px 5px 5px" }} className="modal-item1">
              <h1 className='modal-head-title'>{language === 'ru' ? "О нас" : "Biz haqimizda"}</h1>
              <div className="modal-link">
                <Link>{language === 'ru' ? "О компании" : "Kompaniya haqida"}</Link>
                <Link>{language === 'ru' ? "Способы оплаты услуг" : "Xizmatlar uchun to'lov usullari"}</Link>
                <Link>{language === 'ru' ? "Карьера" : "Karyera"}</Link>
                <Link>{language === 'ru' ? "Контакты" : "Aloqa"}</Link>
              </div>
            </div>
            <div className="modal-item1">
              <h1 className='modal-head-title'>{language === 'ru' ? "Документы компании" : "Kompaniya hujjatlari"}</h1>
              <div className="modal-link">
                <Link>{language === 'ru' ? "Все документы" : "Barcha hujjatlar"}</Link>
                <Link>{language === 'ru' ? "Публичный договор (оферта)" : "Jamoat shartnomasi (offer)"}</Link>
                <Link>{language === 'ru' ? "Учредительные документы" : "Ta'sis hujjatlari"}</Link>
              </div>
            </div>
            <div className="modal-item1">
              <h1 className='modal-head-title'>{language === 'ru' ? "Полезная информация" : "Foydali ma'lumotlar"}</h1>
              <div className="modal-link">
                <Link>{language === 'ru' ? "Новости компании" : "Kompaniya yangiliklari"}</Link>
                <Link>{language === 'ru' ? "Партнеры" : "Hamkorlar"}</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNav;
