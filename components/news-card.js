export default function NewsCard(props) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer noopener" className="col updates">
            <p className="date">{props.date}</p>
            <p className="title">{props.title}</p>
            <p className="text">{props.description}</p>
            <p className="action is-large">{props.action}<i className="d-icon d-arrow-right m-l-10"></i></p>
        </a>
    )
}
