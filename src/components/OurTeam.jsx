import React from 'react'
import styled from 'styled-components'
import images from './images'

const OurTeamDetails = styled.div`
  display: grid;
  max-width: 800px;
  margin: 0 auto;
  align-item: center;

@media (max-width: 599px) {
    display: grid;
    grid-gap: 5px;
    grid-template-areas: 
      "our-team-title"
      "employee-details"       
}
/*for-tablet-portrait-up*/

@media (min-width: 600px) {
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "our-team-title"
      "employee-details" 
}
/*for-tablet-landscape-up*/

@media (min-width: 900px) {
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "our-team-title"
      "employee-details" 
}
/*for-desktop-up*/

@media (min-width: 1200px) {
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "our-team-title"
      "employee-details" 
}
/*for-big-desktop-up*/

@media (min-width: 1800px) {
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "our-team-title"
      "employee-details" 
}

`;

const OurTeamTitle = styled.div`
  grid-area: our-team-title;
  font-family: 'Raleway', sans-serif;
  color: #50C8EB;
  font-weight: bold;
  text-align:center;
`;

const EmployeeDetails = styled.div`
  grid-area: employee-details

`;

const EmployeeDetail = styled.div`
@media (max-width: 599px) {
	grid-template-rows: 25% 75%;
}
@media (min-width: 600px) {
	grid-template-columns: 25% 75%;
}
@media (min-width: 900px) {}
@media (min-width: 1200px) {}
@media (min-width: 1800px) {}

  display: grid;
  margin: 0 auto;
  grid-gap: 10px;
  padding: 20px; 
`;

const EmployeeName = styled.div`
  color: grey;
`;
const EmployeeBlurb = styled.div`
  font-size: 12px;
  line-height: 0px;

`;
const EmployeeSmallDetail = styled.div`
  font-style: italic;
  color: grey;
`;

const EmployeePic = styled('img')`
  width: 150px;
  margin: 0 auto;
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

const OurTeam = () => (
  <OurTeamDetails>
    <OurTeamTitle><h1>Our Team</h1></OurTeamTitle>
    <EmployeeDetails>
    <EmployeeDetail>
    	<EmployeePic className="staff-pic" src={images.ourSchool1} alt="random picture" />
    	<EmployeeBlurb>
      <EmployeeName><h2>Amir Landa</h2></EmployeeName>
         <Paragraph>As a dual citizen of the US and Israel, Amir loves spending time in both countries.  
         He completed his CELTA in 2007 in New York and immediately moved to Vietnam to teach English. 
         Since then, he has earned his Young Learner certificate and Cambridge Delta diploma. 
         Amir has a wide variety of English Language Teaching experiences, 
         including educational management and training teachers in modern methodology for both adult and young learner classes.  
         He is a Cambridge CELTA course tutor and has delivered courses all over the world.</Paragraph>
       <EmployeeSmallDetail>Delta-qualified teacher, trainer and manager</EmployeeSmallDetail>
      </EmployeeBlurb>
    </EmployeeDetail>
     <EmployeeDetail>
    	<EmployeePic className="staff-pic" src={images.ourSchool1} alt="random picture" />
    	<EmployeeBlurb>
      <EmployeeName><h2>Amir Landa</h2></EmployeeName>
         <Paragraph>
         As a dual citizen of the US and Israel, Amir loves spending time in both countries.  He completed his CELTA in 2007 in New York and immediately moved to Vietnam to teach English. Since then, he has earned his Young Learner certificate and Cambridge Delta diploma. Amir has a wide variety of English Language Teaching experiences, including educational management and training teachers in modern methodology for both adult and young learner classes.  He is a Cambridge CELTA course tutor and has delivered courses all over the world.
         </Paragraph>
       <EmployeeSmallDetail>Delta-qualified teacher, trainer and manager</EmployeeSmallDetail>
      </EmployeeBlurb>
    </EmployeeDetail>
    </EmployeeDetails>
  </OurTeamDetails>
)

export default OurTeam