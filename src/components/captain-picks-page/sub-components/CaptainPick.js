import TeamColorLogo from "../../../utils/TeamColors";
import Fixture from "../../players-page/sub-components/Fixture";

function CaptainPick( props ) {
    return (
        <div className="captain-picks-general-captain-pick">
            <h3 style={{color: 'white'}}>Captain Pick #{props.ranking}</h3>
            <div className="captain-picks-general-captain-pick-title-container">
                <TeamColorLogo teamName={props.team} diameter={'20px'}/>
                <h2>{props.name} ({props.team})</h2>
            </div>
            <div className="captain-picks-general-captain-pick-info-container">
                <p>Price: </p>
                <p>£ {props.price}</p>
                
            </div>
            <div className="captain-picks-general-captain-pick-info-container">
                <p>Points per Game: </p>
                <p>{props.pointsPerGame}</p>
            </div>
            <div className="captain-picks-general-captain-pick-info-container">
                <p>cScore: </p>
                <p>{props.cScore}</p>
            </div>
            <div className="captain-picks-general-captain-pick-info-container">
                <p>GW{props.gameweek.id} opponent: </p>
                <Fixture 
                    opponent={props.nextGame[0][1]} 
                    difficulty={props.nextGame[0][2]}
                    location={props.nextGame[0][3]}
                    padding={'4px'}
                    showGW={false}
                    fontSize={'0.85rem'}
                />
            </div>
        </div>
    )
}

export default CaptainPick;