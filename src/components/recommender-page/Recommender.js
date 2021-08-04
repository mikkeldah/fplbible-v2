import { useEffect, useState } from "react";
import setTheme from "../../utils/Themes";
import RecommenderInput from "./sub-components/RecommenderInput";
import PlayerPick from "./sub-components/PlayerPick";
import CustomModal from "../../utils/CustomModal";


function Recommender( props ) {

    //set theme to purple when rendering the players page
    useEffect(() => {
        setTheme('#38003c', '#530553');
    })

    useEffect(() => {
        props.handlePageSwitch('Recommender');
        document.title = "The FPL Bible | Recommender";
    })

    //Fetching playerdata
    const [ playerData, setPlayerData ] = useState([]);

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

    const [ inputValues, setInputValues ] = useState([]);

    const sendDataToParent = (inputValues) => {
        setInputValues(inputValues);
    }

    const [ recommenderResults, setRecommenderResults ] = useState([[], [], [], []]);

    const searchButtonClicked = () => {
        const results = getRecommendations(inputValues, playerData, fixtureData, props.gameweek.id)
        const nPlayersRequested = results[4]
        let nPlayersReturned = 0;
        for (let i = 0; i < results.length-1; i++) {
            nPlayersReturned += results[i].length
        }

        if (nPlayersRequested === nPlayersReturned) {
            setRecommenderResults(results);
        }
        else {
            inputError();
        }
    }

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const inputError = () => {
        setModalIsOpen(true);
    }

    const errorDismissed = () => {
        setModalIsOpen(false);
    }

    return (
        <div id="recommender-main-container">
            <CustomModal 
                isOpen={modalIsOpen}
                onRequestClose={errorDismissed}
                text={'Could not find any player or group of players matching the input. Are you sure that you have entered the correct values?'}
            />
            <RecommenderInput sendDataToParent={sendDataToParent} searchButtonClicked={searchButtonClicked}/>
            <div id="recommender-results-main">
                <div id="recommender-results-title-container">
                    <div className="recommender-label-container-title">
                    </div>
                    <h3>RECOMMENDATIONS</h3>
                </div>
                <div id="recommender-results-container">
                    <div className="recommender-results-row">
                        <div className="recommender-label-container">
                            <h4 className="recommender-position-label">GKP</h4>
                        </div>
                        <div className="recommender-results-player-pick-container">
                            {recommenderResults[0].map( result => {
                                const [ playerStats, rScore ] = result;
                                return (
                                    <PlayerPick web_name={playerStats.web_name} teamName={playerStats.short_name} price={playerStats.price}/>    
                                    
                                )
                            })}
                        </div>
                    </div>
                    <div className="recommender-results-row">
                        <div className="recommender-label-container">
                            <h4 className="recommender-position-label">DEF</h4>
                        </div>
                        <div className="recommender-results-player-pick-container">
                            {recommenderResults[1].map( result => {
                                const [ playerStats, rScore ] = result;
                                return (
                                    <PlayerPick web_name={playerStats.web_name} teamName={playerStats.short_name} price={playerStats.price}/>     
                                    
                                )
                            })}
                        </div>
                    </div>
                    <div className="recommender-results-row">
                        <div className="recommender-label-container">
                            <h4 className="recommender-position-label">MID</h4>
                        </div>
                        <div className="recommender-results-player-pick-container">
                            {recommenderResults[2].map( result => {
                                const [ playerStats, rScore ] = result;
                                return (
                                    <PlayerPick web_name={playerStats.web_name} teamName={playerStats.short_name} price={playerStats.price}/>     
                                    
                                )
                            })}
                        </div>
                    </div>
                    <div className="recommender-results-row">
                        <div className="recommender-label-container">
                            <h4 className="recommender-position-label">FWD</h4>
                        </div>
                        <div className="recommender-results-player-pick-container">
                            {recommenderResults[3].map( result => {
                                const [ playerStats, rScore ] = result;
                                return (
                                    <PlayerPick web_name={playerStats.web_name} teamName={playerStats.short_name} price={playerStats.price}/>   
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

function getRecommendations(inputValues, playerData, fixtureData, currentGameweekID) {
    let bank = inputValues[0]
    let nGKP = inputValues[1]
    let nDEF = inputValues[2]
    let nMID = inputValues[3]
    let nFWD = inputValues[4]

    const nPlayersRequested = nGKP + nDEF + nMID + nFWD
    const notInclude = inputValues[5]

    playerData = playerData.filter(player => player.minutes > 0)
    playerData = playerData.filter(player => player.status === 'Available')
    playerData = playerData.filter(player => !notInclude.includes(player.team))
    playerData = playerData.filter(player => nextGameweekGames(fixtureData, player.short_name, currentGameweekID).length > 0)

    const playerDataGKP = playerData.filter(player => player.position === 'GKP')
    const playerDataDEF = playerData.filter(player => player.position === 'DEF')
    const playerDataMID = playerData.filter(player => player.position === 'MID')
    const playerDataFWD = playerData.filter(player => player.position === 'FWD')

    //greedy algorithm

    //lists of recommendations which will be returned
    let GKPresults = []
    let DEFresults = []
    let MIDresults = []
    let FWDresults = []

    //Keeps track of how many players selected from each team
    let teamsAdded = []

    //Adding MID recommendations
    const topPPPPGMID = getTopAttributeScore(playerDataMID, 'points_per_game')
    const topICTMID = getTopAttributeScore(playerDataMID, 'ict_index')

    while (nMID !== 0) {
        let topRScoreMID = 0;
        let topPlayerMID;
        let topPlayerListKey; 

        for (const key in playerDataMID) {
            const player = playerDataMID[key]
            if ( (bank - player.price >= 0) && (((bank - player.price) / (nGKP + nDEF + nMID + nFWD - 1))  > 5.5 
            || (nGKP + nDEF + nMID + nFWD - 1) === 0) && (notThreeOrMoreRecommendationsFromSameTeam(player.team, teamsAdded))) {
                // IMPORTANT: calculation of the score that the recommender will use to choose top players. 
                const rScore = (player.points_per_game / topPPPPGMID) + (player.ict_index / topICTMID) + (1 - nextFiveGamesDiffAvg(fixtureData, player.short_name, currentGameweekID) / 5)
                if (rScore > topRScoreMID) {
                    topPlayerMID = player;
                    topRScoreMID = rScore;
                    topPlayerListKey = key;
                }
            }
        }

        if (topRScoreMID === 0) {
            break;
        }

        MIDresults.push([topPlayerMID, topRScoreMID])
        teamsAdded.push(topPlayerMID.team)
        bank = bank - topPlayerMID.price;
        playerDataMID.splice(topPlayerListKey, 1);

        nMID = nMID - 1;

    }

    //Adding FWD recommendations
    const topPPPPGFWD = getTopAttributeScore(playerDataFWD, 'points_per_game')
    const topICTFWD = getTopAttributeScore(playerDataFWD, 'ict_index')


    while (nFWD !== 0) {
        let topRScoreFWD = 0;
        let topPlayerFWD;
        let topPlayerListKey; 

        for (const key in playerDataFWD) {
            const player = playerDataFWD[key]
            if ( (bank - player.price >= 0) && (((bank - player.price) / (nGKP + nDEF + nMID + nFWD - 1))  > 5.0 
            || (nGKP + nDEF + nMID + nFWD - 1) === 0) && (notThreeOrMoreRecommendationsFromSameTeam(player.team, teamsAdded))) {
                // IMPORTANT: calculation of the score that the recommender will use to choose top players. 
                const rScore = (player.points_per_game / topPPPPGFWD) + (player.ict_index / topICTFWD) + (1 - nextFiveGamesDiffAvg(fixtureData, player.short_name, currentGameweekID) / 5)
                if (rScore > topRScoreFWD) {
                    topPlayerFWD = player;
                    topRScoreFWD= rScore;
                    topPlayerListKey = key;
                }
            }
        }

        if (topRScoreFWD === 0) {
            break;
        }

        FWDresults.push([topPlayerFWD, topRScoreFWD]);
        teamsAdded.push(topPlayerFWD.team)
        bank = bank - topPlayerFWD.price;
        playerDataFWD.splice(topPlayerListKey, 1);

        nFWD = nFWD - 1;

    }

    //Adding DEF recommendations
    const topPPPPGDEF = getTopAttributeScore(playerDataDEF, 'points_per_game')
    const topICTDEF = getTopAttributeScore(playerDataDEF, 'ict_index')

    while (nDEF !== 0) {
        let topRScoreDEF = 0;
        let topPlayerDEF;
        let topPlayerListKey; 

        for (const key in playerDataDEF) {
            const player = playerDataDEF[key]
            if ( (bank - player.price >= 0) && (((bank - player.price) / (nGKP + nDEF + nMID + nFWD - 1))  > 4.5 
            || (nGKP + nDEF + nMID + nFWD - 1) === 0) && (notThreeOrMoreRecommendationsFromSameTeam(player.team, teamsAdded))) {
                // IMPORTANT: calculation of the score that the recommender will use to choose top players. 
                console.log(nextFiveGamesDiffAvg(fixtureData, player.short_name, currentGameweekID))
                const rScore = (player.points_per_game / topPPPPGDEF) + (player.ict_index / topICTDEF) + (1 - nextFiveGamesDiffAvg(fixtureData, player.short_name, currentGameweekID) / 5)
                if (rScore > topRScoreDEF) {
                    topPlayerDEF = player;
                    topRScoreDEF = rScore;
                    topPlayerListKey = key;
                }
            }
        }

        if (topRScoreDEF === 0) {
            break;
        }

        DEFresults.push([topPlayerDEF, topRScoreDEF])
        teamsAdded.push(topPlayerDEF.team)
        bank = bank - topPlayerDEF.price;
        playerDataDEF.splice(topPlayerListKey, 1);

        nDEF = nDEF - 1;

    }

    //Adding GKP recommendations
    const topPPPPGGKP = getTopAttributeScore(playerDataGKP, 'points_per_game')
    const topICTGKP = getTopAttributeScore(playerDataGKP, 'ict_index')

    while (nGKP !== 0) {
        let topRScoreGKP = 0;
        let topPlayerGKP;
        let topPlayerListKey;

        for (const key in playerDataGKP) {
            const player = playerDataGKP[key]
            if ( (bank - player.price >= 0) && (((bank - player.price) / (nGKP + nDEF + nMID + nFWD - 1))  > 4.0 
            || (nGKP + nDEF + nMID + nFWD - 1) === 0) && (notThreeOrMoreRecommendationsFromSameTeam(player.team, teamsAdded))) {
                // IMPORTANT: calculation of the score that the recommender will use to choose top players. 
                const rScore = (player.points_per_game / topPPPPGGKP) + (player.ict_index / topICTGKP) + (1 - nextFiveGamesDiffAvg(fixtureData, player.short_name, currentGameweekID) / 5)
                if (rScore > topRScoreGKP) {
                    topPlayerGKP = player;
                    topRScoreGKP = rScore;
                    topPlayerListKey = key;
                }
            }
        }

        if (topRScoreGKP === 0) {
            break;
        }

        GKPresults.push([topPlayerGKP, topRScoreGKP])
        teamsAdded.push(topPlayerGKP.team)
        bank = bank - topPlayerGKP.price;
        playerDataGKP.splice(topPlayerListKey, 1);

        nGKP = nGKP - 1;

    }

    return [GKPresults, DEFresults, MIDresults, FWDresults, nPlayersRequested];  

}

function nextFiveGamesDiffAvg(fixData, teamNameShort, currentGameweekID) {
    let fixList = []
    for (const fixId in fixData) {
        const fix = fixData[fixId]
        if (( (fix['gameweek'] <= currentGameweekID + 5) && fix['gameweek'] >= currentGameweekID) && ( fix['short_name_h'] === teamNameShort || fix['short_name_a'] === teamNameShort ) ) {
            if ( fix['short_name_h'] === teamNameShort ) {
                fixList.push([fix['gameweek'], fix['short_name_a'], fix['team_h_difficulty'], 'H'])
            }
            if ( fix['short_name_a'] === teamNameShort ) {
                fixList.push([fix['gameweek'], fix['short_name_h'], fix['team_a_difficulty'], 'A'])
            }
            if (fixList.length === 5) {
                console.log(teamNameShort)
                console.log(fixList)
                return avgDifficultyOfFixList(fixList);
            }
        }
    }

    return avgDifficultyOfFixList(fixList);
}

function avgDifficultyOfFixList(fixList) {
    let counter = 0;
    const denominator = fixList.length;

    for (const key in fixList) {
        const fix = fixList[key]
        counter = counter + fix[2]
    }

    if (denominator === 0) {
        return 0;
    }

    return counter / denominator;
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

function notThreeOrMoreRecommendationsFromSameTeam(team, teamsAdded) {
    const teams = teamsAdded.filter(t => t === team);
    return teams.length === 3 ? false : true;
}
	
export default Recommender;