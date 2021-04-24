import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Countries from "../countries.json";

function List() {
  const history = useHistory();
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  // Actions
  function getCountries() {
    return (dispatch) =>
      dispatch({ type: "SET_COUNTRIES", payload: [...Countries] });
  }

  function setSingle(payload) {
    return (dispatch) => dispatch({ type: "SET_SINGLE", payload });
  }

  // UEvents
  function handleOnClick(name) {
    const country = countries.filter((c) => c.name === name);
    if (country.length) {
      setSingle(country[0]);
      history.push(`/${country[0].name}`);
    }
  }

  useEffect(() => {
    console.log("render List");
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="grid list">
        {countries.map(
          ({ numericCode, flag, name, population, region, capital }) => (
            <div
              onClick={() => handleOnClick(name)}
              className="card"
              key={numericCode}
            >
              <div className="card-thumbnail">
                <img src={flag} alt="" />
              </div>
              <div className="card-body">
                <h4>{name}</h4>
                <p>
                  Population: <span>{population}</span>
                </p>
                <p>
                  Region: <span>{region}</span>
                </p>
                <p>
                  Capital: <span>{capital}</span>
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default List;
