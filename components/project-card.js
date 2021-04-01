export default function ProjectCard(props) {

    const tags = props.tags;

    return (
        <a href={props.link} target="_blank" rel="noreferrer noopener" className="flex flex-column p-20 br-lg m-y-30 project-card">
            <div className="flex justify-content-center align-items-center br-sm overflow-hidden" style={{ backgroundColor: props.color }}>
                <img className="m-y-60 shadow-4" src={props.image} alt="" style={{ height: 'auto', width: '60%' }} />
            </div>
            <div className="flex space-between align-items-center m-t-20">
                <h2>{props.title}</h2>
                <p className="is-grey-600 is-mono">{props.date}</p>
            </div>
            <p className="is-large m-t-4">{props.author}</p>
            <div className="flex m-t-20 m-b-10">
                {tags.map(tag => (<span className="chips has-bg-grey-400 is-grey-800 is-bold m-r-10">{tag}</span>))}
            </div>
        </a>
    )
}
