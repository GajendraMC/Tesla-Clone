import React, { useState } from 'react';
import styled from 'styled-components';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux'
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src='/Tesla Images/logo.svg' alt='My picture' />
      </a>

      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
      </RightMenu>
      <CustomMenu onClick={() => setBurgerStatus(true)} src='/Tesla Images/menu.svg' alt="My image" />
      <BurgerNav show={burgerStatus}>
        <GoInside>
          <Close onClick={() => setBurgerStatus(false)} src='/Tesla Images/close.svg' alt='Close here' />
        </GoInside>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Already checked</a></li>
        <li><a href='#'>Model S</a></li>
        <li><a href='#'>Model X</a></li>
        <li><a href='#'>Model Y</a></li>
        <li><a href='#'>Model T</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
${'' /* justify-content: space-between; */}
gap: 15px;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`

const Menu = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: center;
a {
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 20px;
  flex-wrap: nowrap;
}

@media(max-width: 768px){
  display: none;
}
`

const RightMenu = styled.div`
a {
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 15px;
  flex-wrap: nowrap;
}
`

const CustomMenu = styled.img`
width: 2.5%;
top: 0;
align-items: center;
justify-content: center;
margin: auto;
cursor: pointer;
font-weight: bold;
@media(max-width: 768px){
  width: 5%;
  transition:.6s;
}
`
const BurgerNav = styled.div`
background: white;
width: 300px;
bottom: 0;
position: fixed;
right: 0;
top: 0;
list-style: none;
z-index: 10;
padding: 20px;
display:flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ease-in;
li {
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,.2);
}

a{
  font-weight: 600;
}
`

const Close = styled.img`
width: 8%;
align-item: right;
cursor: pointer;
`

const GoInside = styled.div`
display: flex;
justify-content: flex-end;
`

