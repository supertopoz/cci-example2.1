import React from 'react'
import styled from 'styled-components'
import images from './images.js'
import GreenButton from './GreenButton.jsx'
const wrapperStyle = `



@media (max-width: 599px) {
    display: grid;
    grid-gap: 5px;
    grid-template-areas: 
      "cam-left"
      "cam-right"       
}
/*for-tablet-portrait-up*/

@media (min-width: 600px) {
    align-content: space-between;
  justify-content: space-around;
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "cam-left" 
      "cam-right"
}
/*for-tablet-landscape-up*/

@media (min-width: 900px) {
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "cam-left cam-right"
}
/*for-desktop-up*/

@media (min-width: 1200px) {
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "cam-left cam-right"
}
/*for-big-desktop-up*/

@media (min-width: 1800px) {
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "cam-left cam-right"
}
  margin-top: 10px;
  @media (max-width: 600px){
    padding-left: 2px;
    padding-right: 2px;

  }
`;

let Wrapper = styled.div`${wrapperStyle}`
let PictureBlock = styled.div``;
let TextBlock = styled.div``;

const Pic = styled('img')`
  width: 100%;
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

const Heading = styled('h1')`
  font-family: 'Roboto', sans-serif;
  color: #50C8EB;
  font-size: 45px;
`;


class PictureLeftTextRight extends React.Component {
   
   constructor(props){
     super();
   }

   componentWillMount(){
     const format = this.props.data.format;
     TextBlock = styled.div`
       padding: 20px;
       grid-auto-columns: auto;
       grid-area: cam-${format[0]};
    `;

    PictureBlock = styled.div`
      align-self : center;
      grid-auto-columns: auto;
      grid-area: cam-${format[1]}
    `;   
    Wrapper = styled.div`${wrapperStyle} background:${this.props.data.background};`
   }

   render(){
   const left = <PictureBlock><Pic src={this.props.picture} alt="cambridge University" /></PictureBlock>

   const right = (

    <TextBlock>
    <Heading style={{textAlign:'center'}}>{this.props.data.title}</Heading>  
    <div> 
     { this.props.data.paragraphs.map((text, index)=> <Paragraph key={`${index}-text`}>{text}</Paragraph>) } 
    </div>
    <GreenButton text={this.props.data.buttonText} />
    </TextBlock>
    )
    return( <Wrapper> {left}{right}</Wrapper> )
   }
}

export default PictureLeftTextRight