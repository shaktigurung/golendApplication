import React from 'react';
import {years} from './../../database/database';
import {Link} from 'react-router-dom';
import './Years.css';

const Years = () => {

    const listYears = years.map((year) => 
        <Link to={{pathname:"/vehicles", state: {year: year}}} className="link-year" key={year} ><li className="yearbutton"> {year} </li></Link>
    );
    
    return (
        <div className="main-container" data-test="yearsContainer">
            <h1 className="header" data-test="yearsHeader"> What year model is the car ? </h1>
            <ul className="year" data-test="yearList"> {listYears} </ul>
        </div>
    );
 
}

export default Years;
