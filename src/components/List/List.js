import React from 'react'
import styled from 'styled-components'

const ListWrapper = styled.ul 
`
list-style: none;
text-align: left;
padding: 0;
`

const Title = styled.h2 
`
border-bottom: 1px solid light-Grey;
padding: 10px 0;
`

const ListItem = styled.li 
`
display: flex;
justify-content: space-between;
`
const Label = styled.span 
`
font-weight: strong;
`

const List = ({items, title}) => {
    return (
        <>
        <Title>{title}</Title>
        <ListWrapper>
        {items.map((item) => {
            console.log(item)
            return (
            <ListItem key={item.label}>
                <Label>{item.label}:</Label>{item.value}
            </ListItem>
            )
        })}
    </ListWrapper>
    </>
    )
    
}

export default List