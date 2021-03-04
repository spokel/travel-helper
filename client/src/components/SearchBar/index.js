import React, { useState } from 'react';
import axios from 'axios';
import { Container, SearchForm, InputHeader, InputContainer, AddressInput, SearchButton } from './styles.js';

const SearchBar = ({ setCenter, setZoom, setSearchTerm }) => {
  const [address, setAddress] = useState('');

  async function onSearch(e) {
    e.preventDefault();
    setSearchTerm(address);
    setAddress('');

    const data = await axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`)
      .then(res => res.data.results)
    const coordinates = data && data[0]?.geometry.location;

    if (coordinates) {
      setCenter(coordinates);
    }
    setZoom(8);
  }

  return (
    <Container>
      <InputHeader>The best travel guide for the best price</InputHeader>

      <SearchForm onSubmit={onSearch} id='searchForm'>
        <InputContainer>
          <AddressInput 
            type='text'
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder='Enter destination'
          />
        </InputContainer>
        <SearchButton onClick={onSearch}>
          <p>Search</p>
        </SearchButton>
      </SearchForm>
    </Container>
  )
}

export default SearchBar;
