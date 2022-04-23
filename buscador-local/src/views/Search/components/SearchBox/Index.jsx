import { useState } from "react";
import "./style.css";

export default function SearchBox({ onSearch, onClose, isUp }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (value) => {
    setSearch(value);
  };
  const handleCloseClick = (event) => {
    event.preventDefault();
    onClose(event);
    setSearch("");
    console.log(event);
  };

  return (
    <div>
      <div>
        <h2 className="search-box-title">Personal Search</h2>
        <label>
          <input
            className="search-box-input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={({ target: { value } }) => handleSearchChange(value)}
          />
        </label>
        <button className="search-box-button" onClick={() => onSearch(search)}>
          Buscar
        </button>
        <button hidden={isUp? false : true} className="search-box-button" onClick={handleCloseClick}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
