import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux';
import {getByName, getCountries} from '../../actions/countriesActions';
import './CountryDetail.css';

export const CountryDetail = (props) => {
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false);
    // console.log(props.match.params.name)
    var arr = props.match.url.split('/')
    console.log(props, 'PROPS!!!')
    // console.log(arr)
    var countryName = arr[3];
    console.log(countryName)
    useEffect(() => {
        console.log('entree!')
        const apiCall = async () => {
            setLoading(true);
            const res = await axios.get(`http://localhost:5000/countries?name=${countryName}`);
            console.log(res.data);
            setDetails(res.data);
            setLoading(false);
        }
        apiCall();
    }, [])
    if (details.length === 0) {
        return <h1>Loading..</h1>
    }
    return (
        <div className='containerDetail'>
            <div className= 'countryDetail'>
                <h1>Country Name: {details[0].name}</h1>
                <h2>Country ID: {details[0].id}</h2>
                <h2>Capital: {details[0].capital}</h2>
                <h2>Continent: {details[0].continent}</h2>
                <h2>Subregion: {details[0].subregion}</h2>
                <h2>Area: {(details[0].area)} km²</h2>
                <h2>Population: {Math.round((details[0].population / 1000000) * 100) / 100} millions people</h2>
                <h2>Tourist Activities: </h2>
                <div className='countryActivities'>
                {details[0].activities.map((a) => {
                    return (
                        <div >
                            <ul>
                                <li>Activity: {a.name}</li>
                                <li>Difficulty: {a.difficulty}</li>
                                <li>Duration: {a.duration}</li>
                                <li>Season: {a.season}</li>
                            </ul>
                        </div>
                    )
                })}  
                </div>
            </div>
            <img src={details[0].imgFlag} alt={details[0].name} className='imgDetail' />
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => {
            dispatch(getCountries())
        },
        getByName: (name) => {
            dispatch(getByName(name))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);