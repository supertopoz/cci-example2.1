import React from 'react'
import styled from 'styled-components'


const Btn = styled.div`
  text-decoration: none;
  background: #a2c534;
  padding: 10px;
  text-align: center;
  width: 200px;
  margin: 0 auto;
  box-shadow: 1px 1px 1px #999;
  &:hover {
  color:white;
  background: #b7d753;
  cursor: pointer;
}
`;

const StyledLink = styled.div`
  text-decoration: none;
`;

//Meet our team = homepage
//Contact us about classes = contactcci
//Schedule your meeting = contactcci
//Contact an advisor = contactcci



class GreenButton extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
   let to = '/'
   if (this.props.text === 'Meet our team'){
    to = '/our-school'
   } else {
    to = '/contactcci'
   }

  return (
    <StyledLink to={to}>
    <Btn>
    {this.props.text}
    </Btn>
    </StyledLink>
    )
  }
}

export default GreenButton;