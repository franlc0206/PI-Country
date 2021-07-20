import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const SORT_BY_ALPH = 'SORT_BY_ALPH';
export const SORT_BY_HAB = 'SORT_BY_HAB';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const ASC = 'A-Z';
export const DESC = 'Z-A';
export const ASCHAB = 'Ascendant';
export const DESCHAB = 'Descendant';





export function getCountries() {
    return function (dispatch) {
        axios.get(`http://localhost:5000/countries`)
        .then((res) => dispatch({
                type: GET_COUNTRIES,
                payload: res.data
            })
        )}
}
export function getByName(name) {
    return async function (dispatch) {
        axios.get(`http://localhost:5000/countries?name=${name}`)
        .then((res) => {
            dispatch({
                    type:GET_BY_NAME,
                    payload: res.data
            })
        })
    }
}
export function getCountryDetail(id) {
    return async function (dispatch) {
        axios.get(`http://localhost:5000/countries/${id}`)
        .then((res) => {
            dispatch({
                    type:GET_COUNTRY_DETAIL,
                    payload: res.data
            })
        })
    }
}
export function filtroCont(continent) {
	return function(dispatch){
		axios.get(`http://localhost:5000/countries?continent=${continent}`)
		.then(res => {
            console.log('funciono!')
			dispatch({ type: GET_COUNTRIES, payload: res.data})
		})
	}
}
export function sortByAlph(order){
    return function(dispatch){
		axios.get(`http://localhost:5000/countries?alph=${order}`)
		.then(res => {
            console.log('funciono!')
			dispatch({ type: GET_COUNTRIES, payload: res.data})
		})
	}
}
export function sortByHab(order){
    return function(dispatch){
		axios.get(`http://localhost:5000/countries?order=${order}`)
		.then(res => {
            console.log('funciono!')
			dispatch({ type: GET_COUNTRIES, payload: res.data})
		})
	}
}
export function getActivities() {
    return function(dispatch) {
        axios.get('http://localhost:5000/activity')
        .then((res) => {
            dispatch({
                type: GET_ACTIVITIES,
                payload: res.data
            })
        })
    }
}