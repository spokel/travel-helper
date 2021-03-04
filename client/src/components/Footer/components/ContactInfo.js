import React from 'react';
import { ContactContainer, ContactName, ContactDetails, Hr } from '../styles';

const ContactInfo = () => {
  return (
    <ContactContainer>
      <ContactName>Steven Pokela</ContactName>
      <Hr />
      {/* <ContactDetails> */}
        <p>(561) 123 - 4567</p>
        <p>steven.pokela@email.com</p>
      {/* </ContactDetails> */}
    </ContactContainer>
  )
}

export default ContactInfo;
