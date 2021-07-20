import React from 'react'
import './Pagination.css';
const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
    const pageNumbers = [];
    // console.log(totalCountries, '!!!!!')
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    // console.log(pageNumbers)
    return (
        <div className='paginationDiv'>
            <nav className='paginationNav'>
                <ul className='pagination'>
                    {pageNumbers.map(n => {
                        return (
                            <li key={n}><a onClick={() => paginate(n)} href='/home/!#' className='paginationLi'>{n}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;