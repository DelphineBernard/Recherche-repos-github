const Repo = ({img_link, title, description, link}) => {
    return (
        <div className="repo">
            <img src={img_link} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link}>Consulter le dépôt</a>
        </div>
    )
}

export default Repo;