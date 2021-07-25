import TeamColorLogo from "../../../utils/TeamColors";

function PlayerPick( props ) {
    return (
        <div className="player-pick-card">
            <div className="player-pick-card-title-container">
                <p className="player-pick-card-name">{props.web_name}</p>
            </div>
            <div className="player-pick-team-color-container">
                <TeamColorLogo teamName={props.teamName} />
                <p>({props.teamName})</p>
            </div>
            <p>£ {props.price}</p>
        </div>
    )
}

export default PlayerPick;