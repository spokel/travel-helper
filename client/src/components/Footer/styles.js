import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1.2rem 0;
  color: #a4a1a3;
  background-color: #262122;
`

export const LinksContainer = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Link = styled.a`
  display: inline-block;
  margin-right: 20px;
  font-size: 2em;
  color: #fff;
  transform: scale(0.5);
  transition: 0.5s;

  &:hover {
    transform: scale(0.5) translateY(-15px);
  }
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContactName = styled.p`
  font-size: 1.4rem;
`

export const Hr = styled.div`
  width: 20%;
  height: 1px;
  margin: 0.75rem;
  background-color: #888888;
`

export const ContactDetails = styled.div``