import React from 'react';
import ContactInfo from './components/ContactInfo';
import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer id='footer'>
      <ContactInfo />
    </FooterContainer>
  )
}

export default Footer;
