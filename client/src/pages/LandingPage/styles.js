import styled from 'styled-components';

export const Showcase = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  z-index: 2;
  transition: 0.5s;
`

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3)
`

export const TitleText = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  z-index: 10;

  & h2 {
    font-size: 4em;
    font-weight: 800;
    line-height: 1em;
    text-transform: uppercase;
    color: #fff;
  }

  & p {
    font-size: 1.1em;
    margin: 20px 0;
    max-width: 700px;
    color: #fff;
  }
`

export const SecondaryText = styled.div`
  color: #fff;
  z-index: 2;

  & h3 {
    display: inline-block;
    margin-right: 2rem;
  }

  & a {
    display: inline-block;
    font-size: 1em;
    background: #fff;
    padding: 10px 10px;
    text-decoration: none;
    color: #000;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.2s;
  }

  & a:hover {
    letter-spacing: 6px;
  }
`