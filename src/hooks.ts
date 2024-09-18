import { useState } from 'react';

export const useGeolocation = () => {
  const [myLocation, setMylocation] = useState<[number, number, number?]>([
    0, 0,
  ]);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const locationArray: [number, number, number?] = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        return setMylocation(locationArray);
      },
      function (error) {
        console.error('Error fetching geolocation: ', error);
      },
    );
  } else {
    console.error('Geolocation is not supported of this browser');
  }
  return myLocation;
};
