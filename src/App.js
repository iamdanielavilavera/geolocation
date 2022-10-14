import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { useGeoLocation } from './useGeoLocation';

function App() {

  const [loadingLocation, setLoadingLocation] = useState(true)

  const [list, setList] = useState([]);

  const { latitude, longitude, locerror } = useGeoLocation(true)

  useEffect(() => {
    console.log('latitude', latitude);
    console.log('longitude', longitude);
    
    if(latitude && longitude){
      setLoadingLocation(false)
      setList([
        ...list,
        {
          latitude,
          longitude,
        },
      ]);
    }
  }, [latitude]);

  return (
    <div className="App">

{ 

loadingLocation && <div>Obteniendo coordenadas</div>

}

      {list.map((location, i) => {
        return (
          <div key={i}>
            [{location.latitude}-{location.longitude}]
          </div>
        );
      })}
    </div>
  );
}

export default App;
