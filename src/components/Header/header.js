import React from 'react'
import logo from '../assets/ccilogo.png'
import camLogo from '../assets/cambridgeLogo.png'
import styled from 'styled-components'

const Menu = styled.div` 
  margin: 0 auto;
  background: white;
  order: 1;
  max-width: 1200px;
  display: grid;
  /*for-phone-only*/
  @media (max-width: 599px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
       "left-head right-head"
       "nav nav"
  }

  /*for-tablet-portrait-up*/
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    "left-head right-head"
    "nav nav"
  }  
  /*for-tablet-landscape-up*/
    @media (min-width: 900px) { 
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: 
    "left-head nav right-head"
  }
  /*for-desktop-up*/
    @media (min-width: 1200px) { 
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: 
    "left-head nav right-head"
  }
  /*for-big-desktop-up*/
    @media (min-width: 1800px) { 
    grid-template-columns: 2fr 4fr 2fr;
    grid-template-areas: 
    "left-head nav right-head"
  }
    align-items: center;
    background: 'white';
    box-shadow: 2px 2px 2px #9c9c9c;
    padding: 2px;
`;

const MenuButtons = styled.div`
    grid-area: nav;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;

`;

const MenuItem = styled.div`
    color: grey;
    padding-bottom: 10px;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    /*for-phone-only*/
    @media (max-width: 599px) {
    font-size: 15px;
    }    
`;

const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;
  &:hover {
      border-bottom: 3px rgb(80, 200, 235) solid;
      transition: 0.5s; /* delays for 1 second */
      -webkit-transition: 0.5s; /* for Safari & Chrome */
      cursor: pointer;
    }  
`

const ExternalLink = styled('a')`
  color: grey;
  text-decoration: none;
  &:hover {
      border-bottom: 3px rgb(80, 200, 235) solid;
      transition: 0.5s; /* delays for 1 second */
      -webkit-transition: 0.5s; /* for Safari & Chrome */
      cursor: pointer;
    }  
`


const MenuItemLogoLeft = styled.div`
  grid-area: left-head;
  alignSelf: center;

`

const MenuItemLogoRight = styled.div`
  grid-area: right-head;
  alignSelf: center;
`

const StyledLogo = styled('img')`
  height: 50px;
  width: 100px;
  &:hover {
    cursor:pointer;
  }
`;

const Header = () => (
  <Menu>
  <MenuItemLogoLeft>
  <Link to="/">
  <StyledLogo src={logo} alt="Logo"/>
  </Link>  
  </MenuItemLogoLeft>
  <MenuButtons>
    <MenuItem>         
      <StyledLink to="/our-school">Our school</StyledLink>
      </MenuItem>
    <MenuItem>         
      <StyledLink to="/english-classes/">English classes</StyledLink>
    </MenuItem>  
    <MenuItem>         
      <ExternalLink href="//www.celtamoldova.com/" target="_blank">CELTA</ExternalLink>
    </MenuItem>  
    <MenuItem>         
      <StyledLink to="/contactcci">Contact</StyledLink>
    </MenuItem> 
  </MenuButtons> 
  <MenuItemLogoRight>
  <ExternalLink href="//www.cambridgeenglish.org/" target="_blank">
  <img style={{float:'right',padding:'10px'}} src={camLogo} alt="Logo"/>
  </ExternalLink>
  </MenuItemLogoRight>
  </Menu>
)

export default Header
