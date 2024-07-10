import React, {useState} from 'react';
import './Header.css';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [selectedCity, setSelectedCity] = useState('Одеса');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const updateSelectedCity = (city) => {
        setSelectedCity(city);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/');
    };

    const handleLocationClick = () => {
        navigate('/location');
    };

    return (
        <header>
            {/* Первый Header */}
            <div className="container d-flex p-0">
                <div className="row col-12 justify-content-between text-center p-0">
                    <div className="col-12 col-md-4 col-lg-3 py-2 px-0 city-select-container position-relative">
                        <button className="city-select-btn" onClick={toggleDropdown}>
                            Виберіть місто: <span>{selectedCity}</span>
                        </button>
                        {dropdownOpen && (
                            <div className="city-dropdown">
                                <a href="#" onClick={() => updateSelectedCity('Одеса')}>Одеса</a>
                                <a href="#" onClick={() => updateSelectedCity('Київ')}>Київ</a>
                                <a href="#" onClick={() => updateSelectedCity('Львів')}>Львів</a>
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 py-2 px-0 location " onClick={handleLocationClick}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.9133 10.6633C22.9133 18.4567 14 26.25 14 26.25C14 26.25 5.08667 18.4567 5.08667 10.6633C5.08667 8.29937 6.02575 6.03223 7.69733 4.36065C9.3689 2.68908 11.636 1.75 14 1.75C16.364 1.75 18.6311 2.68908 20.3027 4.36065C21.9743 6.03223 22.9133 8.29937 22.9133 10.6633Z"
                                stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path
                                class="hover-fill"
                                d="M14 14C15.8428 14 17.3367 12.5061 17.3367 10.6633C17.3367 8.82054 15.8428 7.32666 14 7.32666C12.1572 7.32666 10.6633 8.82054 10.6633 10.6633C10.6633 12.5061 12.1572 14 14 14Z"
                                stroke="currentColor" fill="none" stroke-width="1.5" stroke-miterlimit="10"/>
                        </svg>
                        Мережа магазинів
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 py-2 px-0 phone-number ">
                        +38 (099) 555-35-35
                        <svg className="mx-2" width="18" height="11" viewBox="0 0 18 11" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L8.64 8.64L16.28 1" stroke="currentColor" stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Второй Header */}
            <div className="bg-full-width">
                <div className="container bg-custom-burgundy py-2">
                    <div className="container d-flex justify-content-between align-items-center p-0">
                        <h2 className="m-0 home" onClick={handleHomeClick}>BOTANICA</h2>
                        <nav>
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fas fa-heart"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fas fa-shopping-cart"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center" href="/account">
                                        <i className="fas fa-user"></i>
                                        <span className="ml-2">Кабінет</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Третий Header */}
            <div className="container-fluid bg-custom-gold py-3 ">
                <div className="container d-flex justify-content-center align-items-center px-0">
                    <button className="catalog-btn">Каталог товарів</button>
                    <button className="new-btn">NEW</button>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Пошук..."
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
