import { useEffect, useState } from 'react';
import TeamColorLogo from '../../../utils/TeamColors';

function NotIncludeTeamsList( props ) {

    const [includedTeams, setIncludedTeams ] = useState(['Arsenal', 'Aston Villa', 'Brentford', 'Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Leeds',
    'Leicester', 'Liverpool', 'Man City', 'Man Utd', 'Newcastle', 'Norwich', 'Southampton', 'Spurs', 'Watford', 'West Ham', 'Wolves'])
    const [notIncludedTeams, setNotIncludedTeams ] = useState([])

    function moveTeamToNotIncluded( team ) {
        setIncludedTeams((teams) => teams.filter(t => t !== team))
        setNotIncludedTeams([...notIncludedTeams, team].sort((a, b) => a.localeCompare(b)))
    }

    const moveTeamToIncluded = (team) => {
        setNotIncludedTeams((teams) => teams.filter(t => t !== team))
        setIncludedTeams([...includedTeams, team].sort((a, b) => a.localeCompare(b)))
    }

    useEffect(() => {
        props.sendDataToParent(props.inputValIndex, notIncludedTeams)
    }, [notIncludedTeams])

    return (
        <div id="teams-not-to-include-container">
            <div id="included-teams-list" className="teams-not-to-include-subcontainer">
                {includedTeams.map((team) => {
                    return (
                        <div className="rec-list-item" onClick={() => moveTeamToNotIncluded(team)} key={team}>
                            <TeamColorLogo teamName={convertTeamNameToShort(team)}/>
                            <p>{team} {">"}</p>
                        </div>
                    )
                })}
            </div>
            <div id="not-included-teams-list" className="teams-not-to-include-subcontainer">
                {notIncludedTeams.map((team) => {
                    return (
                        <div className="rec-list-item" style={{ flexDirection: 'row-reverse', paddingRight: '5px', paddingLeft: '0'}} onClick={() => moveTeamToIncluded(team)} key={team}>
                            <TeamColorLogo teamName={convertTeamNameToShort(team)}/>
                            <p style={{ marginRight: '5px'}}>{"<"} {team}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function convertTeamNameToShort(teamName) {
     const shortNames = {'Arsenal': 'ARS', 'Aston Villa': 'AVL', 'Brentford': 'BRE', 'Brighton': 'BHA', 'Burnley': 'BUR', 'Chelsea': 'CHE', 'Crystal Palace': 'CRY', 'Everton': 'EVE', 'Leeds': 'LEE',
    'Leicester': 'LEI', 'Liverpool': 'LIV', 'Man City': 'MCI', 'Man Utd': 'MUN', 'Newcastle': 'NEW', 'Norwich': 'NOR', 'Southampton': 'SOU', 'Spurs': 'TOT', 'Watford':'WAT', 'West Ham': 'WHU', 'Wolves': 'WOL'}

    return shortNames[teamName];
}

export default NotIncludeTeamsList;