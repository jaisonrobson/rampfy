import React from 'react'
import styled from 'styled-components'
import { Col as ReactstrapCol } from 'reactstrap'

const StyledCol = styled(({
    justifyContent,
    width,
    height,
    display,
    alignItems,
    boxShadow,
    backgroundColor,
    ...props
}) => <ReactstrapCol {...props} />)`
    ${({ justifyContent }) => justifyContent ? `justify-content: ${justifyContent};` : ``}
    ${({ width }) => width ? `width: ${width};` : ``}
    ${({ height }) => height ? `height: ${height};` : ``}
    ${({ display }) => display ? `display: ${display};` : ``}
    ${({ alignItems }) => alignItems ? `align-items: ${alignItems};` : ``}
    ${({ boxShadow }) => boxShadow ? `box-shadow: ${boxShadow};` : ``}
    ${({ backgroundColor }) => backgroundColor ? `background-color: ${backgroundColor};` : ``}
`

const Col = (props) => <StyledCol {...props} />

export default Col
