import Tag from '../components/Tag';

export default function DetailCard(props) {

    const tags = props.tags;

    return (
        <a href={props.link} className="m-x-5 m-y-15 br-lg overflow-hidden shadow-2" style={{ display: 'block' }}>
            <div className="h-40 bg-no-repeat bg-size-contain has-bg-brand-300 bg-position-center" style={{ height: "300px", backgroundPosition: 'top center', backgroundImage: `url("${props.image}")` }}></div>
            {props.items
                ? <span className="h-12 w-12 has-bg-brand-500 flex justify-content-center align-items-center br-circle is-bold m-l-25" style={{ fontSize: '2.4rem', position: 'absolute', marginTop: '-30px', border: 'solid 5px #fff' }}>{props.items}</span>
                : <></>
            }
            <div className="m-x-30 m-y-40">
                <h3>{props.title}</h3>
                <p className="m-t-10">{props.description}</p>
                {tags 
                    ? <h5 className="is-bold upper m-t-20">Featured Components</h5>
                    : <></>
                }
                {tags 
                    ? <div className="flex flex-wrap m-t-10">{tags.map((tag, index) => (<Tag name={tag} key={index} />))}</div>
                    : <></>
                }
            </div>
        </a>
    )
}
