import React from 'react'
import { withCountriesContext, withCountriesContextConsumer } from '../../contexts/withCountriesContext'
import Content from '../content/Content'


class App extends React.Component {
    componentDidMount() {
        const { countriesState: { setCountries, setLoading } } = this.props

        setLoading(this.props.countriesState, true)

        fetch(`https://covid19-api.com/country/all?format=json`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setCountries(this.props.countriesState, result)
                    setLoading(this.props.countriesState, false)
                },
                (error) => {
                }
            )
    }

    render() {
        const { countriesState: { loading, selectedCountries } } = this.props

        return (
            !loading ? (
                < div >
                    <Content />
                </div >
            ) : (
                <div>Carregando informações...</div>
            )
        )
    }
}

export default withCountriesContext(withCountriesContextConsumer(App))