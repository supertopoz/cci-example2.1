import React from 'react'
import PictureText from './PictureText.jsx';
import images from './images';

const picture1 = images.englishClassesWork1;
const picture2 = images.englishClassesWork2;


const data1 = {
	title: 'Professional classes for professional English',
	paragraphs: [
	'Our teachers bring their training as English teaching professionals along with their other life experience from other industries, countries and contexts to each lesson.',
	'For our students, we provide a free meeting that includes a level placement test and enrollment interview for each student to make sure that the program is right for them and that they are right for the program.',
	'The result is a class of professional teachers and engaged students who can work together to provide more than just another English class - they provide a meaningful experience using English in real-life work scenarios.'
	],
	buttonText:'Meet our team',
	buttonLink: 'connect',
	// Text is 'right'
	format: ['right','left'],
	//format: ['left','right'],
	background: 'white'
}

const data3 = {
	title: 'English classes that work for you',
	paragraphs: [
	'At CCI English, we want every English for work lesson that you attend to bring you closer to your professional goals. This is why we take such care in placing our students into classes and making sure that the classes meet your needs.',
	'To this end, we guarantee that we will place you in a class of people of a similar English level who are interested in working in English. Further, we guarantee that you will practice speaking in each lesson on your course.',
	'This is because we want to do more than just have another English class - we want to make sure that each English class gives you the language and practice you need to do better in real-life situations in English so that you can reach your professional goals.'
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