import React from 'react'
import styled from 'styled-components'

const ListWrapper = styled.ul 
`
list-style: none;
text-align: left;
padding: 0;
`

const ListItem = styled.li 
`
displaye: flex;
justify-content: space-between;
`
const Label = styled.span 
`
font-weight: strong;
`

const List = ({items}) => {
    return (
        <ListWrapper>
        {items.map((item) => {
            console.log(item)
            return (
            <ListItem key={item.label}>
                <Label>{item.label}</Label>{item.value}
            </ListItem>
            )
        })}
    </ListWrapper>
    )
    
}

export default List