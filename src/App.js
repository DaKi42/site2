import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Accessories from './Components/Accessories';
import NotFound from './Components/NotFound';
import Location from './Components/location';
import Item from './Components/item';
import Account from "./Components/account";

function App() {
    return (

        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/accessories" element={<Accessories/>}/>
                    <Route path="/location" element={<Location/>}/>
                    <Route path="/item" element={<Item/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;