import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Accessories.css';
import hits1Img from "../images/hits-1.png";
import hits2Img from "../images/hits-2.png";
import hits3Img from "../images/hits-3.png";
import hits4Img from "../images/hits-4.png";


const Accessories = () => {

    const navigate = useNavigate();
    const handleItemClick = () => {
        navigate('/item');
    };


    return (
        <div className="container">

            <ul className="breadcrumb">
                <li><a href="/">Botanica</a></li>
                <li><a href="/">Каталог товарів</a></li>
                <li>Посуд</li>
            </ul>


            <h1 className="section-title">Посуд</h1>

            <div className="row ">
                <div className="col-12 col-md-3 p-3 p-md-2" onClick={handleItemClick}>
                    <div className="item-card">
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
                <div className="col-12 col-md-3 p-3 p-md-2" onClick={handleItemClick}>
                    <div className="item-card">
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
                <div className="col-12 col-md-3 p-3 p-md-2" onClick={handleItemClick}>
                    <div className="item-card">
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
                <div className="col-12 col-md-3 p-3 p-md-2" onClick={handleItemClick}>
                    <div className="item-card">
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

                <div className="col-12 col-md-3 p-3 p-md-2" onClick={handleItemClick}>
                    <div className="item-card">
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
                <div className="col-12 col-md-3 p-3 p-md-2" onClick={handleItemClick}>
                    <div className="item-card">
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
                <div className="col-12 col-md-3 p-3 p-md-2" onClick={handleItemClick}>
                    <div className="item-card">
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
                <div className="col-12 col-md-3 p-3 p-md-2" onClick={handleItemClick}>
                    <div className="item-card">
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

            <div className="my-5 text-center">
                <button className="show-more-btn">Показати ще</button>
                <div className="indicator-dots mt-3">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

        </div>
    );
}
export default Accessories;
