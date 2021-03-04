import styled from 'styled-components';
import backgroundImage from '../../assets/images/city-in-mountains.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 12rem;
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 3rem;
  background-color: #fff;
  border-radius: 2rem;
  overflow: hidden;
`

export const InputHeader = styled.h2`
  color: #fff;
  margin-bottom: 1rem;
`

export const InputContainer = styled.div`
  padding-left: 1.8rem;
`

export const AddressInput = styled.input`
  font-size: 1.3rem;
  border: none;

  &:focus-visible {
    outline: none;
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 0.5rem;
  padding-right: 1.3rem;
  font-weight: bold;
  color: #fff;
  background-color: darkgreen;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: lightseagreen;
  }
`