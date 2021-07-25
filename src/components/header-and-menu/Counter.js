import Countdown from 'react-countdown';

const Completionist = () => <span>EXPIRED</span>

function Counter() {
    return (
        <div id="counter-container">
            <div id="counter">
                <h4>GW1 Transfer Deadline</h4>
                <Countdown date={new Date("August 13, 2021 19:30:00")}>
                    <Completionist/>
                </Countdown>
            </div>
        </div>
    )
}

export default Counter;