import React from 'react';
import {vehicles} from './../../database/database';
import Vehicle from './Vehicle';
import './Vehicle.css';

export default function Vehicles(props) {
    const {year} = props.location.state;
    return (
        <div className="vehicles">
            <h1 className="header"> Let's find your car </h1> 
            <ul className="vehicle">
                { vehicles.map(vehicle => {
                    return <li key={vehicle.id}> <Vehicle year={year} vehicle={vehicle}/> </li>
                })}
            </ul>
            <p> * Excludes on road and government costs </p>
        </div>
    )
}
