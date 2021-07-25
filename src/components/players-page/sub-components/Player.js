import Fixture from "./Fixture";
import TeamColorLogo from "../../../utils/TeamColors";

function Player( props ) {
    return (
        <div id="player-box">
            <div id="player-box-title">
                <TeamColorLogo teamName={props.short_name} />
                <h2>{props.web_name} ({props.short_name})</h2>
                <TeamColorLogo teamName={props.short_name} />
            </div> 
            <div id="player-box-labels-and-values-container">
                <div id="player-box-labels">
                    <p>Price:</p>
                    <p>Total points:</p>
                    <p>Minutes:</p>
                    <p>Points per Game:</p>
                    <p>Points per Price:</p>
                    <p>Points per Price per Game:</p>
                </div>
                <div id="player-box-values">
                    <p>{props.price.toFixed(1)}</p>
                    <p>{props.total_points}</p>
                    <p>{props.minutes}</p>
                    <p>{props.points_per_game.toFixed(1)}</p>
                    <p>{props.points_per_price.toFixed(1)}</p>
                    <p>{props.points_per_price_per_game.toFixed(2)}</p>
                </div>
            </div>
            <h3>Upcoming fixtures</h3>
            <div id="player-show-fixtures-short">
                {props.nextFiveFix.map((fixture) => {
                    const [ gw, opponent, diffuculty, location ] = fixture;
                    return (
                        <Fixture gw={gw} opponent={opponent} location={location} difficulty={diffuculty}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Player;