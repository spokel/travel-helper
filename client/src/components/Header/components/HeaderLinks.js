import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer, Link, LinkText } from '../styles';

const HeaderLinks = () => {
  return (
    <LinkContainer>
      <Link>
        <FontAwesomeIcon icon='box' />
        <LinkText href='#'>Packages</LinkText>
      </Link>
      <Link>
        <FontAwesomeIcon icon='heart' />
        <LinkText href='#'>Trips</LinkText>
      </Link>
      <Link>
        <LinkText href='#'>Sign In</LinkText>
      </Link>
    </LinkContainer>
  )
}

export default HeaderLinks;
