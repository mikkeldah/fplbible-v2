import NextItemContainer from './NextItemContainer';
import Fixture from '../players-page/sub-components/Fixture';
import TeamColorLogo from '../../utils/TeamColors';
import { useState } from 'react';

function DoubleGameweekWatch( props ) {

    const handleNextItem = () => {
        const toDisplay = document.getElementById("subheader-item-teamstowatch");
        toDisplay.style.width = "100%";
        toDisplay.style.visibility = "visible";
        toDisplay.style.opacity = "1";

        const toHide = document.getElementById("subheader-item-double-gw");
        toHide.style.width = "0";
        toHide.style.visibility = "hidden";
        toHide.style.opacity = "0";
      }

    const [ dgwCount, setDgwCount ] = useState(0);
    const [ zCount, setZCount ] = useState(0)

    return (
        <div id="subheader-item-double-gw" className="subheader-item" style={{borderRight: "0"}}>
            <NextItemContainer display="block" rotation="90" handleNextItem={handleNextItem}/>
            <div id="double-gameweek-watch-container">
                <p style={{textAlign: "center"}}>GW{props.gameweek ? props.gameweek.id : ""} double/zero gameweek watch</p>
                <div style={{width: "100%", height: "80%", display: "flex"}}>
                    <div id="double-gameweek-teams-container" style={{borderRight: "1px solid rgb(138, 80, 138)"}}>
                        <p style={{textAlign: "center", fontSize: "0.9rem", borderBottom: "1px solid rgb(138, 80, 138)", borderTop: "1px solid rgb(138, 80, 138)", fontWeight: "bold"}}>Double gameweek</p>
                        <div style={{display: "flex", flexDirection:"column", alignItems: "center", width: "100%", overflowY: "auto"}}>
                            {dgwCount === 0 && <p style={{marginTop: "50px"}}>None</p>}
                            {Object.keys(getDoubleGameweekTeams(props.fixtureData, props.gameweek.id)).map((keyName, i) => {
                                const teamFixes = getDoubleGameweekTeams(props.fixtureData, props.gameweek.id)[keyName];
                                if (teamFixes.length === 2) {
                                    return (
                                        <div className="double-gameweek-team-container">
                                            <div style={{display: "flex", width: "100%", height: "40%", alignItems: "center", justifyContent: "center"}}>
                                                <TeamColorLogo teamName={teamFixes[0][0]} diameter={'15px'}/>
                                                <p style={{marginLeft: "5px"}}>{keyName}</p>
                                            </div>
                                            <div style={{display: "flex", width: "100%", justifyContent: "space-evenly", color: "black"}}>
                                                <Fixture 
                                                    opponent={teamFixes[0][2]} 
                                                    difficulty={teamFixes[0][3]}
                                                    location={teamFixes[0][4]}
                                                    padding={'4px'}
                                                    showGW={false}
                                                    fontSize={'0.85rem'}
                                                    marginBottom={'2px'}
                                                />
                                                <Fixture 
                                                    opponent={teamFixes[1][2]} 
                                                    difficulty={teamFixes[1][3]}
                                                    location={teamFixes[1][4]}
                                                    padding={'4px'}
                                                    showGW={false}
                                                    fontSize={'0.85rem'}
                                                    marginBottom={'2px'}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div id="double-gameweek-teams-container">
                        <p style={{textAlign: "center", fontSize: "0.9rem", borderBottom: "1px solid rgb(138, 80, 138)", borderTop: "1px solid rgb(138, 80, 138)", fontWeight: "bold"}}>Zero gameweek</p>
                        <div style={{display: "flex", flexDirection:"column", alignItems: "center", width: "100%", overflowY: "auto"}}>
                            {zCount === 0 && <p style={{marginTop: "50px"}}>None</p>}
                            {Object.keys(getDoubleGameweekTeams(props.fixtureData, props.gameweek.id)).map((keyName, i) => {
                                const teamFixes = getDoubleGameweekTeams(props.fixtureData, props.gameweek.id)[keyName];
                                if (teamFixes.length === 0) {
                                    return (
                                        <div className="double-gameweek-team-container">
                                            <div style={{display: "flex", width: "100%", height: "40%", alignItems: "center", justifyContent: "center"}}>
                                                <TeamColorLogo teamName={longToShortName(keyName)} diameter={'15px'}/>
                                                <p style={{marginLeft: "5px"}}>{keyName}</p>
                                            </div>
                                            <p style={{fontSize: "0.9rem", textAlign: "center"}}>No games this gw</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="subheader-nextitem-container">
            </div>
        </div>
    )
}

function getDoubleGameweekTeams( fixtureData, gameweekID) {
    const teams = {'Arsenal': [], 'Aston Villa': [], 'Brentford': [], 'Brighton': [], 'Burnley': [], 'Chelsea': [], 'Crystal Palace': [], 'Everton': [], 'Leeds': [],
    'Leicester': [], 'Liverpool': [], 'Man City': [], 'Man Utd': [], 'Newcastle': [], 'Norwich': [], 'Southampton': [], 'Spurs': [], 'Watford': [], 'West Ham': [], 'Wolves': []}

    fixtureData = fixtureData.filter((fixture) => fixture.gameweek === gameweekID)
    
    for (const team in teams) {
        for (const key in fixtureData) {
            const fixture = fixtureData[key]
            if (fixture.name_h === team) {
                teams[team].push([fixture.short_name_h, fixture.name_a, fixture.short_name_a, fixture.team_h_difficulty, 'H'])
            }

            else if (fixture.name_a === team) {
                teams[team].push([fixture.short_name_a, fixture.name_h, fixture.short_name_h, fixture.team_a_difficulty, 'A'])
            }
        }
    }

    console.log(teams)

    return teams;
}

function longToShortName(teamNameLong) {
    const teamColorsLongToShort = {
        'Arsenal': 'ARS',
        'Aston Villa': 'AVL',
        'Brentford': 'BRE',
        'Brighton':'BHA',
        'Burnley': 'BUR',
        'Chelsea': 'CHE',
        'Crystal Palace': 'CRY',
        'Everton': 'EVE',
        'Leeds': 'LEE',
        'Leicester': 'LEI',
        'Liverpool': 'LIV',
        'Man City': 'MCI',
        'Man Utd': 'MUN',
        'Newcastle':'NEW',
        'Norwich': 'NOR',
        'Southampton': 'SOU',
        'Spurs': 'TOT',
        'Watford': 'WAT',
        'West Ham': 'WHU',
        'Wolves': 'WOL',

    }

    return teamColorsLongToShort[teamNameLong];
}

export default DoubleGameweekWatch;