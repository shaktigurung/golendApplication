import React from 'react';
import {vehicles} from '../../database/database';
import VehicleItem from './VehicleItem/VehicleItem';
import './VehicleList.css';

export default function Vehicles(props) {
    const {year} = props.location.state;
    return (
        <div className="vehicles" data-test="vehiclesContainer">
            <h1 className="header" data-test="vehiclesHeader"> Let's find your car </h1> 
            <ul className="vehicle" data-test="vehicleList">
                { vehicles.map(vehicle => {
                    return <li key={vehicle.id}> <VehicleItem year={year} vehicle={vehicle}/> </li>
                })}
            </ul>
            <p data-test="terms"> * Excludes on road and government costs </p>
        </div>
    );
}
