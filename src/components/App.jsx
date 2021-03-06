import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { hot } from 'react-hot-loader'

import images from './images.js'
import styled from 'styled-components'

import OurSchool from './OurSchool.jsx'
import Contact from './Contact.jsx'
import EnglishClasses from './EnglishClasses.jsx'
import Home from './Home.jsx'


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
    box-shadow: 0px 2px 2px #9c9c9c;
    padding: 2px;
`;

const MenuButtons = styled.div`
    grid-area: nav;
    display: grid;
    padding:5px; 
    grid-gap: 5px;   
    grid-template-columns: 1fr 1fr 1fr 1fr;

`;

const MenuItem = styled.div`
    display: grid;
    font-size: 15px;
    font-family: 'Rubik',sans-serif;
    text-decoration: none;
    text-align: center;
    background-color: white;
    border-radius:2px;
    align-items: center;
    box-shadow: 1px 1px 1px #9c9c9c;
    /*for-phone-only*/
    @media (max-width: 599px) {
    font-size: 15px;
    }    
      &:hover {
      border-bottom: 1px rgb(80, 200, 235) solid;
      transition: 0.5s; /* delays for 1 second */
      -webkit-transition: 0.5s; /* for Safari & Chrome */
      cursor: pointer;
    }  
`;

const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;
  

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



class App extends React.Component {
  constructor(props){
  	super(props);
  }


  render(){
  	return(
		<Router>
		<div className="wrapper">
		<Menu>
  		<MenuItemLogoLeft>  
  		  <Link to="/"><StyledLogo src={images.ccilogo} alt="Logo"/></Link>
  		</MenuItemLogoLeft>
  		<MenuButtons>
    		<MenuItem>  
    		  <StyledLink to="/our-school">Our school</StyledLink>
    		</MenuItem>  
    		<MenuItem>  
    		  <StyledLink to="/english-classes">English classes</StyledLink>
    		</MenuItem>  
    		<MenuItem>
    		  <StyledLink to="https://www.celta.ccienglish.com/" target="_blank">CELTA</StyledLink>
    		</MenuItem>
    		<MenuItem>    
    		  <StyledLink to="/contactcci">Contact</StyledLink>
    		</MenuItem>               
  		</MenuButtons>  
  		<MenuItemLogoRight>
    		<ExternalLink href="//www.cambridgeenglish.org/" target="_blank">
    		  <img style={{float:'right',padding:'10px', width:'150px'}} src={images.cambridgeLogo} alt="Logo"/>
    		</ExternalLink>
  		</MenuItemLogoRight>
		</Menu>	

    <Route path="/our-school" component={OurSchool}/>
    <Route path="/english-classes" component={EnglishClasses}/>
    <Route path="/contactcci" component={Contact}/>
    <Route path="/home" component={Home}/>
    <Route exact path="/" component={Home}/>
		</div>	    
		</Router>
  		)
  }
  


}
export default hot(module)(App);