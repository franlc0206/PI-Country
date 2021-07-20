import React from 'react';
import {Link} from 'react-router-dom';
import './landing.css';

function LandingPage() {
    return(
        <div className="landP">
            <h1 className='landTitle'>
               Country Finder App!
            </h1>
            
            <Link to='/home/!#'>
                <button className='btnLand'>Homepage</button>
            </Link>
        </div>
    )
}

export default LandingPage;