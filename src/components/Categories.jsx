import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {categories} from "../data"
import {mobile} from '../responsive'
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    ${mobile({padding:"0",flexDirection:"column"})}
`
export default function Categories({}) {
  return (
    <Container>
        {
            categories.map(item=>(
                <CategoryItem item={item}></CategoryItem>
            ))
        }
    </Container>
  )
}
