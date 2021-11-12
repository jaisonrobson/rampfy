import React, { useContext, useEffect, useState } from 'react'
import { withReducerContext, ReducerContext } from '../../contexts/withReducerContext'
import { fetchCovidStatistics } from '../../store/actions'

import Content from '../content/Content'

const App = () => {
    const { dispatch, ...state } = useContext(ReducerContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://covid19-api.com/country/all?format=json`)
            .then((res) => res.json())
            .then((countries) => {
                console.log(`countries`, countries)
                fetchCovidStatistics(dispatch, countries)
                setLoading(false)
            })
    }, [dispatch, loading /*, state.countriesStatus*/])

    return (
        !loading ? (
            < div className="bg-secondary" >
                <Content />
            </div >
        ) : (
            <div>Carregando informações...</div>
        )
    )
}

export default withReducerContext(App)