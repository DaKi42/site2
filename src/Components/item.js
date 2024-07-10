import React from 'react';
import './item.css';
import hits1Img from '../images/hits-1.png';

import acceptIcon from '../images/accept.svg';
import infoIcon from '../images/info.svg';

const Item = () => {


    return (
        <div className="container">
            <ul className="breadcrumb">
                <li><a href="/">Botanica</a></li>
                <li><a href="/">Каталог товарів</a></li>
                <li><a href="/accessories">Посуд</a></li>
                <li>Блюдо алюмінієве</li>
            </ul>

            <div className="row item-section">
                <div className="col-12 col-md-5 item-image">
                    <img src={hits1Img} alt="Блюдо алюмінієве" className="main-image"/>
                    <div className="thumbnail-row">
                        <img src={hits1Img} alt="Блюдо алюмінієве" className="thumbnail"/>
                    </div>
                </div>
                <div className="col-12 col-md-7 item-description px-0">
                    <div className="row">
                        <h1 className="col-12 col-md-9 p-0">Блюдо алюмінієве</h1>
                        <p className="col-12 col-md-3 m-0 px-0 article">Артикул: 111156</p>
                    </div>

                    <p>Є в наявності <img src={acceptIcon} alt="accept"/></p>
                    <h2 className="price">268₴</h2>
                    <div className="row bts-row">
                        <button className="buy-btn col-4">КУПИТИ</button>
                        <div className="quick-buy-container col-6 px-2">
                            <button className="quick-buy-btn">ШВИДКА ПОКУПКА</button>
                            <img src={infoIcon} alt="info" className="pl-3"/>
                        </div>
                    </div>

                    <div className="separator-line"></div>

                    <div className="description-box">
                        <div className="row">
                            <div className="col-12 col-md-5 details mt-0">
                                <h3>Характеристики</h3>
                                <p>Колір:<br/>
                                    <span>Сірий</span></p>
                                <p>Матеріал:<br/>
                                    <span>Алюміній</span></p>
                                <p>Подія:<br/>
                                    <span>Новий рік</span></p>
                            </div>

                            <div className="col-12 col-md-6 description  mt-0">
                                <h3>Опис</h3>
                                <p>Це алюмінієве блюдо поєднує міцність та елегантний дизайн. Ідеально для закусок та
                                    десертів. Сріблястий колір додає розкоші.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" feature-section">
                <div className="row">
                    <div className="col-12 col-md-3 feature-box px-3">
                        <h3>Гарантія</h3>
                        <p>14 днів на обмін без зайвих запитань</p>
                        <a href="#" className="feature-link">Умови повернення</a>
                    </div>
                    <div className="col-12 col-md-5 feature-box px-3">
                        <h3>Варіанти оплати</h3>
                        <p>Готівкою при отриманні, Visa/MasterCard, Безготівковий</p>
                        <a href="#" className="feature-link">Детальніше</a>
                    </div>
                    <div className="col-12 col-md-3 feature-box px-3">
                        <h3>Доставка по Україні</h3>
                        <p>"Нова Пошта"</p>
                        <a href="#" className="feature-link">Тарифи перевізника</a>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Item;
