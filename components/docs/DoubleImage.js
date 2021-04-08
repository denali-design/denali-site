export default function DoubleImage(props) {
    return (
        <div className="row m-t-40">
            <div className={`pinciple-${props.firstType} xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-2 xl-col-1-2`}>
                <img
                    className="has-bg-grey-300 br-md overflow-hidden m-b-20"
                    style={{ objectFit: 'contain', height: '380px', width: '100%' }}
                    src={props.firstImage}
                    loading="lazy"
                    decoding="async"
                />
                <p>{props.firstCaption}</p>
            </div>

            <div className={`pinciple-${props.secondType} xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-2 xl-col-1-2`}>
                <img
                    className="has-bg-grey-300 br-md overflow-hidden m-b-20"
                    style={{ objectFit: 'contain', height: '380px', width: '100%' }}
                    src={props.secondImage}
                    loading="lazy"
                    decoding="async"
                />
                <p>{props.secondCaption}</p>
            </div>
        </div>
    )
}
