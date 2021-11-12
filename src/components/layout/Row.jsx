import React from 'react'
import styled from 'styled-components'
import { Row as ReactstrapRow } from 'reactstrap'

const StyledRow = styled(({
    justifyContent,
    width,
    height,
    display,
    alignItems,
    ...props
}) => <ReactstrapRow {...props} />)`
    ${({ justifyContent }) => justifyContent ? `justify-content: ${justifyContent};` : ``}
    ${({ width }) => width ? `width: ${width};` : ``}
    ${({ height }) => height ? `height: ${height};` : ``}
    ${({ display }) => display ? `display: ${display};` : ``}
    ${({ alignItems }) => alignItems ? `align-items: ${alignItems};` : ``}
`

const Row = (props) => <StyledRow {...props} />

export default Row
