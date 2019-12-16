import React from 'react';
import logo from './../../assets/logo/golendlogo.png';
import profile from './../../assets/logo/profile.png';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div>
            <div className="navbar">
                <Link to="/years" >    
                    <img src={logo} className="logo" alt="logo" />
                </Link>
                <button> 1300 GoLend </button>
            </div>
            <div className="profile">
                <hr className="ruler-left" />
                <img src={profile} alt="profile" />
                <hr className="ruler-right" />
            </div>
        </div>
    )
}
