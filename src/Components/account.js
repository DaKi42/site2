import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import './account.css';

import { ReactComponent as AccountIcon } from "../images/user.svg";
import { ReactComponent as CaseIcon } from "../images/case.svg";
import { ReactComponent as BonusIcon } from "../images/bonuses.svg";
import { ReactComponent as HeartIcon } from "../images/heart.svg";
import { ReactComponent as ExitIcon } from "../images/exit.svg";
import { ReactComponent as EditIcon } from "../images/edit.svg";

const Account = () => {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'Анна',
        lastName: 'Галян',
        city: 'Одеса',
        street: 'Балківська',
        phone: '+380 67 854 16 76',
        houseNumber: '150A',
    });
    const [errors, setErrors] = useState({});

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setIsEditing(false);
            setErrors({});
        }
    };

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'Ім\'я є обов\'язковим';
        if (!formData.lastName.trim()) newErrors.lastName = 'Прізвище є обов\'язковим';
        if (!formData.city.trim()) newErrors.city = 'Місто є обов\'язковим';
        if (!formData.street.trim()) newErrors.street = 'Вулиця є обов\'язковою';
        if (!formData.phone.match(/^\+380\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/)) newErrors.phone = 'Номер телефону не відповідає формату';
        if (!formData.houseNumber.trim()) newErrors.houseNumber = 'Номер будинку / квартири є обов\'язковим';

        return newErrors;
    };

    return (
        <div className="container accoun-cont">
            <ul className="breadcrumb">
                <li><a href="/">Botanica</a></li>
                <li>Кабінет</li>
            </ul>

            <h1>Особистий кабінет</h1>

            <div className="row">
                <div className="col-12 col-md-3 sidebar">
                    <ul className="sidebar-menu">
                        <li><a href="#" className="active"><AccountIcon className="icon"/> Персональні дані </a></li>
                        <li><a href="#"><CaseIcon className="icon"/> Мої замовлення</a></li>
                        <li><a href="#"><BonusIcon className="icon"/> Бонуси</a></li>
                        <li><a href="#"><HeartIcon className="icon"/> Вибрані товари</a></li>
                        <li><a href="#"><ExitIcon className="icon"/> Вийти</a></li>
                    </ul>
                    {/*<div className="col-0 d-none d-md-block  line-separator"></div>*/}
                </div>

                <div className="col-12 col-md-8 main-content">
                    <div className="row form-section">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="firstName">Ім'я</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                />
                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">Місто</label>
                                <input
                                    type="text"
                                    id="city"
                                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                    value={formData.city}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                />
                                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="street">Вулиця</label>
                                <input
                                    type="text"
                                    id="street"
                                    className={`form-control ${errors.street ? 'is-invalid' : ''}`}
                                    value={formData.street}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                />
                                {errors.street && <div className="invalid-feedback">{errors.street}</div>}
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="lastName">Прізвище</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                />
                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Номер телефону</label>
                                <input
                                    type="text"
                                    id="phone"
                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                />
                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="houseNumber">Номер будинку / квартири</label>
                                <input
                                    type="text"
                                    id="houseNumber"
                                    className={`form-control ${errors.houseNumber ? 'is-invalid' : ''}`}
                                    value={formData.houseNumber}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                />
                                {errors.houseNumber && <div className="invalid-feedback">{errors.houseNumber}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <button
                            className={`text-right mr-3 edit-btn ${isEditing ? 'save-btn' : ''}`}
                            onClick={isEditing ? handleSaveClick : handleEditClick}
                        >
                            {isEditing ? 'Зберегти' : <><EditIcon className="icon"/> Редагувати</>}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Account;
