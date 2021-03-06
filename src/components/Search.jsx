import { useState } from "react";
import {Link } from "react-router-dom";



function Search() {
    const [searchedItem, setSearchedItem] = useState("")

    return (
        <div className="searchBar" >
            <form >
            <Link to={`/search/${searchedItem}`}>
                <button type="submit" disabled={!searchedItem} id="searchButton" >Search</button>
            </Link>
                <input
                    id="searchInput"
                    type="text"
                    value={searchedItem}
                    onChange={(e) => setSearchedItem(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Search;