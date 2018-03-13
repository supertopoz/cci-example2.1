import React from 'react'
import styled from 'styled-components'
import MainImage from './MainImage.jsx';
import images from './images.js'

const picture = images.contactusbanner;

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
    grid-template-columns: 50% 50%;
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
  padding: 20px;
`;

let Wrapper = styled.div`${wrapperStyle}`;

let ContactFormBlock = styled.div`
  display: grid;
  grid-gap: 10px;
  align-content: center;
  justify-self: center;
`;

const InputItem = styled('input')`
  width: 17rem;
  height: 2rem;
  padding-left:5px;
  border: 1px solid #50C8EB;
  border-radius: 2px;
`;

let TextBlock = styled.div`
  padding: 20px;
   @media (max-width: 600px){
    padding: 8px;
   }
  grid-auto-columns: auto;
  grid-area: cam-left;

`;

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

const Labels = styled('label')`
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


class Contact extends React.Component {
  constructor(props){
    super(props)
  }



  render(){
  return (
   
  <div>

  <MainImage  text={'Contact CCI English'} image={picture} /> 
  <Wrapper> 
  <TextBlock> 
    <Heading style={{textAlign:'center'}}>Send us a message</Heading> 
  <div>
  <Paragraph>Contact us with your questions about English classes. Everyone who works at our school is knowledgable about English, teaching and traveling.</Paragraph>
  <Paragraph>Our staff is happy to provide information via email, on the phone, over Skype or in person at our school. </Paragraph>
  <Paragraph>CCI English:</Paragraph>
  <ul>
    <li><Paragraph>Provides free level testing and consultations for students</Paragraph></li>
    <li><Paragraph>Can speak to you in English, Hebrew, Russian, Ukrainian, French or Spanish</Paragraph></li>
    <li><Paragraph>Has education experts that can help you decide on the best course option</Paragraph></li>
  </ul>
  </div>   
  </TextBlock>
  <ContactFormBlock>
    <Labels>
    First Name:<span style={{color:'red'}}>*</span>
    <br/>
    <InputItem type="text" name="name" required/>
  </Labels>
  <Labels>
    Last Name <span style={{color:'red'}}>*</span>:
    <br/>
    <InputItem type="text" name="name" />
  </Labels>

  <Labels>
    Email<span style={{color:'red'}}>*</span>:
    <br/>
    <InputItem type="text" name="name" />
  </Labels>

  <Labels>
    Phone Number<span style={{color:'red'}}>*</span>:
    <br/>
    <InputItem type="text" name="name" />
  </Labels>

  <Labels>
    Message<span style={{color:'red'}}>*</span>:
    <br/>
    <textarea type="text" name="name" />
  </Labels>

  <InputItem type="submit" value="Submit" />
  </ContactFormBlock>
  </Wrapper>
 <TextBlock>
 <Heading style={{textAlign:'center'}}>Call us</Heading> 
  <Paragraph>In Israel: 073-769-4499</Paragraph>
  <Paragraph>Outside of Israel: +972 73-769-4499</Paragraph>
 </TextBlock>
  <TextBlock>
  <Heading style={{textAlign:'center'}}>Visit our school</Heading> 
  <Paragraph>Visit our school</Paragraph>
 </TextBlock>

  </div>

   )
  }
}

export default Contact