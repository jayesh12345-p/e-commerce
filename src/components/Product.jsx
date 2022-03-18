import { FavoriteBorderOutlined, SearchOutlined } from '@mui/icons-material'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position:absolute; 
    top: 0;
    left: 0; 
    background-color: rgba(0,0,0,0.2); 
    z-index: 3; 
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const Container= styled.div`
    flex:1;
    margin: 5px;
    min-width:280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover{
        ${Info}{
            opacity: 1;
        }
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
;

`
const Image = styled.img`
    z-index: 2;
    height: 75%;
    `

const Icons = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    &:hover{
        background-color: #e9f5f5;
        transition: all 0.2s ease;
        transform: scale(1.1);
    }
`
export default function Product({item}) {
    console.log(item.img)
  return (
    <Container>
        
        <Circle></Circle>
        <Image src={item.img}></Image>
        <Info>
            <Icons>
                <ShoppingCartOutlined></ShoppingCartOutlined>
            </Icons>
            <Icons>
                <SearchOutlined></SearchOutlined>
            </Icons>
            <Icons>
                <FavoriteBorderOutlined></FavoriteBorderOutlined>
            </Icons>
        </Info>
        
    </Container>
  )
}
