import React, {useState} from 'react';
import './Location.css';
import locationImg from "../images/map.png";

const Location = () => {

    const [selectedCity, setSelectedCity] = useState('Одеса');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const updateSelectedCity = (city) => {
        setSelectedCity(city);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const cities = ['Одеса', 'Київ', 'Львів'];
    return (
        <div className="container">
            <ul className="breadcrumb">
                <li><a href="/">Botanica</a></li>
                <li>Мережа магазинів</li>
            </ul>

            <h1>Мережа магазинів</h1>
            <div className="row mb-5">
                <div className="col-12 col-lg-9 p-0">
                    <img className="map pr-0 pr-lg-3" src={locationImg} alt="map"/>
                </div>

                <div className="col-12 col-lg-3 row p-0">

                    <div className="col-12 city-select-container position-relative  px-2">
                        <button className="col-12 city-select-btn mt-3 my-lg-0 " onClick={toggleDropdown}>
                            Виберіть місто: <span>{selectedCity}</span>
                        </button>
                        {dropdownOpen && (
                            <div className="city-dropdown-1">
                                {cities.map((city) => (
                                    <a href="#" key={city} onClick={() => updateSelectedCity(city)}>{city}</a>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="d-none d-lg-flex col-lg-12 location-info">
                        <h2>ТРЦ "City Center", -1 пов.</h2>
                        <p className="address">пр-т. Небесної Сотні, 2</p>
                        <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                    </div>
                    <div className="d-none d-lg-flex col-lg-12 location-info">
                        <h2>ТРЦ "City Center", -1 пов.</h2>
                        <p className="address">пр-т. Небесної Сотні, 2</p>
                        <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                    </div>
                </div>

                <div className="col-12 col-sm-5 col-xl-3 location-info">
                    <h2>ТРЦ "City Center", -1 пов.</h2>
                    <p className="address">пр-т. Небесної Сотні, 2</p>
                    <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                </div>
                <div className="col-12 col-sm-5 col-xl-3 location-info">
                    <h2>ТРЦ "City Center", -1 пов.</h2>
                    <p className="address">пр-т. Небесної Сотні, 2</p>
                    <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                </div>
                <div className="col-12 col-sm-5 col-xl-3 location-info">
                    <h2>ТРЦ "City Center", -1 пов.</h2>
                    <p className="address">пр-т. Небесної Сотні, 2</p>
                    <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                </div>
                <div className="col-12 col-sm-5 col-xl-3 location-info">
                    <h2>ТРЦ "City Center", -1 пов.</h2>
                    <p className="address">пр-т. Небесної Сотні, 2</p>
                    <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                </div>
                <div className="col-12 col-sm-5 col-xl-3 location-info">
                    <h2>ТРЦ "City Center", -1 пов.</h2>
                    <p className="address">пр-т. Небесної Сотні, 2</p>
                    <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                </div>
                <div className="col-12 col-sm-5 col-xl-3 location-info">
                    <h2>ТРЦ "City Center", -1 пов.</h2>
                    <p className="address">пр-т. Небесної Сотні, 2</p>
                    <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                </div>
                <div className="col-12 col-sm-5 col-xl-3 location-info">
                    <h2>ТРЦ "City Center", -1 пов.</h2>
                    <p className="address">пр-т. Небесної Сотні, 2</p>
                    <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                </div>
                <div className="col-12 col-sm-5 col-xl-3 location-info">
                    <h2>ТРЦ "City Center", -1 пов.</h2>
                    <p className="address">пр-т. Небесної Сотні, 2</p>
                    <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                </div>

                <div className="col-12 col-sm-5 col-xl-3 d-lg-none location-info">
                    <h2>ТРЦ "City Center", -1 пов.</h2>
                    <p className="address">пр-т. Небесної Сотні, 2</p>
                    <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                </div>
                <div className="col-12 col-sm-5 col-xl-3 d-lg-none location-info">
                    <h2>ТРЦ "City Center", -1 пов.</h2>
                    <p className="address">пр-т. Небесної Сотні, 2</p>
                    <p className="hours">Пн-Пт з 9:00 до 18:00<br/>Сб-Нд з 10:00 до 17:00</p>
                </div>

            </div>
        </div>
    );
};

export default Location;
