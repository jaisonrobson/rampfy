import React from 'react'
import styled from 'styled-components'
import { ListGroup as ReactstrapListGroup, ListGroupItem as ReactstrapListGroupItem } from 'reactstrap'

// const StyledListGroup = styled(({
//     justifyContent,
//     width,
//     height,
//     display,
//     alignItems,
//     ...props
// }) => <ReactstrapListGroup {...props} />)`
//     ${({ justifyContent }) => justifyContent ? `justify-content: ${justifyContent};` : ``}
//     ${({ width }) => width ? `width: ${width};` : ``}
//     ${({ height }) => height ? `height: ${height};` : ``}
//     ${({ display }) => display ? `display: ${display};` : ``}
//     ${({ alignItems }) => alignItems ? `align-items: ${alignItems};` : ``}
// `

const ListGroup = (props) => {

    return (
        <ReactstrapListGroup>
            <ReactstrapListGroupItem
                active
                tag="button"
            >
                Brazil
            </ReactstrapListGroupItem>
        </ReactstrapListGroup>
    )
}

export default ListGroup