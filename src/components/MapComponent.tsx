import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { User } from '../types';
import React from 'react';

interface MarkerComponentProps {
  users: User[];
}

const MapComponent: React.FC<MarkerComponentProps> = ({ users }) => {
  const position: LatLngExpression = [48.3501, 10.8769]; // Центр карты

  const customIcon = new Icon({
    iconUrl: require('../pin.png'),
    iconSize: [32, 32], // size of the icon
  });
  console.log('User', users);
  return (
    <MapContainer
      center={position}
      zoom={2}
      style={{ height: '90vh', width: '70%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {users.map((user) => (
        <Marker key={user.id} position={user.coordinates} icon={customIcon}>
          <Popup>{user.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default React.memo(MapComponent);
