export default function Alert(props) {
    return (
        <div className={`alert is-block is-${props.type}`}>
            <span className={`d-icon d-${props.icon}`}></span>
            <div>
                {props.children}
            </div>
        </div>
    )
}
