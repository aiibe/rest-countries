import Search from "./Search";
import Filter from "./Filter";

export default function Finder() {
  return (
    <div className="container">
      <div className="finder">
        <Search />
        <Filter />
      </div>
    </div>
  );
}
