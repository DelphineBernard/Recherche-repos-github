import Repo from './Repo';

const Repos = ({repoList, isLoading}) =>{

    return (
        <div className="repos">

            {isLoading ? <p className='loading'>Veuillez patienter...</p> 
            :
            repoList.map (repo => {
                return(
                    < Repo 
                        key={repo.id} 
                        img_link={repo.owner.avatar_url}
                        title={repo.name}
                        description={repo.description}
                        link={repo.owner.html_url}
                    />)})}
        </div>
    )
}

export default Repos;