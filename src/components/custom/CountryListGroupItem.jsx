import React, { useState, useContext, useEffect } from 'react'
import { ListGroupItem as ReactstrapListGroupItem } from 'reactstrap'

const CountryListGroupItem = (props) => {
    const [country, setCountry] = useState(props.country)

    const setSelected = (didSelected) => {
        setCountry({
            ...country,
            selected: didSelected,
        })
    }

    return (
        <ReactstrapListGroupItem
            active={country.selected}
            tag="button"
            onClick={() => {
                const didSelected = props.onClick()
                setSelected(didSelected)
            }}
        >
            {country.country}
        </ReactstrapListGroupItem>
    )
}

export default CountryListGroupItem