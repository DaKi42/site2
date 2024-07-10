import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import './HomePage.css';

import candlesImg from '../images/candles.png';
import lampsImg from '../images/lamps.png';
import dishesImg from '../images/dishes.png';
import glassesImg from '../images/glasses.png';
import basketsImg from '../images/boxes.png';
import hits1Img from '../images/hits-1.png';
import hits2Img from '../images/hits-2.png';
import hits3Img from '../images/hits-3.png';
import hits4Img from '../images/hits-4.png';


const HomePage = () => {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleAccessoriesClick = () => {
        navigate('/accessories');
    };

    useEffect(() => {
        const form = formRef.current;

        if (form) {
            const handleFormSubmit = (event) => {
                event.preventDefault();
                const emailInput = document.getElementById('email-input');
                const email = emailInput.value;

                // Простая валидация email
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if (emailPattern.test(email)) {
                    // Если email валиден
                    setMessage('Підписка оформлена!');
                    setMessageType('success');
                    emailInput.value = '';
                } else {
                    // Если email не валиден
                    setMessage('Будь ласка, введіть правильний email.');
                    setMessageType('error');
                }
            };

            form.addEventListener('submit', handleFormSubmit);

            // Cleanup event listener on component unmount
            return () => {
                form.removeEventListener('submit', handleFormSubmit);
            };
        }
    }, []);

    // Effect for hiding the message after 3 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
                setMessageType('');
            }, 3000);

            // Cleanup timer on component unmount
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div>
            <div className="banner-container">
                <div className="banner-image"></div>
                <div className="banner-text">
                    <h1>Новий рік з <span>&lt;&lt; BOTANICA &gt;&gt;</span></h1>
                    <p>Дуууже привабливі знижки</p>
                    <button onClick={handleAccessoriesClick}>Перейти до товару</button>
                </div>
            </div>

            <main className="container my-5">
                <h1>Сенсації сезону</h1>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="content">
                            <p>Свічки та аромати</p>
                            <button onClick={handleAccessoriesClick}>До каталогу <span className="pl-2 fas fa-arrow-right"></span></button>
                        </div>
                        <img src={candlesImg} alt="Свічки та аромати" className="background-image"/>
                    </div>
                    <div className="grid-item">
                        <div className="content">
                            <p>LED лампи</p>
                            <button onClick={handleAccessoriesClick}>До каталогу <span className="pl-2 fas fa-arrow-right"></span></button>
                        </div>
                        <img src={lampsImg} alt="LED лампи" className="background-image"/>
                    </div>
                    <div className="grid-item tall">
                        <div className="content">
                            <p>Посуд з нової колекції</p>
                            <button onClick={handleAccessoriesClick}>До каталогу <span className="pl-2 fas fa-arrow-right"></span></button>
                        </div>
                        <img src={dishesImg} alt="Посуд з нової колекції" className="background-image"/>
                    </div>
                    <div className="grid-item">
                        <div className="content">
                            <p>Склянки</p>
                            <button onClick={handleAccessoriesClick}>До каталогу <span className="pl-2 fas fa-arrow-right"></span></button>
                        </div>
                        <img src={glassesImg} alt="Склянки" className="background-image"/>
                    </div>
                    <div className="grid-item">
                        <div className="content">
                            <p>Кошики для зберігання</p>
                            <button onClick={handleAccessoriesClick}>До каталогу <span className="pl-2 fas fa-arrow-right"></span></button>
                        </div>
                        <img src={basketsImg} alt="Кошики для зберігання" className="background-image"/>
                    </div>
                </div>

                <div className="container email-block">
                    <div className="email-background"></div>
                    <div className="row py-3 py-md-0">
                        <div className="col-12 col-md-6 p-0">
                            <h1>Підпишись та будь першим</h1>
                            <p>Новинки, акції та розпродаж, знижки та цікаві новини</p>
                        </div>
                        <div className="col-12 col-md-6 p-0 email-form">
                            <form id="subscription-form" ref={formRef} className="d-flex">
                                <input type="email" id="email-input" placeholder="Ваш e-mail" required/>
                                <button type="submit" className="custom-button">Підписатись<span
                                    className="pl-2 fas fa-envelope"></span></button>
                                {message && (
                                    <div id="message" className={`message ${messageType}`}>
                                        {message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container hits-block p-0">
                    <h1>Хіти в каталогах</h1>

                    <div className="button-row row">
                        <button className="category-button active" onClick={handleAccessoriesClick}>Страви</button>
                        <button className="category-button" onClick={handleAccessoriesClick}>Вази</button>
                        <button className="category-button" onClick={handleAccessoriesClick}>Подарункові карти</button>
                    </div>

                    <div className="row ">
                        <div className="col-12 col-md-3 p-3 p-md-2">
                            <div className="item-card" onClick={handleAccessoriesClick}>
                                <div className="img-wrapper">
                                    <img src={hits1Img} alt="Item 1"/>
                                    <span className="fa fa-heart"></span>
                                </div>
                                <h2>Блюдо алюмінієве</h2>
                                <p>Лист клена срібло</p>
                                <div className="price-icon p-0">
                                    <span className="price">736₴</span>
                                    <span className="fas fa-shopping-basket"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 p-3 p-md-2">
                            <div className="item-card" onClick={handleAccessoriesClick}>
                                <div className="img-wrapper">
                                    <img src={hits2Img} alt="Item 2"/>
                                    <span className="fa fa-heart"></span>
                                </div>
                                <h2>Блюдо скляне</h2>
                                <p>перламутро-голубе</p>
                                <div className="price-icon p-0">
                                    <span className="price">498₴</span>
                                    <span className="fas fa-shopping-basket"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 p-3 p-md-2">
                            <div className="item-card" onClick={handleAccessoriesClick}>
                                <div className="img-wrapper">
                                    <img src={hits3Img} alt="Item 3"/>
                                    <span className="fa fa-heart"></span>
                                </div>
                                <h2>Келихи</h2>
                                <p>Коктейльний зол</p>
                                <div className="price-icon p-0">
                                    <span className="price">1120₴</span>
                                    <span className="fas fa-shopping-basket"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 p-3 p-md-2">
                            <div className="item-card" onClick={handleAccessoriesClick}>
                                <div className="img-wrapper">
                                    <img src={hits4Img} alt="Item 4"/>
                                    <span className="fa fa-heart"></span>
                                </div>
                                <h2>Чашка з кришкою та ложкою</h2>
                                <p>Сніговичок</p>
                                <div className="price-icon p-0">
                                    <span className="price">369₴</span>
                                    <span className="fas fa-shopping-basket"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    );
};

export default HomePage;
