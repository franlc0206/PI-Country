import {GET_COUNTRIES, GET_BY_NAME, GET_COUNTRY_DETAIL, SORT_BY_HAB, SORT_BY_ALPH, GET_ACTIVITIES} from '../actions/countriesActions';

const initialState = {
    countries: [],
    activities:[],
    countriesName:[],
    countryDetail: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            // console.log(action.payload)
            return {
                ...state,
                countries: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                countries: action.payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload,
			    countryName: action.payload.name
            }
        case SORT_BY_ALPH:
            return {
                ...state,
                countries: action.payload
            }
        case SORT_BY_HAB:
            return {
                ...state,
                countries: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
    
        default:
            return {
                ...state
            }
    }
}

export default reducer;