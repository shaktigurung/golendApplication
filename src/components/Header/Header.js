import React from 'react';
import logo from './../../assets/logo/golendlogo.png';
import './Header.css';

export default function Header() {
    return (
        <div>
            <img src={logo} className="logo" alt="logo" />
        </div>
    )
}
