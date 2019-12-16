import React, {Component} from 'react';
import {years} from './../../database/database';
import {Link} from 'react-router-dom';
import './Years.css';

class Years extends Component {
    
    render(){
        return (
            <div className="main-container">
                <h1 className="header"> What year model is the car ? </h1>
                <ul className="year">
                    {years.map(year => {
                        return  <Link to={{pathname:"/vehicles", state: {year: year}}} className="link-year" key={year} ><li className="yearbutton"> {year} </li></Link>
                    })}
                </ul>
            </div>
        )
    }
}

export default Years;
