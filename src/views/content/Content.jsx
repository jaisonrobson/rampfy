import React from 'react'

import { Container, Row, Col } from 'reactstrap'

const Content = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs="2">Coluna 1</Col>
                <Col >Coluna 2</Col>
            </Row>
        </Container>
    )
}

export default Content