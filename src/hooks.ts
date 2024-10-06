import { useEffect, useState } from 'react';

// get current location
export const useGeolocation = () => {
  const [myLocation, setMylocation] = useState<[number, number, number?]>([
    0, 0,
  ]);

  useEffect(() => {
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
        }
      );
    } else {
      console.error('Geolocation is not supported of this browser');
    }
  }, []);

  return myLocation;
};
