import React, { useEffect } from 'react';
import './Nav.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Filtros from '../Filtros/Filtros.js';
import {filtroCont, getByName, getCountries} from '../../actions/countriesActions';


function Nav() {
    return (
        <div className='containerNav'>
            <nav className='nav'>
                <a href="/home/!">
                    
                    <span className='title'>Country Finder App</span>
                </a>
                    <ul className='navFilter'>
                        <li className='filterTitle'>
                            &#9776;
                            <ul className='ul2'>
                                <li><Filtros /></li>
                            </ul>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}


export default Nav