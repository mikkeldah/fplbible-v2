import TeamColorLogo from '../../../utils/TeamColors';

function NotIncludeTeamsList( props ) {

    return (
        <div id="teams-not-to-include-container">
            <div id="included-teams-list" className="teams-not-to-include-subcontainer">
                {props.includedTeams.map((team) => {
                    return (
                        <div className="rec-list-item" onClick={() => props.moveTeamToNotIncluded(team)} key={team}>
                            <TeamColorLogo teamName={convertTeamNameToShort(team)} diameter={'12px'}/>
                            <p>{team} {">"}</p>
                        </div>
                    )
                })}
            </div>
            <div id="not-included-teams-list" className="teams-not-to-include-subcontainer">
                {props.notIncludedTeams.map((team) => {
                    return (
                        <div className="rec-list-item" style={{ flexDirection: 'row-reverse', paddingRight: '5px', paddingLeft: '0'}} onClick={() => props.moveTeamToIncluded(team)} key={team}>
                            <TeamColorLogo teamName={convertTeamNameToShort(team)} diameter={'12px'}/>
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