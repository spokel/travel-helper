import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider  } from '@apollo/client';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import LocationDetails from '../../components/LocationDetails';
import Footer from '../../components/Footer';
import Map from '../../components/Map';
import { MainContent, LocationContainer } from './styles.js';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const HomePage = () => {
  const [center, setCenter] = useState([30.332183, -81.655650]);
  const [zoom, setZoom] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ApolloProvider client={client}>
      <MainContent>
        <Header />
        <SearchBar 
          setCenter={setCenter} 
          setZoom={setZoom} 
          setSearchTerm={setSearchTerm} 
        />
        <LocationContainer>
          <LocationDetails center={center} searchTerm={searchTerm} />
          <Map center={center} zoom={zoom} setCenter={setCenter} setZoom={setZoom} />
        </LocationContainer>
        <Footer />
      </MainContent>
    </ApolloProvider>
  )
}

export default HomePage;
