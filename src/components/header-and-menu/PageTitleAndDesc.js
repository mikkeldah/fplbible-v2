import ReactTooltip from 'react-tooltip';
import infoIconBlue from '../../static/images/info-icon-blue.png'
import { useEffect } from 'react';

function PageTitleAndDesc( props ) {

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [])

    return (
        <div id="title-and-description-container">
            <h1 style={{textAlign: "center"}}>{props.page === "Home" ? "Welcome to The FPL Bible" : props.page}</h1>
            <img src={infoIconBlue} data-tip data-for="tooltip-container"></img>
            <ReactTooltip 
                id="tooltip-container" 
                place="bottom" 
                type="info" 
                effect="solid"
            >{props.description}</ReactTooltip>
                
        </div>
    )
}

export default PageTitleAndDesc;