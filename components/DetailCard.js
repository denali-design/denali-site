import Tag from '../components/Tag';

export default function DetailCard(props) {

    const tags = props.tags;

    return (
        <a href={props.link} className={`br-lg overflow-hidden shadow-2 flex flex-column ${props.disabled ? 'is-disabled' : ''}`}>
            <div className={`h-40 bg-no-repeat bg-size-contain ${props.disabled ? 'has-bg-grey-500' : 'has-bg-brand-300'} bg-position-center`} style={{ height: "300px", backgroundPosition: 'top center', backgroundImage: `url("${props.image}")`, backgroundColor: `${props.bgColor} !important` }}></div>
            {props.items
                ? <span className={`h-12 w-12 ${props.disabled ? 'has-bg-grey-600' : 'has-bg-brand-500'} is-grey-100 flex justify-content-center align-items-center br-circle is-bold m-l-25`} style={{ fontSize: '2.4rem', position: 'absolute', marginTop: '170px', border: 'solid 5px #fff' }}>{props.items}</span>
                : <></>
            }
            <div className="m-x-30 m-y-40 flex flex-column space-between flex-auto">
                <div>
                    <h3>{props.title}</h3>
                    <p className="m-t-10">{props.description}</p>
                </div>
                {tags
                    ? <h5 className="is-bold upper m-t-20">Featured Components</h5>
                    : <></>
                }
                {tags
                    ? <div className="flex flex-wrap m-t-10">{tags.map((tag, index) => (<Tag name={tag} key={index} />))}</div>
                    : <></>
                }
                {props.action
                    ? <span className="flex m-t-20" style={{ fontSize: '1.8rem' }}>{props.action}</span>
                    : <></>
                }
            </div>
        </a>
    )
}
