import React from 'react'
import PictureText from './PictureText.jsx';
import images from './images';

const picture1 = images.englishClassesCorporate1;
const picture2 = images.englishClassesCorporate2;


const data1 = {
	title: 'All-inclusive courses',
	paragraphs: [
	'CCI English will take responsibility for your English program from start to finish. We provide a free consultation meeting and level testing services. This is an essential part of helping us understand your company\'s and employees\' needs.',
	'Once we have assessed your company\'s needs, our team of course designers will produce a customized plan to help your team reach its English goals. We will work with you to set an appropriate class schedule that will help you achieve your goals as efficiently as possible within your budget.',
	'As any good manager knows, creating a plan is only the beginning of any project. From the moment you sign on for corporate English lessons with CCI, you will have an account manager from our team who will be your point of contact for any inquiries you have. They will be in charge of managing the teachers at your company, monitoring students, and reporting to you at regular intervals so you know what\'s happening in your classes and how your employees are progressing.'
	],
	buttonText:'Meet our team',
	buttonLink: 'connect',
	// Text is 'right'
	format: ['right','left'],
	//format: ['left','right'],
	background: 'white'
}

const data3 = {
	title: 'Tailored content for your company\'s needs',
	paragraphs: [
	'CCI English\'s team is composed of experts in course planning, teaching and assessment. We are skilled in managing courses for General English, Business English, and English for Specific Purposes. We can provide small group courses, private English lessons or a combination in order to get your company\'s English where it needs to be.',
	'Our management team is 100% Cambridge University-trained. This means that our team can provide the highest possible quality in English language courses for your team.'
	],
	buttonText:'Schedule your meeting',
	buttonLink: 'connect',
	// Text is 'right'
	//format: ['right','left'],
	format: ['left','right'],
	background: '#f3f3f3'
}



const CorporateEnglishClasses = () => (
  <div>
    <PictureText picture={picture1} data={data1} />
    <PictureText picture={picture2} data={data3} />
  </div>
)

export default CorporateEnglishClasses