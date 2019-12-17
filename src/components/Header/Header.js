import React from 'react';
import logo from './../../assets/logo/golendlogo.png';
import profile from './../../assets/logo/profile.png';
import {Link} from 'react-router-dom';
import Menu from './Menu/Menu';
import './Header.css';

const Header = () => {

    return (
        <header className="header-container" data-test="headerComponent">
            <div className="navbar">
                <Link to="/years" >    
                    <img src={logo} className="logo" data-test="logoImage" alt="logo" />
                </Link>
                <Menu />
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

export default Header;