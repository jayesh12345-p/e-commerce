import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    padding: 20px;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({display:"none"})}
`

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({backgroundColor:"lightGray"})}
`
const Logo = styled.h1`
    flex:1;
`
const Desc = styled.div`
    margin: 20px 0;
    font-weight: 400;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const ContactItem= styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`

const Payment= styled.img`
    width: 50%;
`
export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>Shopping.</Logo>
            <Desc>Welcome to Shopping. You can find the best quality product from here.</Desc>
            <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook></Facebook>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram></Instagram>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter></Twitter>
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest></Pinterest>
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>

            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>

            <Title> Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                623 Diuen Park, South Kingsburgs, 91203
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                +1 234 567 8901
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>
                contact@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
        </Right>
        
    
    </Container>
  )
}
