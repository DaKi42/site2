import React from 'react';
import './NotFound.css';
import notfoundImg from '../images/notfound.png';

const NotFound = () => {
    return (
        <div className="container">

            <div className="not-found-container">
                <section className="row mar">
                    <div className="col-12 col-md-6">
                        <h1>404</h1>
                        <p>Здається, що щось пішло не так..</p>
                        <a href="/">Повернутися на головну</a>
                    </div>

                    <div className="col-12 col-md-6 not-found-img">
                        <img src={notfoundImg} alt="404page"/>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default NotFound;
