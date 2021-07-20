import React, {useState, useEffect} from 'react'
import Country from '../CountryCard/Country'
import {getCountries, getCountryDetail} from '../../actions/countriesActions';
import {connect} from 'react-redux';
import axios from 'axios';
import './ActivitiesFilter.css'

export const ActivitiesFilter = (props) => {
    const [activity, setActivity] = useState([])
    useEffect(() => {
        const apiCall= async() => {
            var id = props.match.params.id
            const res = await axios.get(`http://localhost:5000/activity/${id}`)
            // console.log(res.data)
            setActivity(res.data)
        }
        apiCall()
    }, [])
    console.log(activity)
    return (
        <div className='countryWithAct'>
            <Country countries={activity} />
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
        getCountryDetail: (id) =>{
            dispatch(getCountryDetail(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesFilter);
