import { useState } from "react";

const SearchForm = ({getRepoList}) => {

    const [search, setSearch] = useState("")

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        getRepoList(search)
    }
    

    return (
        <form get="/search" onSubmit={handleSearchSubmit}  >
            <input type="text" placeholder="Rechercher un repo" onChange={handleSearchChange}/>
            <button>Rechercher</button>
        </form>
    )
}

export default SearchForm;