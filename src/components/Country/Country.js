import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {name, population, region, area, flags} = props.country
    return (

        <div className='country bg-info'>
            <h2>Country : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p><small>Region : {region}</small></p>
            <p><small>Area : {area}</small></p>
        </div>
    );
};

export default Country;