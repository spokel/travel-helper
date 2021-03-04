import styled from 'styled-components';

export const MapContainer = styled.div`
  position: relative;
  width: 100vh;
  height: 60vh;
  min-width: 30rem;
  min-height: 25rem;
  overflow: hidden;
`

export const Marker = styled.div`
  font-size: 1.4rem;
  color: red;
`

export const Spinner = styled.div`
  display: flex;
  align-items: center;
  min-width: 50vw;

  & svg {
    font-size: 3rem;
  }
`