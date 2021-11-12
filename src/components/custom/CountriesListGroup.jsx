import React, { useState, useContext, useEffect } from 'react'
import _ from 'lodash'
import { ListGroup as ReactstrapListGroup } from 'reactstrap'

import { CountriesContext } from '../../contexts/withCountriesContext'
import CountryListGroupItem from './CountryListGroupItem'
import { withCountriesContextConsumer } from '../../contexts/withCountriesContext'

const CountriesListGroup = ({ countriesState }) => {
    const { countries, setSelectedCountries } = countriesState
    const [selected, setSelected] = useState([])

    const selectCountry = (country) => {
        if (_.find(selected, { 'country': `${country.country}` })) {
            return deselectCountry(country)
        }

        if (selected.length >= 4) return false

        const newSelected = _.concat(selected, country)

        setSelected(newSelected)
        setSelectedCountries(countriesState, newSelected)

        return true
    }

    const deselectCountry = (country) => {
        const newArray = _.filter(selected, (element) => element.country != country.country)

        setSelected(newArray)
        setSelectedCountries(countriesState, newArray)

        return false
    }

    return (
        <ReactstrapListGroup style={{ height: '100%' }}>
            {
                countries.map(country => (
                    <CountryListGroupItem
                        key={country.country}
                        country={{
                            ...country,
                            selected: _.find(selected, { 'country': `${country.country}` }) ? true : false,
                        }}
                        onClick={() => { return selectCountry(country) }}
                    />
                ))
            }
        </ReactstrapListGroup>
    )
}

export default withCountriesContextConsumer(CountriesListGroup)