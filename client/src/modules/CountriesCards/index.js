import React, { useState, useEffect } from 'react'
import Country from '../CountryCard/Country'
import Pagination from '../Pagination/Pagination.js'
// import axios from 'axios';
import {connect} from 'react-redux';
import {getByName, getCountries} from '../../actions/countriesActions';
import './CountriesCards.css';


const CountriesCards = (props) => {
    // const [orderByAlph, setOrderByAlph] = useState(false)
    // const [Countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false);
    const [searching, setSearching] = useState(false)
    const [page, setPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const [name, setName] = useState('')
    
    useEffect(() => {
        const apiCall = async () => {
            setLoading(true);
            // console.log(loading)
            // const res = await axios.get(`http://localhost:5000/countries`)
            // setCountries(res.data)
            // console.log(res.data)
            // console.log(props)
            await props.getCountries()
            setLoading(false)
        }
        apiCall();
    },[])
    // console.log(props.countries, 'Aquiiiiii')
    const lastCountry= page * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    // const countriesToShow = Countries.slice(firstCountry, lastCountry);
    const countriesToShow = props.countries.slice(firstCountry, lastCountry);

    const paginate = (pageNumber) => {
        return setPage(pageNumber)
    }

    // console.log(countries.length)
    const handleChange = (e) => {
        setName(e.target.value)
        if (e.target.value.length !== 0) {
            setSearching(true)
        } else {setSearching(false)}
        console.log(searching)
        console.log(e.target.value)
    }
    // console.log(props.countries)
    const filteredCountries = props.countries.filter((c) => {
        return c.name.toLowerCase().includes(name.toLowerCase())
    })
    // const filteredCountries = Countries.filter((c) => {
    //     return c.name.toLowerCase().includes(name.toLowerCase())
    // })
    return (
        <div>
            <input 
            type="text" 
            autoComplete='off' 
            placeholder='Insert a country..'  
            onChange={(e) => handleChange(e)}
            className='searchBarInput' 
            />
            {searching ? (<div className='toggleHide'>
                <Country countries={filteredCountries} loading={loading} />
            </div>)
            :
            (<div className='toggleHide'>
                <Country countries={countriesToShow} loading={loading} />
                <Pagination 
                countriesPerPage={countriesPerPage} 
                totalCountries={props.countries.length} 
                // totalCountries={Countries.length} 
                paginate={paginate}
                />  
            </div>)}
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountriesCards);