import React from 'react';
import logo from './../../assets/logo/golendlogo.png';
import profile from './../../assets/logo/profile.png';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header data-test="headerComponent">
            <div className="navbar">
                <Link to="/years" >    
                    <img src={logo} className="logo" data-test="logoImage" alt="logo" />
                </Link>
                <button data-test="golendButton"> 1300 GoLend </button>
            </div>
            <div className="profile">
                <hr className="ruler-left" data-test="rulerLeft" />
                <img src={profile} data-test="profileImage" alt="profile" />
                <hr className="ruler-right" data-test="rulerRight" />
            </div>
        </header>
    );
}
