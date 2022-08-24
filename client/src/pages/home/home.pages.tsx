import React from 'react';

// components
import { Featured, Hero } from '../../components';

// styles
import './home.styles.css';

// asset url : https://www.flint.money/rclotties/rcwalk31.mp4

const Home = () => {
  return (
    <div className='home_page pages'>
      <section>
        <div className="spreads"></div>
        <div className="spreads"></div>
      </section>
      <div className="download-now-ad">
        <p>Start earning high yields on 11 more coins. <b>Download ↠</b></p>
      </div>

      <div className="hero-section">
        <Hero/>
      </div>

      <div className="ft-section">
        <Featured/>
      </div>
    </div>
  )
}

export default Home