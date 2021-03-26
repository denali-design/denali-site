export default function ProjectCard(props) {
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
            {/* <div className="flex m-t-20 m-b-10">
                <span class="chips has-bg-violet-100 is-violet-500 is-bold m-r-10">Theme</span>
                <span class="chips has-bg-blue-100 is-blue-500 is-bold m-r-10">CSS</span>
                <span class="chips has-bg-orange-100 is-orange-500 is-bold m-r-10">Mirco Interactions</span>
            </div> */}
        </a>
    )
}
