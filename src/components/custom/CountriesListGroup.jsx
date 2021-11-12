import React, { useState, useContext, useEffect } from 'react'
import _ from 'lodash'
import { ListGroup as ReactstrapListGroup } from 'reactstrap'

import { CountriesContext } from '../../contexts/withCountriesContext'
import CountryListGroupItem from './CountryListGroupItem'

const CountriesListGroup = (props) => {
    const { countries } = useContext(CountriesContext)
    const [selected, setSelected] = useState([])

    const selectCountry = (country) => {
        if (_.find(selected, { 'country': `${country.country}` })) {
            return deselectCountry(country)
        }

        if (selected.length >= 4) return false

        setSelected(_.concat(selected, country))

        return true
    }

    const deselectCountry = (country) => {
        const newArray = _.filter(selected, (element) => element.country != country.country)

        setSelected(newArray)

        return false
    }

    console.log(`selected`, selected)

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

export default CountriesListGroup