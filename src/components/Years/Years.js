import React, {Component} from 'react';
import {years} from './../../database/database';
import {Link} from 'react-router-dom';
import './Years.css';

class Years extends Component {
    
    render(){
        return (
            <div className="main-container" data-test="yearsContainer">
                <h1 className="header" data-test="yearsHeader"> What year model is the car ? </h1>
                <ul className="year" data-test="yearList">
                    {years.map(year => {
                        return  <Link to={{pathname:"/vehicles", state: {year: year}}} className="link-year" key={year} ><li className="yearbutton"> {year} </li></Link>
                    })}
                </ul>
            </div>
        )
    }
}

export default Years;
