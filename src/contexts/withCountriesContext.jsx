import React, { createContext, useState } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'

import { getDisplayName } from '../util/hoc'

export const CountriesContext = createContext({})

export const withCountriesContextConsumer = (WrappedComponent) => {
    const WithCountriesContextConsumer = (props) => (
        <CountriesContext.Consumer>
            {(value) => (<WrappedComponent {...props} countriesState={value} />)}
        </CountriesContext.Consumer>
    )

    hoistNonReactStatic(WithCountriesContextConsumer, WrappedComponent)

    WithCountriesContextConsumer.displayName = `WithCountriesContextConsumer(${getDisplayName(WrappedComponent)})`

    return WithCountriesContextConsumer
}

export const withCountriesContext = (WrappedComponent) => {
    const WithCountriesContext = (props) => {
        const initialState = {
            countries: [],
            loading: true,
        }

        const [state, setState] = useState(initialState)

        const value = {
            ...state,
            setCountries: (state, value) => setState({
                ...state,
                countries: value,
            }),
            setLoading: (state, value) => setState({
                ...state,
                loading: value,
            }),
        }

        return (
            <CountriesContext.Provider value={value}>
                <WrappedComponent {...props} />
            </CountriesContext.Provider>
        )
    }

    hoistNonReactStatic(WithCountriesContext, WrappedComponent)

    WithCountriesContext.displayName = `WithCountriesContext(${getDisplayName(WrappedComponent)})`

    return WithCountriesContext
}