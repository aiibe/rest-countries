export default function List({ items }) {
  return (
    <div className="container">
      <div className="grid list">
        {items.map(
          ({ numericCode, flag, name, population, region, capital }) => (
            <div className="card" key={numericCode}>
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
