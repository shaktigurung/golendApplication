import React from 'react';
import car from './../../assets/cars/car.jpg';

export default function Vehicle(props) {
    const { year, vehicle } = props;
    return (
        <div className="vehicle-item">
            <img className="vehicle-image" src={car} />
            <div className="content">
                <h5><strong> {year} {vehicle.model} {vehicle.series} </strong></h5>
                <p>{vehicle.variant}</p>
                <div>
                <h2> NEW <b className="amount">${vehicle.new_price}</b> RRP*  <span className="from"> FROM <b className="amount">${vehicle.from}</b> per month* </span> </h2>
                </div>
            </div>
        </div> 
    )
}
