import { useEffect, useState } from 'react';
import CaptainPick from './CaptainPick';

function General( props ) {

    //Fetching playerdata
    const [ playerData, setPlayerData ] = useState([])

    useEffect(() => {
        fetch(props.apiURL+'players')
        .then(res => res.json())
        .then(data => {
            setPlayerData(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []); 

    //Fetching fixturedata
    const [ fixtureData, setFixtureData ] = useState([])

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

    return (
        <div className="captain-picks-container">
            <div id="captain-picks-general-title">
                <h2>Top three captain picks for GW{props.gameweek.id}</h2>
            </div>
            <div id="captain-picks-general-picks-container">
                {getTopThreeCaptainPicks(playerData, fixtureData, props.gameweek.id).map((instance, i) => {
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
                                nextGames={nextGameweekGames(fixtureData, player.short_name, props.gameweek.id)}
                            />  
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function getTopThreeCaptainPicks(playerData, fixtureData, currentGameweekID) {
    let topThreeCScorePlayers = []

    //Filtering: available etc.
    playerData = playerData.filter(player => player.status === 'Available')

    const topPPPPG = getTopAttributeScore(playerData, 'points_per_game')
    const topICT = getTopAttributeScore(playerData, 'ict_index')

    for (const key in playerData) {
        const player = playerData[key]
        
        if (topThreeCScorePlayers.length !== 3) {
            //Calculation of cScore
            const cScore = (player.points_per_game / topPPPPG) + (player.ict_index / topICT) + nextGameweekGamesScore(nextGameweekGames(fixtureData, player.short_name, currentGameweekID))

            topThreeCScorePlayers.push([player, cScore])
        }
        else {
            //Calculation of cScore
            const cScore = (player.points_per_game / topPPPPG) + (player.ict_index / topICT) + nextGameweekGamesScore(nextGameweekGames(fixtureData, player.short_name, currentGameweekID))

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

function nextGameweekGames(fixData, teamNameShort, currentGameweekID) {
    let fixList = []
    for (const fixId in fixData) {
        const fix = fixData[fixId]
        if (( fix['gameweek'] === currentGameweekID ) && ( fix['short_name_h'] === teamNameShort || fix['short_name_a'] === teamNameShort ) ) {
            if ( fix['short_name_h'] === teamNameShort ) {
                fixList.push([fix['gameweek'], fix['short_name_a'], fix['team_h_difficulty'], 'H'])
            }
            if ( fix['short_name_a'] === teamNameShort ) {
                fixList.push([fix['gameweek'], fix['short_name_h'], fix['team_a_difficulty'], 'A'])
            }
        }
    }

    return fixList;
}

function nextGameweekGamesScore(fixList) {
    if (fixList.length === 0) {
        return -10;
    }

    let score = 0;

    for (const key in fixList) {
        const fix = fixList[key] 
        const fixDifficulty = fix[2]
        score = score + (1 - (fixDifficulty / 5))
    }

    return score;
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

export default General;