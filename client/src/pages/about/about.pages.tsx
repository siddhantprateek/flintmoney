import React from 'react'
// import PODCAST from '../../assets/podcast.mp4'
// components
import { AboutHero, Partner } from '../../components'

// styles 
import './about.styles.css'

const About = () => {
  return (
    <div className='about-page pages'>
      <div className="about-hero-section">
        <AboutHero />
      </div>

      <div className="founder-video-section">
        <video width="750" height="500" autoPlay loop muted={true}>
          <source src={`https://www.flint.money/podcast.mp4`} type='video/mp4'/>
        </video>
      </div>
      <div className="founder-content">
        <p>- Co-Founders </p>
      </div>

      <div className="our-partners-section">
        <Partner />
      </div>
    </div>
  )
}

export default About