import React from 'react'
import styled from 'styled-components'
import PictureText from './PictureText.jsx';
import images from './images.js'

const data = {
  title: 'The Cambridge guarantee',
  paragraphs: [
  'CCI English is authorized by Cambridge English, a division of Cambridge University in England, as the only Cambridge Teaching Qualifications Center in Israel. We take our mission as experts in teaching and learning English seriously and make it our priority to have quality programs for English learners and teachers.',
  'Cambridge English inspects our school multiple times every year and continues to assess us as experts in the field of English language teaching. Choose CCI English to have the highest quality English teaching, verified by Cambridge University.'
  ],
  buttonText:'Contact us about classes',
  buttonLink: 'connect',
  // Text is 'right'
  format: ['right','left'],
  //format: ['left','right'],
  background: '#f3f3f3'
}

const CambridgeGuarantee = () => (
  <div>
    <PictureText picture={images.cambridgeUni} data={data} />
  </div>  
  
)

export default CambridgeGuarantee