import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCountries, getCountryDetail } from '../../actions/countriesActions.js';
import './CreateActivity.css'

export const CreateActivity = (props) => {
    const [input, setInput] = useState({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries:[],
    })
    const [countryIn, setCountryIn] = useState({country:[]})
    const handleChangeName = (e) => {
        setInput({
            ...input,
            name: e.target.value,
        })
    }
    const handleDif = (e) => {
        setInput({
          ...input,
          difficulty: e.target.value,
      })
    }
    const handleDuration = (e) => {
        setInput({
          ...input,
          duration: e.target.value,
      })
    }
    const handleSeason = (e) => {
        setInput({
          ...input,
          season: e.target.value,
      })
    }
    const handleCountry = (e) => {
        props.getCountryDetail(e.target.value)
        setInput({
            ...input,
            countries:[...input.countries, e.target.value]
        })
        setCountryIn({
            country: [...countryIn.country, props.countriesName]
        })
    }

    useEffect(() => {
        props.getCountries()
    }, [])
    console.log(props)

    async function handleSubmit(e) {
        e.preventDefault()
      await axios.post('http://localhost:5000/activity', input)
      
    }

    return (
        <div className='containerForm'>

          <div>

              <div>
                <h1 className='h1Act'>Welcome to the activity creation page!</h1>
                <p className='titleActivities'>
                If you are tourist who visited a country in the list, or you live in once, <br/> and you know an activity that its not in our system you can create it here
                </p>
              </div>

          </div>

          <form className='formActivity' onSubmit={handleSubmit}>

            <div className='activityDiv'>
              <h4 className='h4Act'>Activity Name</h4>
              <input
                placeholder="Name"
                type="text"
                onChange={handleChangeName}
                className='inputActivity'
              />
            </div>
            
            <div className='activityDiv'>
              <h4 className='h4Act'>Activity Difficulty (from easiest to hardest 1 - 5)</h4>
              <select onChange={handleDif} className='selectActivity'>
                <option>Difficulty</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className='activityDiv'>
              <h4 className='h4Act'>Duration of the activity</h4>
              <input
                placeholder="Duration"
                type="text"
                required="required"
                onChange={handleDuration}
                className='inputActivity'
              />
            </div>

            <div className='activityDiv'>
              <h4 className='h4Act'>In which season the activity <br/> can be performed?</h4>
              <select onChange={handleSeason} className='selectActivity'>
                <option>Season</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Autumn</option>
                <option>Winter</option>
              </select>
            </div>

            <div className='activityDiv'>
              <h4 className='h4Act'>In which countries does the activity take <br/> place? (you can select more than one)</h4>
              <select onChange={handleCountry} className='selectActivity'>
              <option>Country</option>
              {props.countries && props.countries.map(c => (
                <option>{c.name}</option>
              ))}
              </select>
            </div>

        <input type="submit" value='Create' className='createButton'/>

        </form>
      </div>
    )
}

function mapStateToProps(state) {
    return {
      countries: state.countries,
      countriesName: state.countriesName
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getCountries:() => dispatch(getCountries()),
      getCountryDetail: (id) => dispatch(getCountryDetail(id))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity)

