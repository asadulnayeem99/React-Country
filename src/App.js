import { useEffect, useState } from "react";
import "./App.css";
import Country from "./Components/Country/Country";
//  https://restcountries.com/v3.1/all
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(
      "http://api.countrylayer.com/v2/all?access_key=c8652baf580b616109001cd8006f69d5"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <h1>{countries.length}</h1>

      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
}

export default App;
