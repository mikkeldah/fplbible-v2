import Fixture from "./Fixture";
import TeamColorLogo from "../../../utils/TeamColors";

function Player( props ) {
    return (
        <div id="player-box">
            <div id="player-box-title">
                <TeamColorLogo teamName={props.short_name} diameter={'25px'}/>
                <h2>{props.web_name} ({props.short_name})</h2>
                <TeamColorLogo teamName={props.short_name} diameter={'25px'}/>
            </div> 
            <div id="player-box-labels-and-values-container">
                <div className="player-box-labels-and-values" style={{backgroundColor: 'rgb(216, 215, 215)'}}>
                    <p>Price: </p><p>£ {props.price.toFixed(1)}</p>
                </div>
                <div className="player-box-labels-and-values">
                    <p>Total points:</p><p>{props.total_points}</p>
                </div>
                <div className="player-box-labels-and-values" style={{backgroundColor: 'rgb(216, 215, 215)'}}>
                    <p>Minutes:</p><p>{props.minutes}</p>
                </div>
                <div className="player-box-labels-and-values">
                    <p>Points per Game:</p><p>{props.points_per_game.toFixed(1)}</p>
                </div>
                <div className="player-box-labels-and-values" style={{backgroundColor: 'rgb(216, 215, 215)'}}>
                    <p>Points per Price:</p> <p>{props.points_per_price.toFixed(1)}</p>
                </div>
                <div className="player-box-labels-and-values">
                    <p>Points per Price per Game:</p><p>{props.points_per_price_per_game.toFixed(2)}</p>
                </div>
                <div id="player-box-values">
                </div>
            </div>
            <h3>Upcoming fixtures</h3>
            <div id="player-show-fixtures-short">
                {props.nextFiveFix.map((fixture) => {
                    const [ gw, opponent, difficulty, location ] = fixture;
                    return (
                        <Fixture 
                            fontSize={'11px'}
                            padding={'3px'}
                            gw={gw} 
                            opponent={opponent} 
                            location={location} 
                            difficulty={difficulty}
                            showGW={true}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Player;