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
                <p style={{width: '70%'}}>GW{props.gameweek.id} opponent(s): </p>
                <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'center'}}>
                {props.nextGames.map((fixture) => {
                    return (
                        <Fixture 
                            opponent={fixture[1]} 
                            difficulty={fixture[2]}
                            location={fixture[3]}
                            padding={'4px'}
                            showGW={false}
                            fontSize={'0.85rem'}
                            marginBottom={'2px'}
                        />
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default CaptainPick;