import React from 'react'
import PictureText from './PictureText.jsx';
import images from './images';

const picture = images.talkToUs;

const data = {
  title: '',
  paragraphs: [
    'CCI English is the only school in Israel authorized to be a Cambridge University teaching qualifications center. That means that CCI English is assessed for quality by Cambridge English multiple times each year.',
    'With our internationally recognized expertise you are sure to get the highest quality English lessons you can find in Israel. Choose Cambridge University quality with CCI English.'
  ],
  buttonText:'Schedule your Meeting',
  buttonLink: 'connect',
  // Text is 'right'
  //format: ['right','left'],
  format: ['left','right'],
  background: 'white'
}

const TalkToUs = () => (
  <div>
    <h1 style={{textAlign:'center'}} >Talk To Us</h1>
    <PictureText picture={picture} data={data} />
  </div>  

)

export default TalkToUs