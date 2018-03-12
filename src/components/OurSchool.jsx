import React from 'react'
import styled from 'styled-components'
import PictureGallaryText from './PictureGallaryText.jsx'
import CambridgeGuarantee from './CambridgeGaurantee.jsx'
import QualityAndComfort from './QualityAndComfort.jsx'
import images from './images.js'
import OurTeam from './OurTeam.jsx'

const pictures = 
            [
            images.ourSchool1,
            images.ourSchool2,
            images.ourSchool3,
            images.ourSchool4,
            images.ourSchool5,
            images.ourSchool6,
            images.ourSchool7,
            images.ourSchool8,
            images.ourSchool9
            ]

const data = {
  title: 'Our Story',
  paragraphs: [
        'CCI\'s story, like many others, began while socializing at a local bar. One night Amir, Christina & Svitlana went out to celebrate a friend\'s birthday in New York City. The three soon found that they shared a number of common interests, including English education and life in Israel. This discovery led to a light hearted conversation about opening their own school in Israel one day.',
        'They spent years traveling and working together around the world including Ukraine, Sri Lanka, and Ireland before they decided that opening their own school was something they had the knowledge, experience and passion to do.',
        'Now, all three friends are living their dream of running an English school in Tel Aviv, which is the  primary metropolitan center of the country. They\'re thrilled to be running a school modeled after their own learning philosophy - that only by practicing the language can students increase their confidence and ability to interact outside of the classroom.',
        'They love working with intelligent, motivated, fun-loving students in Israel and abroad to help them achieve their goals for English language learning.',
  ],
  buttonText:'Meet our team',
  buttonLink: 'connect',
  caption: 'CCI English founders Svitlana Bulkina, Amir Landa & Christina Kaku - Photos by Ifaa Amit',
  // Text is 'right'
  //format: ['right','left'],
  format: ['left','right'],
  background: '#f3f3f3',
  pictures: pictures
} 

const Home = () => (
  <div>
    <PictureGallaryText data={data} />
    <OurTeam style={{margin:'0 auto'}}></OurTeam>
    <CambridgeGuarantee/>
    <QualityAndComfort/>
  </div>
)


module.exports = Home;