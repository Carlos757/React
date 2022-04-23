import SearchBox from "./components/SearchBox/Index";
import Table from "./components/Table/Index";
import "./components/SearchBox/style.css";
import { useState } from "react";

import Data from "./../../data/data.json";

export default function Search() {
let [isUp,setIsUp] = useState(false);
let [data] = useState(Data);
let [dataFiltrada,setDataFiltrada] = useState([]);
// let [search,setSearch] = useState("");

  const handleSearchClick = (searchText) => {
    // setSearch(searchText);
        const filteredData = data.filter(item =>
            item.name.includes(searchText)
        );
        setDataFiltrada(filteredData);
    // }
    console.log(dataFiltrada)
    setIsUp (true);
  };
  const handleCloseClick = (event) => {
    event.preventDefault();
    console.log("Close");
    setIsUp (false);
  };
  return (
    <div>
        <div className={isUp ? "search-up" : "search-center"}>
            <SearchBox onClose={handleCloseClick} onSearch={handleSearchClick} isUp={isUp} />
        </div>
        <div className="table">
            <Table dataFiltrada={dataFiltrada} isUp={isUp} />
        </div>
    </div>
  );
}
