import { covidCountriesStatusReducer } from './covidCountriesStatus'

export function reducer(state, action) {
    let resultState = covidCountriesStatusReducer(state, action)

    return resultState
}
