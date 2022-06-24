import React from 'react';
import './CarRod.css'

const CarRod = () => {
    return (
        <div className='hero'>
            <div className="highway"></div>
            <div className="city"></div>

            <div className='car'>
                <img src="https://i.ibb.co/QXmSPTs/car.png" alt="" />
            </div>
            <div className='wheel'>
                <img className='back-wheel' src="https://i.ibb.co/0qJxB0S/wheel.png" alt="" />
                <img className='front-wheel' src="https://i.ibb.co/0qJxB0S/wheel.png" alt="" />
            </div>
        </div>
    );
};

export default CarRod;