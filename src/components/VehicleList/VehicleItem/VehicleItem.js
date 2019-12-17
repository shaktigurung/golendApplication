import React from 'react';
import car from './../../../assets/cars/car.jpg';

export default function VehicleItem(props) {
    const {year={}, vehicle={}} = props;
    return (
        <div className="vehicle-item" data-test="vehicleItem">
            <img className="vehicle-image" src={car}  data-test="carImage"/>
            <div className="content">
                <h5 data-test="carTitle"><strong> {year} {vehicle.model} {vehicle.series} </strong></h5>
                <p data-test="carVariant">{vehicle.variant}</p>
                <div data-test="priceInfo">
                    <h2> NEW <b className="amount">${vehicle.new_price}</b> RRP*  <span className="from"> FROM <b className="amount">${vehicle.from}</b> per month* </span> </h2>
                </div>
            </div>
        </div> 
    )
}
