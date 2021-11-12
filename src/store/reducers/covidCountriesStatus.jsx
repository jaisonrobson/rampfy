export function covidCountriesStatusReducer(state, action) {
    switch (action.type) {
        case 'fetchCovidStatistics':
            return { ...state, countriesStatus: action.payload }

        default:
            return state
    }
}