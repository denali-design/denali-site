export default function SingleImage(props) {
    return (
        <div className="m-t-40">
            <div className="bg-size-contain bg-position-center bg-no-repeat has-bg-grey-300 br-lg overflow-hidden col" style={{backgroundImage: `url("${props.image}")`, height: '400px', width: 'inherit'}}></div>
            {/* <p>Caption</p> */}
        </div>
    )
}
