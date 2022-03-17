import { useState, useEffect } from 'react';
import { CountryDetail } from './components/CountryDetail';

function App() {
const [data, setData] = useState([]);

useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      });
  }, []);

  const AllCountries = data.map((country) => <CountryDetail key={country.name.common} title={country.name.common} image={country.flags.png}/>)
  
  return (
    <div className="App">
      <h1>My App</h1>
      {AllCountries}
    </div>
  );
}

export default App;
