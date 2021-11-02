
const JettyInfo = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Type: {props.type}</p>
            <p>coordinates: {props.coordinates}</p>
            <p>Terminal Type: {props.terminal}</p>
        </div>
    )
}

export default JettyInfo
