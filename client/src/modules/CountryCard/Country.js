import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCountries} from '../../actions/countriesActions';
import './Country.css';

function Country(props) {
    // console.log(props, 'objecttttt')
    if (props.loading) {
        return (<img src="https://tradinglatam.com/wp-content/uploads/2019/04/loading-gif-png-4.gif" alt="loading" />)
    }
    console.log(props)
    return(
        <ul className='ulContainer' id='hideUl'>
            {props.countries && props.countries.map(c => {
                return(
                    <Link to={`/home/country/${c.name}`} className='containerCountry' key={c.id}>
                        <div className='divCont'>
                            <div className='textCountry'>
                                <h4>Country: {c.name}</h4>
                                <h4>Country ID: {c.id}</h4>    
                                <h4>Continent: {c.continent}</h4>
                            </div> 
                            <img src={c.imgFlag} alt={c.name} className='flag'/>    
                        </div>
                    </Link>
                )
            })}
        </ul>
    )
}

export default Country;