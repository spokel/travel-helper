import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@apollo/client';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './components/LocationMarker';
import { EVENTS, TORNADOS } from '../../api/GraphQL';
import FireIcon from '@iconify/icons-mdi/fire-alert';
import TornadoIcon from '@iconify/icons-mdi/weather-tornado';
import MountainIcon from '@iconify/icons-fa-solid/mountain';
import { MapContainer, Spinner } from './styles';

const markers = (allData) => {
  return allData.map((event, index) => {
    const { category, geometries } = event;
    // API has lat and lng mixed up
    const lat = geometries ? geometries.longitude : event.lattitude;
    const lng = geometries ? geometries.lattitude : event.longitude;
    let icon;
    
    if (category === 'Wildfires') {
      icon = FireIcon;
    }
    else if (category === 'Volcanoes') {
      icon = MountainIcon;
    }
    else if (category === 'Tornado') {
      icon = TornadoIcon;
    }
  
    return <LocationMarker key={index} icon={icon} lat={lat} lng={lng} />
  })
}

const Map = ({ 
  defaultCenter, 
  defaultZoom, 
  center, 
  zoom, 
  setCenter, 
  setZoom 
}) => {
  const { loading: eventsLoading, data: eventsData = {} } = useQuery(EVENTS);
  const { loading: tornadoLoading, data: tornadoData = {} } = useQuery(TORNADOS);

  // TODO: add check if map itself is loading
  if (eventsLoading || tornadoLoading) {
    return (
      <Spinner>
        <FontAwesomeIcon icon={['fas', 'spinner']} spin />
      </Spinner>
    )
  }

  const allData = [...eventsData.Events, ...tornadoData.Tornados];

  function onBoundsChange(coordinates, zoom) {
    setCenter(coordinates);
    setZoom(zoom);
  }

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        center={center}
        zoom={zoom}
        onBoundsChange={(c, z) => onBoundsChange(c, z)}
      >
        {markers(allData)}
      </GoogleMapReact>
    </MapContainer>
  )
}

Map.defaultProps = {
  defaultCenter: {
    lat: 30.332183,
    lng: -81.655650
  },
  defaultZoom: 6
}

export default Map;