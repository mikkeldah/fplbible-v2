function Fixture( props ) {
    const backgroundColor = getBackgroundColor(props.difficulty)
    return (
        <div style={{marginBottom: props.marginBottom}} className="fixture-box-outer">
            { props.showGW && <h4>GW {props.gw}</h4>}
            <div style={{ backgroundColor: backgroundColor}} className="fixture-box">
                <p style={{ fontSize: props.fontSize, padding: props.padding}}>{props.opponent}({props.location})</p>
            </div>
        </div>
    )
}

function getBackgroundColor(diff) {
    let color = ''
    switch (diff) {
        case 1:
            color = 'rgb(55, 85, 35)'
            break;
        case 2:
            color = 'rgb(1, 252, 122)'
            break;
        case 3:
            color = 'rgb(231, 231, 231)'
            break;
        case 4:
            color = 'rgb(255, 23, 81)'
            break;
        case 5:
            color = 'rgb(128, 7, 45)'
            break; 
        default: 
            color = 'white'      
    }
    return color;
}

export default Fixture;