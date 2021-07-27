import { useEffect, useState } from 'react';
import TeamColorLogo from '../../../utils/TeamColors';
import CaptainPick from './CaptainPick';

function Customized( props ) {

    //Fetching playerdata
    const [playerData, setPlayerData] = useState([]);
    const [playerData2, setPlayerData2] = useState([]);

    useEffect(() => {
        fetch(props.apiURL+'players')
        .then(res => res.json())
        .then(data => {
            setPlayerData(data);
            setPlayerData2(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []); 

    //Fetching fixturedata
    const [ fixtureData, setFixtureData ] = useState([]);

    useEffect(() => {
        fetch(props.apiURL+'fixtures')
        .then(res => res.json())
        .then(data => {
            setFixtureData(data)
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const [ selectedPlayers, setSelectedPlayers ] = useState([]);

    const handleAddPlayerClicked = (player) => {
        //possibly need to show error message here..
        if (selectedPlayers.length !== 15) {
            setSelectedPlayers([...selectedPlayers, player])
            setPlayerData((playerData) => playerData.filter(p => p.id !== player.id))

            const playerData2New = playerData2.filter(p => p.id !== player.id)
            setPlayerData2(playerData2New)

            document.getElementById('search-bar').value = "";
            setPlayerData(playerData2New)
        }

    }

    const handleRemovePlayerClicked = (player) => {
        //possibly need to show error message here..
        setPlayerData([...playerData, player].sort((a, b) => (a.id > b.id) ? 1 : -1))
        setPlayerData2([...playerData2, player].sort((a, b) => (a.id > b.id) ? 1 : -1))

        setSelectedPlayers((selectedPlayers) => selectedPlayers.filter(p => p.id !== player.id))

    }

    
    return (
        <div className="captain-picks-container">
            <div id="captain-picks-custom-insert-team-container">
                {/* Add player */}
                <div id="captain-picks-custom-insert-team-input-container">
                    <h3 style={{marginTop: '8px'}} >Add player</h3>
                    <input type="text" style={{width: '85%', margin: '8px 0'}} id="search-bar" placeholder="Search..." onKeyUp={() => {
                        let searchWord = document.getElementById('search-bar').value;
                        let newData = playerData2.filter(function(player) {
                            return player.full_name.toLowerCase().includes(searchWord.toLowerCase());
                        })
                        setPlayerData(newData)
                    }}>
                    </input>
                    <div id="captain-picks-custom-insert-team-search-results">
                        {playerData.map((player) => {
                            return (
                                <div className="captain-picks-custom-insert-team-search-result">
                                    <TeamColorLogo teamName={player.short_name} diameter={'15px'}/>
                                    <p style={{marginLeft: '8px'}}>{player.web_name} ({player.short_name})</p>
                                    <div className="add-player-box" onClick={() => {handleAddPlayerClicked(player)}}><p>+</p></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Add player end */}
                {/* Added players start */}
                <div id="captain-picks-custom-added-players-wrapper">
                    <div id="captain-picks-custom-insert-team-added-players-container">
                        {selectedPlayers.length === 0 && <p style={{margin: '15px', textAlign: 'center', fontSize: '1.2rem'}}>Add players to see the best captain picks for GWX</p>}
                        {selectedPlayers.map((player) => {
                            return (
                                <div className="captain-picks-custom-insert-team-added-player-box">
                                    <div style={{display: 'flex', alignItems: 'center', height: '35px', justifyContent: 'center'}}>
                                        <p style={{fontSize: '0.9rem', textAlign: 'center'}}>{player.web_name}</p>
                                    </div>    
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <TeamColorLogo teamName={player.short_name} diameter={'15px'}/>
                                        <p style={{marginLeft: '4px', fontSize: '0.8rem'}}>({player.short_name})</p>
                                    </div>
                                    <div className="remove-player-box" onClick={() => {handleRemovePlayerClicked(player)}}><p>×</p></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Added players end */}
            </div>
            <div id="captain-picks-custom-results-container">
                {selectedPlayers.length === 0 && <p style={{ margin: '15px', textAlign: 'center', fontSize: '1.2rem'}}>Best captain picks for GWX will appear here</p>}
                {getTopThreeCaptainPicks(selectedPlayers, fixtureData).map((instance, i) => {
                    const [ player, cScore ] = instance;
                    return (
                        <div>
                            <CaptainPick 
                                gameweek={props.gameweek}
                                ranking={i+1}
                                name={player.web_name}
                                team={player.short_name}
                                price={player.price}
                                pointsPerGame={player.points_per_game}
                                cScore={cScore.toFixed(2)}
                                nextGame={nextGame(fixtureData, player.short_name)}
                            />  
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


function getTopThreeCaptainPicks(playerData, fixtureData) {
    let topThreeCScorePlayers = []

    //Filtering: available etc.
    //

    const topPPPPG = getTopAttributeScore(playerData, 'points_per_game')
    const topICT = getTopAttributeScore(playerData, 'ict_index')

    for (const key in playerData) {
        const player = playerData[key]
        
        if (topThreeCScorePlayers.length !== 3) {
            //Calculation of cScore
            const cScore = (player.points_per_game / topPPPPG) + (player.ict_index / topICT) + (1 - (nextGame(fixtureData, player.short_name)[0][2] / 5))
            topThreeCScorePlayers.push([player, cScore])
        }
        else {
            //Calculation of cScore
            const cScore = (player.points_per_game / topPPPPG) + (player.ict_index / topICT) + (1 - (nextGame(fixtureData, player.short_name)[0][2] / 5))
            const pickWithMinScore = getMinCaptainPick(topThreeCScorePlayers);

            if (cScore > pickWithMinScore[1]) {
                const index = topThreeCScorePlayers.findIndex((element, index) => {
                    if (element[1] === pickWithMinScore[1]) {
                        return true;
                    }
                })

                topThreeCScorePlayers.splice(index, 1, [player, cScore]);
            }

        }
    }
    //topThreeCScorePlayers = [[player1, cScoreP1], [player2, cScoreP2],..]
    return topThreeCScorePlayers.sort((a, b) => (a[1] > b[1]) ? -1 : 1);
}

function nextGame(fixData, teamNameShort) {
    let fixList = []
    for (const fixId in fixData) {
        const fix = fixData[fixId]
        if (!fix['finished'] && ( fix['short_name_h'] === teamNameShort || fix['short_name_a'] === teamNameShort ) ) {
            if ( fix['short_name_h'] === teamNameShort ) {
                fixList.push([fix['gameweek'], fix['short_name_a'], fix['team_h_difficulty'], 'H'])
            }
            if ( fix['short_name_a'] === teamNameShort ) {
                fixList.push([fix['gameweek'], fix['short_name_h'], fix['team_a_difficulty'], 'A'])
            }
            if (fixList.length === 1) {
                return fixList;
            }
        }
    }

    return fixList;
}

function getMinCaptainPick(topThree) {
    let res = topThree[0]

    for (let i = 1; i < topThree.length; i++) {
        if (topThree[i][1] < res[1]) {
            res = topThree[i]
        }
    }

    return res;
}

function getTopAttributeScore(data, att) {
    let topScore = 0;

    for (const key in data) {
        const player = data[key]
        if (player[att] > topScore) {
            topScore = player[att];
        }
    }

    return topScore;
}

export default Customized;