import React from 'react'
import PictureText from './PictureText.jsx';
import images from './images';

const picture1 = images.englishClassesIndividual1;
const picture2 = images.englishClassesIndividual2;


const data1 = {
	title: 'More than conversation',
	paragraphs: [
	'Individual English lessons are a premium product that give students one of the fastest roads to progress available. Your individual course will start with a free meeting where you will take a short level test and we can also interview you about your needs with English. This way we can find the perfect teacher for you.',
	'Once you start studying with your teacher, you will have lessons that are tailored to your exact strengths and weaknesses and geared toward helping you make progress in the areas that are most important to you. If you need to write better, your lessons will focus on writing. If you need to speak better, your lessons will focus on speaking. Your teacher will let you know what you\'re doing well at and what you need to work on in each lesson.',
	],
	buttonText:'Meet our team',
	buttonLink: 'connect',
	// Text is 'right'
	//format: ['right','left'],
	format: ['left','right'],
	background: 'white'
}

const data3 = {
	title: 'Quality & convenience',
	paragraphs: [
	'In addition to providing the best quality in individual lessons, CCI English also provides the convenience of setting your own schedule, whether you take your private lessons in person or online.',
	'CCI  will build your individual class schedule around you. This means you can work your English lessons around your busy schedule with your job, family and friends at times that are convenient for you.',
	'You can take individual lessons as a standalone custom course, or you can take them as a supplement to group classes at CCI English. The first step is to contact us to schedule your free meeting with one of our professional advisors.'
	],
	buttonText:'Schedule you meeting',
	buttonLink: 'connect',
	// Text is 'right'
	format: ['right','left'],
	//format: ['left','right'],
	background: '#f3f3f3'
}



const EnglishClassesIndividual = () => (
  <div>
    <PictureText picture={picture1} data={data1} />
    <PictureText picture={picture2} data={data3} />
  </div>
)

export default EnglishClassesIndividual