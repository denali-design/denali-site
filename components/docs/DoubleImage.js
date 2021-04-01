export default function DoubleImage(props) {
    return (
        <div className="row m-t-40">
            <div className={`pinciple-${props.firstType} xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-2 xl-col-1-2`}>
                <div className="bg-size-contain bg-position-center bg-no-repeat has-bg-grey-300 br-lg overflow-hidden  m-b-20" style={{backgroundImage: `url("${props.firstImage}")`, height: '380px', width: 'inherit'}}></div>
                <p>{props.firstCaption}</p>
            </div>

            <div className={`pinciple-${props.secondType} xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-2 xl-col-1-2`}>
                <div className="bg-size-contain bg-position-center bg-no-repeat has-bg-grey-300 br-lg overflow-hidden m-b-20" style={{backgroundImage: `url("${props.secondImage}")`, height: '380px', width: 'inherit'}}></div>
                <p>{props.secondCaption}</p>
            </div>
        </div>
    )
}
