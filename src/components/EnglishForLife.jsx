import React from 'react'
import PictureText from './PictureText.jsx';
import images from './images';

const picture1 = images.englishClassesLife1
const picture2 = images.englishClassesLife2


const data1 = {
	title: 'Classes for you',
	paragraphs: [
	'For every student, CCI begins with a free meeting to assess their English level. We do this with a short written test and a spoken interview. This helps us know more about your background and learning preferences as well as your language level.',
	'With this information, we place each student in a class that fits their current level of English. This ensures that you make good use of your time. You won\'t be overwhelmed with things that are too difficult or waste your time learning things that are too easy. You\'ll be in the right class to make the most of your time and to progress at a fast pace.',
	
	],
	buttonText:'Schedule your meeting',
	buttonLink: 'connect',
	// Text is 'right'
	format: ['right','left'],
	//format: ['left','right'],
	background: 'white'
}

const data3 = {
	title: 'Learn English & gain confidence',
	paragraphs: [
	'Our mission at CCI is to help our students reach their goals. If you want to speak a little bit of English when you travel, work in an English-speaking office or even move abroad, we will help you improve your English to this end.',
	'Your lessons at CCI English will help you increase your vocabulary, practice your speaking and gain confidence in your own English abilities. We guarantee that there will be speaking included in every lesson because we want you to be able to function in English in real life situations, not just in the classroom.',
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