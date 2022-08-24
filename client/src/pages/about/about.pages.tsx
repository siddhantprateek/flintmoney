import React, { useState } from 'react'
// import PODCAST from '../../assets/podcast.mp4'
// components
import { AboutHero, Partner } from '../../components'

// assets
import { Mute, UnMute } from '../../assets'

// styles 
import './about.styles.css'

const About = () => {
  const [ muted, setMuted ] = useState(true)

  return (
    <div className='about-page pages'>
      <section>
        <div className="spreads"></div>
        <div className="spreads"></div>
      </section>
      <div className="about-hero-section">
        <AboutHero />
      </div>

      <div className="founder-video-section">
        <video width="750" height="500" autoPlay loop muted={muted}>
          <source src={`https://www.flint.money/podcast.mp4`} type='video/mp4'/>
        </video>
      </div>
      <div className="founder-content">
        <p>- Co-Founders </p>
          { muted ? <img className='vol' src={Mute} alt="" onClick={() => setMuted(!muted)} /> : <img  className='vol' src={UnMute} alt="" onClick={() => setMuted(!muted)} /> }          
      </div>

      <div className="our-partners-section">
        <Partner />
      </div>
    </div>
  )
}

export default About