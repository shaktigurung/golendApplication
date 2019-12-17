import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {vehicles} from '../../database/database';
import VehicleItem from './VehicleItem/VehicleItem';
import './VehicleList.css';

const VehicleList = props => {

    const {year} = props.location.state;

    return (
        <div className="vehicles" data-test="vehiclesContainer">
            <h1 className="header" data-test="vehiclesHeader"> Let&apos;s find your car </h1> 
            <ul className="vehicle" data-test="vehicleList">
                { vehicles.map(vehicle => {
                    return <li key={vehicle.id}> <VehicleItem year={year} vehicle={vehicle}/> </li>
                })}
            </ul>
            <p data-test="terms"> * Excludes on road and government costs </p>
        </div>
    );
    
}

VehicleList.propTypes = {
    year: PropTypes.string,
    location: PropTypes.object,
};

export default withRouter(VehicleList);