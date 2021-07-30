import NextItemContainer from './NextItemContainer';

function DoubleGameweekWatch( props ) {

    const handleNextItem = () => {
        const subHeader = document.getElementById('subheader-main');
        subHeader.style.transform = 'translateX(-33.333333333333%)';
      }

    return (
        <div id="subheader-item-double-gw" className="subheader-item" style={{borderRight: "0"}}>
            <NextItemContainer display="block" rotation="90" handleNextItem={handleNextItem}/>
            <div id="double-gameweek-watch-container">
                <p style={{textAlign: "center"}}>GW{props.gameweek ? props.gameweek.id : ""} double/zero gameweek watch</p>
                <div style={{width: "100%", height: "80%", display: "flex"}}>
                    <div id="double-gameweek-teams-container" style={{borderRight: "1px solid rgb(138, 80, 138)"}}>
                        <p style={{textAlign: "center", fontSize: "0.9rem", borderBottom: "1px solid rgb(138, 80, 138)", borderTop: "1px solid rgb(138, 80, 138)"}}>Double gameweek</p>
                    </div>
                    <div id="zero-gameweek-teams-container">
                        <p style={{textAlign: "center", fontSize: "0.9rem", borderBottom: "1px solid rgb(138, 80, 138)", borderTop: "1px solid rgb(138, 80, 138)"}}>Zero gameweek</p>
                    </div>
                </div>
            </div>
            <NextItemContainer display="none" rotation="90"/>
        </div>
    )
}

function getDoubleGameweekTeams( fixtureData, gameweekID) {
    const teams = {'Arsenal': [], 'Aston Villa': [], 'Brentford': [], 'Brighton': [], 'Burnley': [], 'Chelsea': [], 'Crystal Palace': [], 'Everton': [], 'Leeds': [],
    'Leicester': [], 'Liverpool': [], 'Man City': [], 'Man Utd': [], 'Newcastle': [], 'Norwich': [], 'Southampton': [], 'Spurs': [], 'Watford': [], 'West Ham': [], 'Wolves': []}

    fixtureData = fixtureData.filter((fixture) => fixture.gameweek === gameweekID)
    
    for (const team in teams) {
        
    }
}

export default DoubleGameweekWatch;