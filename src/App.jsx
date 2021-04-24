import "./App.scss";
import Header from "./components/Header";
import List from "./components/List";
import Single from "./components/Single";
import Finder from "./components/Finder";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App({ countries, setCountries }) {
  return (
    <Router>
      <main>
        <Header />
        <Finder />
        <Switch>
          <Route path="/:country_name">
            <Single />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
