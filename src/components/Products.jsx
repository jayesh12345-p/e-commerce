import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
const Container= styled.div`
    display: flex;
    margin: 5px;
    flex-wrap: wrap;
`

export default function Products() {
  return (
    <Container>
        
        {popularProducts.map(
            (item)=>{return (<Product item={item} key={item.id}/>)}
            
        )}
        
    </Container>
  )
}