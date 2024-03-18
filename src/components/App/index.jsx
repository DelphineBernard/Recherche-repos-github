import SearchForm from "../SearchForm";
import Repos from "../Repos";
import { useState, useEffect } from "react";

const App = () => {
    const [repoList, setRepoList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getRepoList = async (search = "react") => {
        try {
            setIsLoading(true)
            const response = await fetch (`https://api.github.com/search/repositories?q=${search}`);
            const data = await response.json();
            setIsLoading(false)
            setRepoList(data.items)
        }
        catch(error) {
            console.error(error);
            alert("Erreur de récupération")
        }
    }

    useEffect(() => {
        getRepoList()}, []);

    return (
        <>
            <h1>Repos Github</h1>
            <SearchForm getRepoList={getRepoList} />
            <Repos repoList={repoList} isLoading={isLoading}/>
        </>        
    )
}

export default App;