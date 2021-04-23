import "./App.scss";
import Header from "./components/Header";
import List from "./components/List";
import Finder from "./components/Finder";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Countries from "./countries.json";

export default function App() {
  const [countries, setCountries] = useState([]);

  async function loadCountries() {
    // const raw = await fetch("https://restcountries.eu/rest/v2/all");
    // const data = await raw.json();
    // setCountries(data);
    setCountries([...Countries]);
  }

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <Router>
      <main>
        <Header />
        <Finder />
        <Switch>
          <Route path="/">
            <List items={countries} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
