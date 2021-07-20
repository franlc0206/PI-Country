import React, {useEffect} from 'react'
import {filtroCont, getByName, getCountries, sortByAlph, sortByHab, getActivities, ASC, DESC, ASCHAB, DESCHAB} from '../../actions/countriesActions';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './Filtros.css';

export const Filtros = (props) => {
    console.log(props)
    useEffect(() => {
        props.getActivities()
    }, [])
    const handleChangeCont = (e) => {
        console.log(e.target.value)
        if(e.target.value === 'All'){
            props.getCountries();
        } else {
            props.filtroCont(e.target.value)
        }
    }
    const handleChangeAlph = (e) => {
        if(e.target.value === 'Select'){
            props.getCountries();
        }
        if (e.target.value === ASC || e.target.value === DESC) {
            props.sortByAlph(e.target.value)
        }
    }
    const handleChangePop = (e) => {
        if(e.target.value === 'Select'){
            props.getCountries();
        }
        if (e.target.value === ASCHAB || e.target.value === DESCHAB) {
            props.sortByHab(e.target.value)
        }
    }
    return (
        <div className='sideBar'>
            <ul className='ulFilters'>
                <li className='filters'>
                    Filter by Continent
                    <select className='hide' onChange={(e) => handleChangeCont(e)}>
                        <option className='filter'>All</option>
                        <option className='filter'>Americas</option>
                        <option className='filter'>Africa</option>
                        <option className='filter'>Asia</option>
                        <option className='filter'>Europe</option>
                        <option className='filter'>Oceania</option>
                        <option className='filter'>Polar</option>
                    </select>
                </li>
                <li className='filters'>
                    Alphabetically Sort
                    <select className='hide' onChange={(e) => handleChangeAlph(e)}>
                        <option className='filter'>Select</option>
                        <option className='filter'>A-Z</option>
                        <option className='filter'>Z-A</option>
                    </select>
                </li>
                <li className='filters'>
                    Population Sort
                    <select className='hide' onChange={(e) => handleChangePop(e)}>
                        <option className='filter'>Select</option>
                        <option className='filter'>Ascendant</option>
                        <option className='filter'>Descendant</option>
                    </select>
                </li>
                <li className='filters'>
                    Filter by Tourists Activities
                    {
                        props.activities.length === 0 ? <div className='hide'><h4>You have to <br/>create an activity</h4></div>
                        :
                        <div className='hide'>
                        {props.activities && props.activities.map((a) =><Link to={`/home/activity/${a.id}`} className='acti'>{a.name}</Link>)}    
                        </div>
                    }
                </li>
                <Link to='/home/create'>
                    <li className='filters'>
                        Create Activities
                    </li>
                </Link>
            </ul>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        activities: state.activities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => {
            dispatch(getCountries())
        },
        filtroCont: (continent) => {
            dispatch(filtroCont(continent))
        },
        getByName: (name) => {
            dispatch(getByName(name))
        },
        sortByAlph: (a, b) => {
            dispatch(sortByAlph(a, b))
        },
        sortByHab: (a, b) => {
            dispatch(sortByHab(a,b))
        },
        getActivities: () => dispatch(getActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtros)