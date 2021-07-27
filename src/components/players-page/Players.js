import { useState, useEffect } from 'react';
import Player from './sub-components/Player';
import setTheme from '../../utils/Themes';


function Players( props ) {

    //set theme to purple when rendering the players page
    useEffect(() => {
        setTheme('#38003c', '#530553');
    }, [])

    useEffect(() => {
        props.handlePageSwitch('Players');
    })

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
    const [fixData, setFixData] = useState([]);

    useEffect(() => {
        fetch(props.apiURL+'fixtures')
        .then(res => res.json())
        .then(data => {
            setFixData(data)
        })
        .catch(err => {
            console.log(err);
        });
    }, []); 

    return (
        <div id="players-main">
            <div id="search-bar-container">
                <input type="text" id="search-bar" placeholder="Search..." onKeyUp={() => {
                    let searchWord = document.getElementById('search-bar').value;
                    let newData = playerData2.filter(function(player) {
                        return player.web_name.includes(searchWord)
                    })
                    setPlayerData(newData)
                }}></input>
            </div>
            <div id="players-container">
                {playerData.map((player) => {
                    const { id, full_name, web_name, position, team, short_name, price, total_points, minutes, points_per_minute, points_per_price, points_per_game,
                         points_per_price_per_minute, points_per_price_per_game, status, takes_corners, takes_freekicks, takes_penalties, form, ict_index } = player;
                    const nextFiveFix = nextFiveGames(fixData, short_name);
                    return (
                        <Player name={full_name} web_name={web_name} price={price} total_points={total_points} team={team} short_name={short_name}
                        minutes={minutes} points_per_game={points_per_game} points_per_price={points_per_price} points_per_price_per_game={points_per_price_per_game} nextFiveFix={nextFiveFix}/>
                    )
                })}
            </div>
        </div>
    )
}

function nextFiveGames(fixData, teamNameShort) {
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
            if (fixList.length === 5) {
                return fixList;
            }
        }
    }
    return fixList;
}

export default Players;