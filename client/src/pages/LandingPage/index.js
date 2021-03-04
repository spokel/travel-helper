import React from 'react';
import { Link } from 'react-router-dom';
import { Showcase, BackgroundVideo, Overlay, TitleText, SecondaryText } from './styles.js';

const LandingPage = () => (
  <Showcase>
    <BackgroundVideo src="/beach-pan.mp4" muted loop autoPlay />
    
    <Overlay />

    <TitleText>
      <h2>Travel Fast. Travel Safe.</h2>
      <p>
        We help you find the safest places to travel or 
        relocate. So you can focus on what matters.
      </p>
    </TitleText>

    <SecondaryText>
      <h3 className="logo">Start searching now</h3>
      <Link to="/search">Explore</Link>
    </SecondaryText>
  </Showcase>
)

export default LandingPage;
