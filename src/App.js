import './App.css';
import MapComponent from './components/MapComponent';


function App() {
  // no search because if you want to use google placesApi you have to connect card
  return (
    <div className="App">
      <MapComponent />
    </div>
  );
}

export default App;
