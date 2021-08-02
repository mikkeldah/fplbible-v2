import NextItemContainer from './NextItemContainer';
import Fixture from '../players-page/sub-components/Fixture';

function TeamsToWatch( props ) {

    const handleNextItem1 = () => {
        const toDisplay = document.getElementById("subheader-item-transferdeadline");
        toDisplay.style.width = "100%";
        toDisplay.style.visibility = "visible";
        toDisplay.style.opacity = "1";

        const toHide = document.getElementById("subheader-item-teamstowatch");
        toHide.style.width = "0";
        toHide.style.visibility = "hidden";
        toHide.style.opacity = "0";
    }

    const handleNextItem2 = () => {
        const toHide = document.getElementById("subheader-item-teamstowatch");
        toHide.style.width = "0";
        toHide.style.visibility = "hidden";
        toHide.style.opacity = "0";

        const toDisplay = document.getElementById("subheader-item-double-gw");
        toDisplay.style.width = "100%";
        toDisplay.style.height = "100%";
        toDisplay.style.visibility = "visible";
        toDisplay.style.opacity = "1";

      }

    return (
        <div id="subheader-item-teamstowatch" className="subheader-item">
            <NextItemContainer display="block" rotation="90" handleNextItem={handleNextItem1}/>
            <div id="teams-to-watch-container">
                <p style={{textAlign: 'center',  marginTop: '5px', height: '12%'}}>GW{props.gameweek ? props.gameweek.id : ""} biggest difficulty differences</p>
                <div id="teams-to-watch-fixtures-container">
                    {getTopThreeGamesWithBIggestDifficultyDifference(props.fixtureData, props.gameweek.id).map((fixture) => {
                        const [ name_best, short_name_best, best_team_opponent_difficulty, name_worst, short_name_worst, worst_team_opponent_difficulty, best_team_location, worst_team_location ] = fixture;
                        return (
                            <div className="fixture-to-watch">
                                <Fixture 
                                    opponent={short_name_best} 
                                    difficulty={worst_team_opponent_difficulty}
                                    location={worst_team_location}
                                    padding={'4px'}
                                    showGW={false}
                                    fontSize={'0.85rem'}
                                    marginBottom={'0'}
                                />
                                <p style={{color: "white"}}>vs.</p>
                                <Fixture 
                                    opponent={short_name_worst} 
                                    difficulty={best_team_opponent_difficulty}
                                    location={best_team_location}
                                    padding={'4px'}
                                    showGW={false}
                                    fontSize={'0.85rem'}
                                    marginBottom={'2px'}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <NextItemContainer display="block" rotation="-90" handleNextItem={handleNextItem2}/>
        </div>
    )
} 

function getTopThreeGamesWithBIggestDifficultyDifference(fixtureData, gameweekID) {
    let topThreeGames = []
    fixtureData = fixtureData.filter((fixture) => fixture.gameweek === gameweekID)
    fixtureData = fixtureData.sort((fix1, fix2) => {
        if (Math.abs(fix1.team_h_difficulty - fix1.team_a_difficulty) > Math.abs(fix2.team_h_difficulty - fix2.team_a_difficulty)) {
            return -1;
        }
        else if (Math.abs(fix1.team_h_difficulty - fix1.team_a_difficulty) < Math.abs(fix2.team_h_difficulty - fix2.team_a_difficulty)) {
            return 1;
        }
        else if (Math.max(fix1.team_h_difficulty, fix1.team_a_difficulty) > Math.max(fix2.team_h_difficulty, fix2.team_a_difficulty)) {
            return -1;
        }
        else {
            return 1;
        }
    }).slice(0, 3)

    for (const key in fixtureData) {
        const fixture = fixtureData[key]
        if (fixture.team_a_difficulty > fixture.team_h_difficulty) {
            topThreeGames.push([fixture.name_h, fixture.short_name_h, fixture.team_h_difficulty, fixture.name_a, fixture.short_name_a, fixture.team_a_difficulty, 'A', 'H'])
        }

        else if (fixture.team_h_difficulty >
             fixture.team_a_difficulty) {
            topThreeGames.push([fixture.name_a, fixture.short_name_a, fixture.team_a_difficulty, fixture.name_h, fixture.short_name_h, fixture.team_h_difficulty, 'H', 'A'])
        }
    }

    return topThreeGames;
}

export default TeamsToWatch;