import { useEffect, useState } from 'react';
import './App.css';

import { Drawer } from '@mui/material';

import KoalaMap from './components/KoalaMap';
import AppHeader from './components/AppHeader';
import FilterPanel from './components/FilterPanel';
import LocationErrorNotification from './components/LocationErrorNotification';
import { LatLngLiteral } from 'leaflet';

const DEFAULT_MAX_DISTANCE = 50; //km
const DEFAULT_MAX_RESULTS = 10;
const DEFAULT_MIN_PROBABILITY = 0.6; //60%

function App() {

  const [minProbability, setMinProbability] = useState<number>(DEFAULT_MIN_PROBABILITY);
  const [maxDistance, setMaxDistance] = useState<number>(DEFAULT_MAX_DISTANCE);
  const [maxResults, setMaxResults] = useState<number>(DEFAULT_MAX_RESULTS);

  const [searchLocation, setSearchLocation] = useState<LatLngLiteral>();

  // this should have been a boolean, but I wanted LocationErrorNotification to display on subsequent clicks of the current location button. And false===false doesn't trigger a rerender.
  // instead I just decrement the number each time a current location attempt fails.
  const [hasCurrentLocation, setHasCurrentLocation] = useState<number>(1);

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);
  

  useEffect( () => {
    setSearchLocationToCurrent();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const setSearchLocationToCurrent = () => {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(

        (pos: GeolocationPosition) => {
          const currentPosition: LatLngLiteral = { lat: pos.coords.latitude, lng: pos.coords.longitude }
          setSearchLocation(currentPosition);
          setHasCurrentLocation(1);
        },

        (positionError: GeolocationPositionError) => {
          console.log(positionError);
          setHasCurrentLocation(hasCurrentLocation - 1)
        }

      )
    } else {
      setHasCurrentLocation(hasCurrentLocation - 1);
    } 
    
    return;
    
  }

  return (
    <div className="App">

      <AppHeader
        onSelectCurrentLocation={setSearchLocationToCurrent}
        onSelectLocation={setSearchLocation}
        onClickFilterBtn={() => setIsFilterMenuOpen(true)}
      />

      <LocationErrorNotification
        hasCurrentLocation={hasCurrentLocation}
      />

      <Drawer
        PaperProps={{ sx: { top: '10vh' } }}
        anchor={"right"}
        open={isFilterMenuOpen}
        onClose={() => setIsFilterMenuOpen(false)}
      >
        <FilterPanel
          minProbability={minProbability}
          maxDistance={maxDistance}
          maxResults={maxResults}
          onChangeProbablity={setMinProbability}
          onChangeResultCount={setMaxResults}
          onChangeDistance={setMaxDistance}
        />
      </Drawer>

      <KoalaMap location={searchLocation} maxResults={maxResults} maxDistance={maxDistance} minProbability={minProbability} />

    </div>
  );
}

export default App;
