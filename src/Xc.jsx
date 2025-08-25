import { useEffect, useState } from "react";
import "./App.css";

function CountryCard({ country }) {
  return (
    <div className="card">
      <img src={country.flag} />
      <h3>{country.name}</h3>
    </div>
  );
}

const API_URL = "https://xcountries-backend.azurewebsites.net/all";

export default function Xc() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function loadCountries() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error("Failed to fetch countries:", err);
      }
    }
    loadCountries();
  }, []);

  return (
    <div className="countries-container">
      {countries.map((country) => (
        <CountryCard key={country.abbr} country={country} />
      ))}
    </div>
  );
}