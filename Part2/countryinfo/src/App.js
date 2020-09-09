import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

const { REACT_APP_COUNTRY_API, REACT_APP_WEATHER_API, REACT_APP_API_KEY } = process.env;

function App() {
  //States
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [filteredContries, setFilteredContries] = useState([]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        await axios.get(REACT_APP_COUNTRY_API).then((response) => {
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
    const filteredCountries = countries.filter((e) =>
      e.name.toLowerCase().includes(value.toLowerCase())
    )
    if (filteredCountries.length === 1) {
      showCountryDetails(filteredCountries[0])
    } else {
      setFilteredContries(filteredCountries)
    }
  }

  const showCountryDetails = (conuntry) => {
    setFilteredContries([conuntry])
    axios.get(`${REACT_APP_WEATHER_API}?access_key=${REACT_APP_API_KEY}&query=${conuntry.capital}&units=m`)
      .then((response) => {
        console.log("response", response)
        setWeather(response.data)
      });
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
            <button onClick={() => { showCountryDetails(conuntry) }}>show</button>
          </div>)
      }
      {
        filteredContries.length === 1 &&
        <div>
          {
            filteredContries.map(({ name, capital, population, languages, flag }) =>
              <div key={name}>
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
          {Object.keys(weather).length > 0 &&
            <>
              <h3>Weather in {filteredContries[0].capital}</h3>
              <div>temperature: {weather.current.temperature} Celcius</div>
              {weather.current.weather_icons.map((e) => (
                <img src={e} alt={'weatherIcons'} key={e} />
              ))}
              <div>
                wind: {weather.current.wind_speed} kph direction {weather.current.wind_dir}
              </div>
            </>}

        </div>

      }
    </div >
  );
}

export default App;
