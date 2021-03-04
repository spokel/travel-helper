import { gql } from '@apollo/client';

export const EVENTS = gql`
  query {
    Events {
      category
      geometries {
        lattitude
        longitude
      }
    }
  }
`;

export const TORNADOS = gql`
  query {
    Tornados {
      id
      category
      lattitude
      longitude
    }
  }
`;

export const LOCATIONS = gql`
  query GetCities($location: String, $radius: Int) {
    Cities(location: $location, radius: $radius, types: "CITY", minPopulation: 50000) {
      id
      name
      regionCode
    }
  }
`;

export const CITY_DETAILS = gql`
  query getDetails($id: String) {
    CityDetails(id: $id) {
      id 
      name 
      population
      elevation
      timezone
    }
  }
`;