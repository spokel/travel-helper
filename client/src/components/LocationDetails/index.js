import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { LOCATIONS, CITY_DETAILS } from '../../api/GraphQL';
import Accordion from './components/Accordion';
import { Container, SearchResultsHeader } from './styles';

const LocationDetails = ({ center, searchTerm }) => {
  const [getLocations, { data = {} }] = useLazyQuery(LOCATIONS);
  const [getCityDetails, { data: cityData }] = useLazyQuery(CITY_DETAILS);
  const [expanded, setExpanded] = React.useState(false);

  const location = Array.isArray(center) 
    ? `${center[0]}${center[1]}` 
    : `${center.lat}${center.lng}`;

  useEffect(() => {
    getLocations({ variables: { location, radius: 75 }})
  }, [center]);

  const getCities = () => (
    <div>
      {data.Cities && data.Cities.map(city => (
        <Accordion 
          key={city.id}
          id={city.id} 
          heading={city.name}
          details={cityData?.CityDetails} 
          expanded={expanded}
          getCityDetails={() => getCityDetails({ variables: { id: `${city.id}` } })}
          setExpanded={setExpanded}
        >
          {city.name}, {city.regionCode}
        </Accordion>
      ))}
    </div>
  );

  return (
    <Container>
      <SearchResultsHeader>
        {searchTerm ? `Cities near ${searchTerm}` : 'Try using the search bar.'}
      </SearchResultsHeader>
      {getCities()}
    </Container>
  )
}

export default LocationDetails;
