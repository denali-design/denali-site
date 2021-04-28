export default function SingleImage(props) {
    return (
        <div className={`m-t-40 pinciple-${props.type}`}>
            <img 
                className="has-bg-grey-300 br-md overflow-hidden col m-b-20" 
                style={{ objectFit: 'contain', height: '400px', width: '100%' }} 
                src={props.image}
                loading="lazy"
                decoding="async"
            />
            <p>{props.caption}</p>
        </div>
    )
}
