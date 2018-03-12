import React from 'react'
import styled from 'styled-components'
import MainImage from './MainImage.jsx';
import TalkToUs from './TalkToUs.jsx'
import ChooseCambridgeQuality from './ChooseCambridgeQuality.jsx'
import LernFromQualifiedTeacher from './LernFromQualifiedTeacher.jsx';
import RelaxWhileYouLearn from './RelaxWhileYouLearn.jsx'
import images from './images.js'

const picture = images.mainPageImage;

const IndexPage = () => (
  <div>
    <MainImage  text={'How good is your English?'} image={picture} /> 
    <TalkToUs />
    <ChooseCambridgeQuality />
    <LernFromQualifiedTeacher />
    <RelaxWhileYouLearn />
  </div>
)

export default IndexPage