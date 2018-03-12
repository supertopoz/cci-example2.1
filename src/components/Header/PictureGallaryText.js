import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'




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
      <p className="caption">{this.props.data.caption}</p>        
    </Left>
    <Right>
    <h1 style={{textAlign:'center'}}>{ this.props.data.title }</h1>  
    <div>
      {this.props.data.paragraphs.map((text, index) => <p key={`${index}-text`} >{text}</p>)}    
    </div>
    <Btn>{this.props.data.buttonText}</Btn>
    </Right>   
  </Wrapper>
)

  

  }

}



export default PictureGallaryText