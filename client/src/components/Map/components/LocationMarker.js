import { Icon } from '@iconify/react';
import { Marker } from '../styles.js';

const LocationMarker = ({ icon, onClick }) => (
  <Marker onClick={onClick}>
    <Icon icon={icon} className="location-icon" />
  </Marker>
) 

export default LocationMarker;