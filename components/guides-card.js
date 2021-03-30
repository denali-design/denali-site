export default function GuideCard(props) {
    return (
        <a 
            className="col p-50 m-20 guides" 
            style={{ backgroundImage: `url("${props.image}")`}} 
            href={props.link}
            target={props.external ? '_blank' : ''}
            rel="noreferrer noopener"
        >
            <p className="is-grey-800 m-b-24 is-mono"><i className={`d-icon d-${props.icon} m-r-12`}></i><span className="mono">{props.type}</span></p>
            <h1 className="is-grey-800 m-b-50">{props.title}</h1>
            <i className="d-icon d-arrow-right is-large is-grey-800"></i>
        </a>
    )
}
