import React, { useContext } from 'react'
import { CountriesContext } from '../../contexts/withCountriesContext'
import Col from '../../components/layout/Col'
import Row from '../../components/layout/Row'
import Container from '../../components/layout/Container'

import CountriesListGroup from '../../components/custom/CountriesListGroup'

const Content = () => {
    const { loading, countries, setCountries, setLoading } = useContext(CountriesContext)

    console.log(`loading`, loading)
    console.log(`countries`, countries)

    return (
        <Container fluid width="100vw" height="100vh">
            <Row height="100%" justifyContent="center!important">
                <Col
                    xs="2"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="5px 0px 20px 1px rgba(0,0,0,.35);"
                    backgroundColor="#9199a1"
                    style={{
                        overflowY: 'scroll',
                        maxHeight: '100vh',
                    }}
                >
                    <CountriesListGroup />
                </Col>

                <Col display="flex" alignItems="center" justifyContent="center">
                    Grafico
                </Col>
            </Row>
        </Container>
    )
}

export default Content