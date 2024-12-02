import React, { useState } from 'react';
import './style.css';
import parallax from './images/parallax1.jpg';
import parallax2 from './images/parallax2.jpg';
import Ico1 from './images/1.png'
import Ico2 from './images/2.png'
import Ico3 from './images/3.png'
import control from './images/joystick.png'

import { Link } from 'react-router-dom';

const Domains = ({ language }) => {
    const [switchOn, setSwitchOn] = useState(false);

    return (
        <div className='domain'>
            <img className='bg-image-1' src={parallax} alt="" />
            <div className="domains_head">
                <div className="domain-head-title">
                    {language === "ru" ? "Купить домен UZ" : "UZ domenini sotib oling"}
                </div>
                <div className="domain-head-text">
                    {language === "ru" ? "Выберите доменное имя для вашего сайта в зоне .UZ." : "Saytingiz uchun .UZ zonasi uchun domen nomini tanlang."}
                </div>
                <div className="domain-head-check">
                    <div className="domain-check-form">
                        <div className="check-form">
                            <input placeholder={language === "ru" ? 'Введите имя домена или слово' : 'Domen nomi yoki so\'zni kiriting'} className='check-form-input' type="search" name="" id="" required />
                            <button className='check-form-button'>{language === "ru" ? 'Проверить' : 'Tekshirish'}</button>
                        </div>
                    </div>
                    <div className="domain-check-footer">
                        <Link>{language === "ru" ? "Правила регистрации и пользования доменными именами в домене «UZ»" : "«UZ» domenida domen nomlarini ro'yxatdan o'tkazish va ulardan foydalanish qoidalari"}</Link>
                    </div>
                </div>
                <div className="domains-head-additional">
                    <p className='text12'>{language === "ru" ? "Обратите внимание, что стоимость регистрации и продления в некоторых доменных зонах может различаться. Иногда на регистрацию домена предоставляется скидка, а продлевается он уже по обычной цене" : "E'tibor bering, ba'zi domen zonalarida ro'yxatdan o'tish va uzaytirish narxlari farq qilishi mumkin. Ba'zan domenni ro'yxatdan o'tkazishda chegirma beriladi, lekin uni odatdagi narxda uzaytirish kerak bo'ladi."}</p>
                    <div className="domains_switch">
                        <div className={`switch-register ${switchOn ? 'active' : ''}`} onClick={() => setSwitchOn(false)}>{language === "ru" ? "Регистрация" : "Ro'yxatdan o'tish"}</div>
                        <div
                            className={`switch ${switchOn ? 'active' : ''}`}
                            onClick={() => setSwitchOn(!switchOn)}
                        ></div>
                        <div className={`switch-prod ${!switchOn ? 'active' : ''}`} onClick={() => setSwitchOn(true)}>{language === "ru" ? "Продление" : "Muddatni uzaytirish"}</div>
                    </div>
                </div>
                <div className="domains_body">
                    <h2 className='domains_body-title'>{language === "ru" ? "Преимущества и возможности PSCloud.uz" : "PSCloud.uz ning afzalliklari va imkoniyatlari"}</h2>
                    <div className="domain_features">
                        <div className="domain_feature">
                            <div className="feature-icon">
                                <img src={Ico1} alt="" />
                            </div>
                            <div className="feature-text">
                                {language === "ru" ? "Официальный регистратор" : "Rasmiy ro'yxatga oluvchi"}
                                <div className="feature-text-bottom">
                                    {language === "ru" ? "Регистрируем домены c 2023 года" : "2023-yildan beri domenlarni ro'yxatdan o'tkazamiz."}
                                </div>
                            </div>

                        </div>
                        <div className="domain_feature">
                            <div className="feature-icon">
                                <img src={Ico2} alt="" />
                            </div>
                            <div className="feature-text">
                                {language === "ru" ? "DNS-хостинг" : "DNS-Xosting"}
                                <div className="feature-text-bottom">
                                    {language === "ru" ? "Предоставляем нашим клиентам бесплатно" : "Mijozlarimizga bepul taqdim etamiz"}
                                </div>
                            </div>

                        </div>
                        <div className="domain_feature">
                            <div className="feature-icon">
                                <img src={Ico3} alt="" />
                            </div>
                            <div className="feature-text">
                                {language === "ru" ? "Личный кабинет" : "Shaxsiy Kabinent"}
                                <div className="feature-text-bottom">
                                    {language === "ru" ? "Удобный при работе с доменными именами" : "Domen nomlari bilan ishlashda qulay"}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="between"></div>
                </div>
            </div>
            <div className="domain_footer">
                <div className="domain-link">
                    <h1 className='domain_footer-title'>{language === "ru" ? "Домены в зоне .UZ" : ".UZ zonasidagi domenlar"}</h1>
                    <p className='domain_footer-text'>
                        {language === "ru" ?
                            "Мы предлагаем различные списки и инструменты для поиска нужных доменов .UZ. Также просим обратить внимание на правила регистрации доменных имен в этой зоне."
                            :
                            "Biz .UZ zonasi uchun kerakli domenlarni qidirish uchun turli ro'yxatlar va vositalarni taklif qilamiz. Shuningdek, ushbu zonadagi domen nomlarini ro'yxatdan o'tkazish qoidalariga e'tibor berishingizni so'raymiz."
                        }
                    </p>
                    <Link className='domain_footer-item'>

                        {language === "ru" ?
                            `Правила регистрации и пользования доменными именами в домене «UZ»`
                            :
                            "«UZ» domenidagi domen nomlarini ro'yxatdan o'tkazish va ulardan foydalanish qoidalari"
                        }

                    </Link>
                </div>
            </div>
            <div className="domain_control">
                <div className="domain_control-row">
                    <div className="remote-img">
                        <img className='controlimg' src={control} alt="" />
                    </div>
                    <div className="domain_control-text">
                        <h1 className='domain_control-title'>
                            {language === "ru" ?
                                "Инструменты для работы с доменными именами"
                                :
                                "Domen nomlari bilan ishlash uchun vositalar"
                            }
                        </h1>
                        <div className="domain_control-list">
                            <Link>
                                {language === "ru" ?
                                    "Подбор имени домена"
                                    :
                                    "Domen nomini tanlash"
                                }
                            </Link>
                            <Link>
                                {language === "ru" ?
                                    "Локальный трансфер"
                                    :
                                    "Mahalliy transfer"
                                }
                            </Link>
                            <Link>
                                {language === "ru" ?
                                    "API для домена"
                                    :
                                    "Domen uchun API"
                                }
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="domain-end">
                <div className="domain-end-titles">
                    <p>
                        {language === "ru" ?
                            "Домен или доменное имя — это алфавитное, цифровое или алфавитно-цифровое обозначение, являющееся необходимым элементом адреса, который используется в Интернете. Регистрация доменов в зоне .UZ началась 1995 году. На 2023 год в зоне .UZ насчитывается 125 000 доменных имен."
                            :
                            "Domen yoki domen nomi — bu internetda ishlatiladigan manzillar uchun zarur bo'lgan harflar, raqamlar yoki harf-raqam kombinatsiyasini bildiradi. .UZ zonasi uchun domenlarni ro'yxatdan o'tkazish 1995-yilda boshlangan. 2023-yil holatiga ko'ra, .UZ zonasi bo'yicha 125 000 ta domen nomi mavjud."
                        }
                    </p>
                    <p>
                        {language === "ru" ?
                            "Мы, PS Cloud Services являемся аккредитованным регистратором доменов в зоне .UZ (https://www.cctld.uz/reg/reginfo/?id=48)."
                            :
                            "Biz, PS Cloud Services, .UZ zonasi bo'yicha akkreditatsiyalangan domen ro'yxatga oluvchisimiz (https://www.cctld.uz/reg/reginfo/?id=48)."
                        }
                    </p>
                    <p>
                        {language === "ru" ?
                            "Покупка доменных имен доступна как для физических лиц, так и для юридических, резидентов и нерезидентов Республики Узбекистан, которые заключили договор на оказание услуг в письменном виде или же приняли условия оферты при заказе услуг на сайте pscloud.uz"
                            :
                            "Domen nomlarini sotib olish imkoniyati O‘zbekiston Respublikasi rezidentlari va rezident bo‘lmagan shaxslar uchun, shuningdek, huquqiy va jismoniy shaxslar uchun mavjud. Domen sotib olish uchun pscloud.uz saytida xizmat ko‘rsatish shartlarini yozma shaklda imzolangan shartnoma asosida yoki taklif shartlariga rozilik bildirgan holda amalga oshiriladi."
                        }
                    </p>
                    <p>
                        {language === "ru" ?
                            "После выбора подходящего домена и его успешной регистрации мы рекомендуем приобрести хостинг и готовы предоставить варианты под любую задачу."
                            :
                            "Mos keluvchi domen tanlab, muvaffaqiyatli ro‘yxatdan o‘tkazilgandan so‘ng, biz sizga veb-xosting sotib olishni tavsiya qilamiz va har qanday vazifa uchun mos variantlarni taqdim etishga tayyormiz."
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Domains;
