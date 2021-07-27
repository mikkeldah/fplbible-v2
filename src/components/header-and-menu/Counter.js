import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <span>EXPIRED</span>



function Counter( props ) {
    
    return (
        <div id="counter-container">
            <div id="counter">
                <h4>GW{props.gameweek ? props.gameweek.id : ""} Transfer Deadline</h4>
                <Countdown date={new Date(props.gameweek ? props.gameweek.deadline_time : "")}>
                    <Completionist/>
                </Countdown>
            </div>
        </div>
    )
}

export default Counter;