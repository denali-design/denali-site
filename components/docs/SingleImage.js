export default function SingleImage(props) {
    return (
        <div className={`m-t-40 pinciple-${props.type}`}>
            <div className="bg-size-contain bg-position-center bg-no-repeat has-bg-grey-300 br-lg overflow-hidden col m-b-20" style={{backgroundImage: `url("${props.image}")`, height: '400px', width: 'inherit'}}></div>
            <p>{props.caption}</p>
        </div>
    )
}
