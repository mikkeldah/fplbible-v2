import ReactTooltip from 'react-tooltip';
import infoIconBlue from '../../static/images/info-icon-blue.png'
import { useEffect } from 'react';

function PageTitleAndDesc( props ) {

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [])

    return (
        <div style={{flexDirection: props.page === "Home" ? "column" : "row"}}id="title-and-description-container">
            {props.page === "Home" ? <h1 style={{textAlign: "center", fontSize: "1.7rem"}}>Welcome to The FPL Bible</h1> : <h1>{props.page}</h1>}
            {props.page === "Home" ? <p style={{width: "300px", textAlign: "center", marginTop: "10px"}}>{props.description}</p> : <div><img src={infoIconBlue} data-tip data-for="tooltip-container"></img>
            <ReactTooltip 
                id="tooltip-container" 
                place="bottom" 
                type="info" 
                effect="solid"
            >{props.description}</ReactTooltip></div>}
                
        </div>
    )
}

export default PageTitleAndDesc;