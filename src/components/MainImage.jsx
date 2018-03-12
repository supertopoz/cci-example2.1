import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: grid;
  margin-top: 2px;
`;

const MainImageHolder = styled('img')`
  width: 100%;
`;

const Heading = styled('h1')`
  margin-top: -15px;

  @media (max-width: 599px) {
    font-size: 20px;
    margin-top: 0px;
    }
`;


const HeadingBanner = styled.div`
    background: rgba(255,255,255, 0.8);
    margin-top:-65px;
    text-align: center;
    padding:20px;
`;

class MainImage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
    <Wrapper>
      <MainImageHolder src={this.props.image} alt="main image"/>
      <HeadingBanner>
        <Heading> {this.props.text}</Heading>
      </HeadingBanner>
    </Wrapper>
    )
  }
}

export default MainImage