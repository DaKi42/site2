import React from 'react';
import './Footer.css';
import googlePayIcon from '../images/googleplay.svg';
import applePayIcon from '../images/applepay.svg';
import visaIcon from '../images/visa.svg';
import mastercardIcon from '../images/mastercard.svg';


import facebokIcon from '../images/facebook.svg';
import instaIcon from '../images/insta.svg';
import twitterIcon from '../images/twitter.svg';
import viberIcon from '../images/viber.svg';
import tiktokIcon from '../images/tiktok.svg';


const Footer = () => (
    <footer className="container footer-container">
        <div className="background-overlay"></div>
        <div className="row top-footer ">
            <div className="col-12 text-center col-sm-6 col-md-4 col-lg-3 p-2">
                <div className="footer-section">
                    <h1 className="mb-3">BOTANICA</h1>
                    <div className="my-3 row">
                        <span className="col-1 fas fa-phone"></span>
                        <div className="col-8">
                            <p>+380 95 955 95 95</p>
                            <p>+380 98 988 98 98</p>
                        </div>
                    </div>
                    <div className="my-3">
                        <div className="my-3 row">
                            <span className="col-1 fas fa-clock"></span>
                            <div className="col-9">
                                <p>Пн-Пт з 09:00 до 18:00</p>
                                <p>Сб-Нд з 10:00 до 17:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-2">
                <div className="footer-section">
                    <h4>НАШІ КАТЕГОРІЇ</h4>
                    <p>Новий рік та Різдво</p>
                    <p>Посуд і сервіровка</p>
                    <p>Свічки і аромати</p>
                    <p>Освітлення</p>
                    <p>Все для зберігання</p>
                    <p>Гід по декору</p>
                    <p>Ідеї подарунків</p>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 p-2">
                <div className="footer-section">
                    <h4>ПРО НАС</h4>
                    <p>Про компанію</p>
                    <p>Партнерам</p>
                    <p>Кар'єра</p>
                    <p>Контакти</p>
                    <p>Адреси магазинів</p>
                    <p>Для ЗМІ</p>
                    <p>Новини</p>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 p-2">
                <div className="footer-section">
                    <h4>ДОСТАВКА І ПОВЕРНЕННЯ</h4>
                    <p>Способи оплати</p>
                    <p>Вартість та час доставки</p>
                    <p>Методи повернення</p>
                    <p>Як відправити скаргу в магазин?</p>
                    <p>Гарантійні умови</p>
                </div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="row bottom-footer">
            <div className="col-12 col-lg-3 my-3 my-lg-0 p-0">
                <div className="social-icons text-center text-lg-left">
                    <img className="mx-2" src={facebokIcon} alt="Google Pay"/>
                    <img className="mr-2" src={instaIcon} alt="Google Pay"/>
                    <img className="mr-2" src={twitterIcon} alt="Google Pay"/>
                    <img className="mr-2" src={viberIcon} alt="Google Pay"/>
                    <img className="mr-2" src={tiktokIcon} alt="Google Pay"/>
                </div>
            </div>
            <div className="col-12 col-lg-6 my-3 my-lg-0 text-center p-0">
                <p className="m-0">© Інтернет-магазин «Botanica» 2023</p>
            </div>
            <div className="col-12 col-lg-3 my-3 my-lg-0 text-center text-lg-right p-0">
                <div className="payment-icons mx-2">
                    <img className="mr-2" src={googlePayIcon} alt="Google Pay"/>
                    <img className="mr-2" src={applePayIcon} alt="Google Pay"/>
                    <img className="mr-2" src={visaIcon} alt="Google Pay"/>
                    <img className="mr-2" src={mastercardIcon} alt="Google Pay"/>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
