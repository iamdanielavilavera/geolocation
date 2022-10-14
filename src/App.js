import logo from './logo.svg';
import './App.css';
import { useGeoLocation } from './useGeoLocation';

function App() {

  const [list, setList] = useState([]);

  const { latitude, longitude, locerror } = useGeoLocation(true, { enableHighAccuracy: true })

  useEffect(() => {
    console.log('latitude', latitude);
    console.log('longitude', longitude);
    setList([
      ...list,
      {
        latitude,
        longitude,
      },
    ]);
  }, [latitude]);

  return (
    <div className="App">
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
