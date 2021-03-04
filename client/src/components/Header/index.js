import React from 'react';
import HeaderLinks from './components/HeaderLinks';
import { HeaderContainer, LogoContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <h1>Travel Helper</h1>
      </LogoContainer>
      <HeaderLinks />
    </HeaderContainer>
  )
}

export default Header;
