import React from 'react';
import PictureText from './PictureText.jsx';
import images from './images';




const picture = images.gallary4;

const data = {
  title: 'Relax while you learn',
  paragraphs: [
    'Our school is new and modern. It is designed  to make your learning experience productive and comfortable</p>',
    'You\'ll find bright, well lit rooms, comfortable seating and large white boards in each classroom. There is also a kitchen with a common area where people gather, talk and and practice their English. Our students are always welcome here to study or just relax.'
  ],
  buttonText:'See our school',
  buttonLink: 'connect',
  // Text is 'right'
  //format: ['right','left'],
  format: ['right','left'],
  background: '#f3f3f3'
}

const ChooseCambridgeQuality = () => (
  <div>
    <PictureText picture={picture} data={data} />
  </div>  
)

export default ChooseCambridgeQuality