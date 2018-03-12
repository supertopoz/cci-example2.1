import React from 'react'
import PictureText from './PictureText.jsx';
import images from './images';

const picture1 = images.englishClassesHome1;
const picture2 = images.englishClassesHome2;
const picture3 = images.englishClassesHome3;


const data1 = {
	title: 'Start any week',
	paragraphs: [
	'Avoid the waste of time and money that comes with buying classes you can\'t attend. Committing to schedules that someone else has created is difficult at best.',
	'This is why most of our courses can be started any week of the year. Too busy to start this week? Not a problem. You can join an existing group course next week. And you don\'t pay for any classes that happened before or after the study period you agree on with CCI English.',
	'Meet with one of our advisors for free to find the best level, class and schedule that suits your life. '
	],
	buttonText:'Schedule your meeting',
	buttonLink: 'connect',
	// Text is 'right'
	format: ['right','left'],
	//format: ['left','right'],
	background: '#f3f3f3'
}

const data2 = {
	title: 'Choose your class',
	paragraphs: [
	'At CCI English, we believe that learning English is not a one-size-fits-all situation. We offer classes of various sizes, each with a different focus.',
	'You can also find specialty products, such as private classes in person or online, Corporate English programs for your company, or a study abroad program to help you arrange an English study trip in another country. ',
	'CCI English\'s advisors are readily available for a free level test and meeting to help you decide which classes are best for you.'
	],
	buttonText:'Schedule your meeting',
	buttonLink: 'connect',
	// Text is 'right'
	//format: ['right','left'],
	format: ['left','right'],
	background: 'white'
}

const data3 = {
	title: 'Study with the best teachers & materials',
	paragraphs: [
	'CCI English teachers are highly trained and skilled in their profession. They have national teaching qualifications, Cambridge University qualifications, or both and are ready to use their expertise to help you reach your English language learning goals.',
	'We also have the best materials for each class. Our coursebooks are imported from England and come with access to exclusive online content for you to use in class or at home. For specialized lessons or classes, your teacher will choose the best combination of coursebook material and real-world material such as articles, podcasts and videos to help you progress with your English.',
	'With CCI, you receive expert English instruction and high-quality materials, all of which come standard in your lesson package.'
	],
	buttonText:'Meet our team',
	buttonLink: 'connect',
	// Text is 'right'
	format: ['right','left'],
	background: '#f3f3f3'
}



const EnglishClassesHome = () => (
  <div>
    <PictureText picture={picture1} data={data1} />
    <PictureText picture={picture2} data={data2} />
    <PictureText picture={picture3} data={data3} />
  </div>
)

export default EnglishClassesHome