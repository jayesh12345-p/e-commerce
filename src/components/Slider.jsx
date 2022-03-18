import React, { useState } from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined,ArrowRightOutlined} from '@mui/icons-material';
import {sliderItems} from '../data.js';
import {mobile} from '../responsive'

const Container = styled.div`
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display:"none"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction==="left" && "10px"};
    right: ${props=>props.direction==="right" && "10px"};
    cursor: pointer;
    margin: auto;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.sliderIndex*-100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
export default function Slider() {
    const length= sliderItems.length-1;
    const [sliderIndex,setSliderIndex] = useState(0)
    const handleClick=(direction)=>{
        if (direction==='right'){
            setSliderIndex(sliderIndex>0? sliderIndex-1: length)
        }
        else{
            setSliderIndex(sliderIndex<length? sliderIndex+1: 0)
        }
}
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper sliderIndex={sliderIndex}>
            {sliderItems.map((item)=>{
                return(
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Shop now</Button>
                </InfoContainer>
                </Slide>)
            })}
            {/* <Slide bg='f5fafd'>
            <ImgContainer>
                <Image src="https://i.ibb.co/tcTxGVr/1.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Summer Sale</Title>
                <Desc>30% off!</Desc>
                <Button>Shop now</Button>
            </InfoContainer>
            </Slide>
            <Slide bd='fcf1ed'>
            <ImgContainer>
                <Image src="https://i.ibb.co/XsdmR2c/1.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Winter Sale</Title>
                <Desc>30% off!</Desc>
                <Button>Shop now</Button>
            </InfoContainer>
            </Slide>
            <Slide bg='fbf0f4'>
            <ImgContainer>
                <Image src="https://i.ibb.co/XsdmR2c/1.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Popular Sale</Title>
                <Desc>30% off!</Desc>
                <Button>Shop now</Button>
            </InfoContainer>
            </Slide> */}
        </Wrapper>
        
        <Arrow direction="right" onClick={()=>handleClick('left')}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}
