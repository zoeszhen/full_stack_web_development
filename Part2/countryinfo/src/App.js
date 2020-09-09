import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

const API = 'https://restcountries.eu/rest/v2/all'
function App() {
  //States
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [filteredContries, setFilteredContries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        await axios.get(API).then((response) => {
          setCountries(response.data)
        });
      } catch (error) {
        throw error;
      }
    };
    fetchCountries();
  }, []);

  //Event handlers
  const handleSearchChange = (value) => {
    setSearchCountry(value);
    setFilteredContries(
      countries.filter((e) =>
        e.name.toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  return (
    <div>
      <div>
        Find countries: <input value={searchCountry} onChange={(e) => handleSearchChange(e.target.value)} />
      </div>
      {
        filteredContries.length > 10 && <div> Too many matches, specify another filter</div>
      }
      {
        filteredContries.length < 10 &&
        filteredContries.length > 1 &&
        filteredContries.map((conuntry) =>
          <div key={conuntry.name}>
            {conuntry.name}
            <button onClick={() => { setFilteredContries([conuntry]) }}>show</button>
          </div>)
      }
      {
        filteredContries.length === 1 &&
        filteredContries.map(({ name, capital, population, languages, flag }) =>
          <div>
            <h1>{name}</h1>
            <div>capital {capital}</div>
            <div>population {population}</div>
            <h3>languages</h3>
            <ul>
              {languages.map((e) => (
                <li key={e.name}>{e.name}</li>
              ))}
            </ul>
            <img
              src={flag}
              alt={`flag of ${name}`}
              style={{ maxWidth: '20%' }}
            />
          </div>)
      }
    </div>
  );
}

export default App;
