import React from 'react'
import styled from 'styled-components'
import GreenButton from './GreenButton.jsx';



const wrapperStyle = `

@media (max-width: 599px) {
    display: grid;
    grid-gap: 5px;
    grid-template-areas: 
      "main-story-right"
      "main-story-left"       
}
/*for-tablet-portrait-up*/

@media (min-width: 600px) {
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "main-story-left main-story-right"
      
}
@media (min-width: 900px) {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 50% 50%
}

  margin-top: 10px;
  border-radius: 1p;
  padding: 20px;
`;

let Wrapper = styled.div`${wrapperStyle}`

const Left = styled.div`
  padding-top: 30px;
  display:grid;
  grid-template-columns: auto;
  grid-area: main-story-left;

`;

const PictureGallary = styled.div`
  display:grid;
  grid-gap:10px;
  align-content: space-between;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 140px);
`;

const Right = styled.div`
  padding: 10px;
  grid-auto-columns: auto;
  grid-area: main-story-right;
`;

const Btn = styled.div`
  background: #a2c534;
  padding: 10px;
  text-align: center;
  width:50%;
  margin: 0 auto;
  box-shadow: 1px 1px 1px #999;
  &:hover {
  color:white;
  background: #b7d753;
  cursor: pointer;
}
`;

const PartyPics = styled('img')`
   justify-self: center;
   @media (max-width: 599px) {
    width: 95px;
   }
   @media (min-width: 600px) {
    width: 120px;
   }
   @media (min-width: 900px) {
    width: 140px;
   }
   @media (min-width: 1200px) {}
   @media (min-width: 1800px) {}
   width: 150px;
`;

const Paragraph = styled.p`
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 600px){
    padding-left: 0px;
    padding-right: 0px;
    font-size: 0.8em;
      line-height: 17px;
  }
  font-family: 'Rubik', sans-serif;
  color: #717070;
  font-weight: lighter !important;
  letter-spacing: 1px;
  line-height: 27px;
`;

const Title = styled.div`
  grid-area: our-team-title;
  font-family: 'Raleway', sans-serif;
  color: #50C8EB;
  font-weight: bold;
  text-align:center;
`;

const Heading = styled('h1')`
  font-family: 'Roboto', sans-serif;
  color: #50C8EB;
  font-size: 45px;
`;

const Caption = styled('p')`
  color: #50C8EB;
  letter-spacing: 0px;
  line-height: none;
  font-size: 12px;
`;


class PictureGallaryText extends React.Component {
  constructor(props){
    super();
    this.state = {
    }
  }
  
  componentWillMount(){
    Wrapper = styled.div`${wrapperStyle} background: ${this.props.data.background};`  
  }

  render(){

  return (
  <Wrapper>
    <Left >
      <PictureGallary>
      {this.props.data.pictures.map((pic, index)=> <PartyPics key={`${index}-pics`} src={pic} alt="random picture" />)}
      </PictureGallary>
      <Caption className="caption">{this.props.data.caption}</Caption>        
    </Left>
    <Right>
    <Title><Heading style={{textAlign:'center'}}>{ this.props.data.title }</Heading></Title>
    <div>
      {this.props.data.paragraphs.map((text, index) => <Paragraph key={`${index}-text`} >{text}</Paragraph>)}    
    </div>
    <GreenButton text={this.props.data.buttonText} />
    </Right>   
  </Wrapper>
)

  

  }

}



export default PictureGallaryText