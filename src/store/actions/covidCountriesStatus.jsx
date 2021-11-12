export function fetchCovidStatistics(dispatch, countriesCovidStatus) {
    dispatch({ type: 'fetchCovidStatistics', payload: countriesCovidStatus })
}