export default function ResourceCard(props) {
    return (
        <div className="inline-flex" style={{ flex: "0 1 33%" }}>
            <a 
                className={`has-bg-grey-100 p-y-16 p-x-14 m-8 br-md flex align-items-center ${props.disabled ? 'is-disabled' : 'shadow-1'}`}
                style={{ minWidth: "25%", border: props.disabled ? 'solid 2px #E8E8E8' : 'none'}}
                rel="noopener noreferrer"
                href={props.link}
                target="_blank"
            >
                <div className={`br-circle h-9 w-9 flex justify-content-center align-items-center ${props.disabled ? 'has-bg-grey-400' : 'has-bg-brand-100'}`} style={{minWidth: '45px'}}>
                    <span className={`d-icon d-${props.icon} ${props.disabled ? 'is-grey-700' : 'is-brand-300'}`}></span>
                </div>
                <div className="m-l-10">
                    <div className="flex align-items-center m-b-4">
                        <p className="is-large is-bold" style={{ lineHeight: '1' }}>{props.name}</p>{props.disabled ? '' : <span className="d-icon d-arrow-right is-brand-300 m-l-4"></span>}
                    </div>
                    <p className="is-small" style={{ lineHeight: '1' }}>{props.caption}</p>
                </div>
            </a>
        </div>
    )
}
