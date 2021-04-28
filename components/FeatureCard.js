export default function FeatureCard(props) {

    const links = props.links;

    return (
        <div className="xs-col-1-1 sm-col-1-2 md-col-1-2 lg-col-1-3 xl-col-1-3">
            <div className="br-lg shadow-2 has-bg-grey-100 p-10 m-x-5 m-y-15">
                <div className="br-sm bg-size-cover bg-position-center" style={{ height: "200px", border: 'solid 1px #f2f2f2', backgroundImage: `url("${props.image}")` }}></div>
                <h3 className="m-t-30 m-b-10 m-x-20">{props.title}</h3>
                <p className="m-x-20">{props.description}</p>
                <div className="flex m-t-20 m-x-20 m-b-30">
                    {links.map((link, index) => (
                        <h4 className="m-r-30" key={index}>
                            {props.downloadable
                                ? <a href={link.link} download>{link.text}</a>
                                : <a href={link.link} target="_blank" rel="noreferrer noopener">{link.text}</a>
                            }
                        </h4>
                    ))}
                </div>
            </div>
        </div>
    )
}
