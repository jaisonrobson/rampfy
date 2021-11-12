import React from 'react'
import styled from 'styled-components'
import { Container as ReactstrapContainer } from 'reactstrap'

const StyledContainer = styled(({
    justifyContent,
    width,
    height,
    display,
    alignItems,
    ...props
}) => <ReactstrapContainer {...props} />)`
    ${({ justifyContent }) => justifyContent ? `justify-content: ${justifyContent};` : ``}
    ${({ width }) => width ? `width: ${width};` : ``}
    ${({ height }) => height ? `height: ${height};` : ``}
    ${({ display }) => display ? `display: ${display};` : ``}
    ${({ alignItems }) => alignItems ? `align-items: ${alignItems};` : ``}
`

const Container = (props) => <StyledContainer {...props} />

export default Container
