import ReactTooltip from 'react-tooltip';
import infoIconBlue from '../../static/images/info-icon-blue.png'

function PageTitleAndDesc( props ) {
    return (
        <div id="title-and-description-container">
            <h1 style={{textAlign: "center"}}>{props.page === "Home" ? "Welcome to The FPL Bible" : props.page}</h1>
            <img src={infoIconBlue} data-tip="React-tooltip"></img>
            <ReactTooltip id="tooltip-container" type="info" effect="solid" place="bottom">{props.description}</ReactTooltip>
        </div>
    )
}

export default PageTitleAndDesc;