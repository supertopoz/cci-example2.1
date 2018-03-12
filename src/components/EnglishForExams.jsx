import React from 'react'
import PictureText from './PictureText.jsx';
import images from './images';

const picture1 = images.englishClassesExams1;
const picture2 = images.englishClassesExams2;


const data1 = {
	title: 'Improve your score',
	paragraphs: [
	'When studying for an exam, you often have to make a lot of progress in a relatively short amount of time. Whether your goal is to study, work or live in an English-speaking environment, you want the best score possible.',
	'We have a free meeting with each student before they enroll for classes to do a level test and to advise them on the best preparation choices to get the score they want on their exam.',
	],
	buttonText:'Schedule your meeting',
	buttonLink: 'connect',
	// Text is 'right'
	format: ['right','left'],
	//format: ['left','right'],
	background: 'white'
}

const data3 = {
	title: 'Winning strategies',
	paragraphs: [
	'CCI\'s exam preparation classes are taught by experts both in English and exam strategy, so they help students prepare for what is on the test as well as how to maximize their scores. If you\'re looking to improve your score on the IELTS, TOEFL or one of the Cambridge Suite exams, these are the classes for you.',
	'You\'ll have the opportunity to learn about exam strategies, get strategic language input to help you answer exam questions better, and take practice exams to give you a realistic idea of what to expect on test day.'
	],
	buttonText:'Schedule your meeting',
	buttonLink: 'connect',
	// Text is 'right'
	format: ['left','right'],
	background: '#f3f3f3'
}



const EnglishClassesHome = () => (
  <div>
    <PictureText picture={picture1} data={data1} />
    <PictureText picture={picture2} data={data3} />
  </div>
)

export default EnglishClassesHome