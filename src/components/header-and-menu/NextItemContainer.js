import dropDownArrow from '../../static/images/drop-down-arrow.png';

function NextItemContainer( props ) {
    return (
        <div className="subheader-nextitem-container" onClick={props.handleNextItem}>
            <div className="subheader-arrow-container">
                <img src={dropDownArrow} style={{ display: props.display, transform: 'rotate('+props.rotation+'deg)'}}></img>
            </div>
        </div>
    )
}

export default NextItemContainer;