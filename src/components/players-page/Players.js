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
    
    //Delete before deployment
    const rawFixData = [
            {
                "gameweek": 1,
                "finished": false,
                "name_h": "Brentford",
                "short_name_h": "BRE",
                "team_h_difficulty": 3,
                "name_a": "Arsenal",
                "short_name_a": "ARS",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 1,
                "finished": false,
                "name_h": "Man Utd",
                "short_name_h": "MUN",
                "team_h_difficulty": 3,
                "name_a": "Leeds",
                "short_name_a": "LEE",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 1,
                "finished": false,
                "name_h": "Burnley",
                "short_name_h": "BUR",
                "team_h_difficulty": 2,
                "name_a": "Brighton",
                "short_name_a": "BHA",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 1,
                "finished": false,
                "name_h": "Chelsea",
                "short_name_h": "CHE",
                "team_h_difficulty": 2,
                "name_a": "Crystal Palace",
                "short_name_a": "CRY",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 1,
                "finished": false,
                "name_h": "Everton",
                "short_name_h": "EVE",
                "team_h_difficulty": 2,
                "name_a": "Southampton",
                "short_name_a": "SOU",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 1,
                "finished": false,
                "name_h": "Leicester",
                "short_name_h": "LEI",
                "team_h_difficulty": 2,
                "name_a": "Wolves",
                "short_name_a": "WOL",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 1,
                "finished": false,
                "name_h": "Watford",
                "short_name_h": "WAT",
                "team_h_difficulty": 2,
                "name_a": "Aston Villa",
                "short_name_a": "AVL",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 1,
                "finished": false,
                "name_h": "Norwich",
                "short_name_h": "NOR",
                "team_h_difficulty": 4,
                "name_a": "Liverpool",
                "short_name_a": "LIV",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 1,
                "finished": false,
                "name_h": "Newcastle",
                "short_name_h": "NEW",
                "team_h_difficulty": 3,
                "name_a": "West Ham",
                "short_name_a": "WHU",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 1,
                "finished": false,
                "name_h": "Spurs",
                "short_name_h": "TOT",
                "team_h_difficulty": 4,
                "name_a": "Man City",
                "short_name_a": "MCI",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 2,
                "finished": false,
                "name_h": "Liverpool",
                "short_name_h": "LIV",
                "team_h_difficulty": 2,
                "name_a": "Burnley",
                "short_name_a": "BUR",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 2,
                "finished": false,
                "name_h": "Aston Villa",
                "short_name_h": "AVL",
                "team_h_difficulty": 2,
                "name_a": "Newcastle",
                "short_name_a": "NEW",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 2,
                "finished": false,
                "name_h": "Crystal Palace",
                "short_name_h": "CRY",
                "team_h_difficulty": 2,
                "name_a": "Brentford",
                "short_name_a": "BRE",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 2,
                "finished": false,
                "name_h": "Leeds",
                "short_name_h": "LEE",
                "team_h_difficulty": 4,
                "name_a": "Everton",
                "short_name_a": "EVE",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 2,
                "finished": false,
                "name_h": "Man City",
                "short_name_h": "MCI",
                "team_h_difficulty": 2,
                "name_a": "Norwich",
                "short_name_a": "NOR",
                "team_a_difficulty": 5
            },
            {
                "gameweek": 2,
                "finished": false,
                "name_h": "Brighton",
                "short_name_h": "BHA",
                "team_h_difficulty": 2,
                "name_a": "Watford",
                "short_name_a": "WAT",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 2,
                "finished": false,
                "name_h": "Southampton",
                "short_name_h": "SOU",
                "team_h_difficulty": 4,
                "name_a": "Man Utd",
                "short_name_a": "MUN",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 2,
                "finished": false,
                "name_h": "Wolves",
                "short_name_h": "WOL",
                "team_h_difficulty": 3,
                "name_a": "Spurs",
                "short_name_a": "TOT",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 2,
                "finished": false,
                "name_h": "Arsenal",
                "short_name_h": "ARS",
                "team_h_difficulty": 4,
                "name_a": "Chelsea",
                "short_name_a": "CHE",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 2,
                "finished": false,
                "name_h": "West Ham",
                "short_name_h": "WHU",
                "team_h_difficulty": 4,
                "name_a": "Leicester",
                "short_name_a": "LEI",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 3,
                "finished": false,
                "name_h": "Man City",
                "short_name_h": "MCI",
                "team_h_difficulty": 3,
                "name_a": "Arsenal",
                "short_name_a": "ARS",
                "team_a_difficulty": 5
            },
            {
                "gameweek": 3,
                "finished": false,
                "name_h": "Aston Villa",
                "short_name_h": "AVL",
                "team_h_difficulty": 2,
                "name_a": "Brentford",
                "short_name_a": "BRE",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 3,
                "finished": false,
                "name_h": "Brighton",
                "short_name_h": "BHA",
                "team_h_difficulty": 4,
                "name_a": "Everton",
                "short_name_a": "EVE",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 3,
                "finished": false,
                "name_h": "Newcastle",
                "short_name_h": "NEW",
                "team_h_difficulty": 2,
                "name_a": "Southampton",
                "short_name_a": "SOU",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 3,
                "finished": false,
                "name_h": "Norwich",
                "short_name_h": "NOR",
                "team_h_difficulty": 4,
                "name_a": "Leicester",
                "short_name_a": "LEI",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 3,
                "finished": false,
                "name_h": "West Ham",
                "short_name_h": "WHU",
                "team_h_difficulty": 2,
                "name_a": "Crystal Palace",
                "short_name_a": "CRY",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 3,
                "finished": false,
                "name_h": "Liverpool",
                "short_name_h": "LIV",
                "team_h_difficulty": 4,
                "name_a": "Chelsea",
                "short_name_a": "CHE",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 3,
                "finished": false,
                "name_h": "Burnley",
                "short_name_h": "BUR",
                "team_h_difficulty": 3,
                "name_a": "Leeds",
                "short_name_a": "LEE",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 3,
                "finished": false,
                "name_h": "Spurs",
                "short_name_h": "TOT",
                "team_h_difficulty": 2,
                "name_a": "Watford",
                "short_name_a": "WAT",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 3,
                "finished": false,
                "name_h": "Wolves",
                "short_name_h": "WOL",
                "team_h_difficulty": 4,
                "name_a": "Man Utd",
                "short_name_a": "MUN",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 4,
                "finished": false,
                "name_h": "Crystal Palace",
                "short_name_h": "CRY",
                "team_h_difficulty": 3,
                "name_a": "Spurs",
                "short_name_a": "TOT",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 4,
                "finished": false,
                "name_h": "Arsenal",
                "short_name_h": "ARS",
                "team_h_difficulty": 2,
                "name_a": "Norwich",
                "short_name_a": "NOR",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 4,
                "finished": false,
                "name_h": "Brentford",
                "short_name_h": "BRE",
                "team_h_difficulty": 2,
                "name_a": "Brighton",
                "short_name_a": "BHA",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 4,
                "finished": false,
                "name_h": "Leicester",
                "short_name_h": "LEI",
                "team_h_difficulty": 4,
                "name_a": "Man City",
                "short_name_a": "MCI",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 4,
                "finished": false,
                "name_h": "Man Utd",
                "short_name_h": "MUN",
                "team_h_difficulty": 2,
                "name_a": "Newcastle",
                "short_name_a": "NEW",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 4,
                "finished": false,
                "name_h": "Southampton",
                "short_name_h": "SOU",
                "team_h_difficulty": 3,
                "name_a": "West Ham",
                "short_name_a": "WHU",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 4,
                "finished": false,
                "name_h": "Watford",
                "short_name_h": "WAT",
                "team_h_difficulty": 2,
                "name_a": "Wolves",
                "short_name_a": "WOL",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 4,
                "finished": false,
                "name_h": "Chelsea",
                "short_name_h": "CHE",
                "team_h_difficulty": 2,
                "name_a": "Aston Villa",
                "short_name_a": "AVL",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 4,
                "finished": false,
                "name_h": "Leeds",
                "short_name_h": "LEE",
                "team_h_difficulty": 4,
                "name_a": "Liverpool",
                "short_name_a": "LIV",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 4,
                "finished": false,
                "name_h": "Everton",
                "short_name_h": "EVE",
                "team_h_difficulty": 2,
                "name_a": "Burnley",
                "short_name_a": "BUR",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 5,
                "finished": false,
                "name_h": "Newcastle",
                "short_name_h": "NEW",
                "team_h_difficulty": 3,
                "name_a": "Leeds",
                "short_name_a": "LEE",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 5,
                "finished": false,
                "name_h": "Wolves",
                "short_name_h": "WOL",
                "team_h_difficulty": 2,
                "name_a": "Brentford",
                "short_name_a": "BRE",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 5,
                "finished": false,
                "name_h": "Burnley",
                "short_name_h": "BUR",
                "team_h_difficulty": 3,
                "name_a": "Arsenal",
                "short_name_a": "ARS",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 5,
                "finished": false,
                "name_h": "Liverpool",
                "short_name_h": "LIV",
                "team_h_difficulty": 2,
                "name_a": "Crystal Palace",
                "short_name_a": "CRY",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 5,
                "finished": false,
                "name_h": "Man City",
                "short_name_h": "MCI",
                "team_h_difficulty": 2,
                "name_a": "Southampton",
                "short_name_a": "SOU",
                "team_a_difficulty": 5
            },
            {
                "gameweek": 5,
                "finished": false,
                "name_h": "Norwich",
                "short_name_h": "NOR",
                "team_h_difficulty": 2,
                "name_a": "Watford",
                "short_name_a": "WAT",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 5,
                "finished": false,
                "name_h": "Aston Villa",
                "short_name_h": "AVL",
                "team_h_difficulty": 4,
                "name_a": "Everton",
                "short_name_a": "EVE",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 5,
                "finished": false,
                "name_h": "Brighton",
                "short_name_h": "BHA",
                "team_h_difficulty": 4,
                "name_a": "Leicester",
                "short_name_a": "LEI",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 5,
                "finished": false,
                "name_h": "West Ham",
                "short_name_h": "WHU",
                "team_h_difficulty": 4,
                "name_a": "Man Utd",
                "short_name_a": "MUN",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 5,
                "finished": false,
                "name_h": "Spurs",
                "short_name_h": "TOT",
                "team_h_difficulty": 4,
                "name_a": "Chelsea",
                "short_name_a": "CHE",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 6,
                "finished": false,
                "name_h": "Chelsea",
                "short_name_h": "CHE",
                "team_h_difficulty": 4,
                "name_a": "Man City",
                "short_name_a": "MCI",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 6,
                "finished": false,
                "name_h": "Everton",
                "short_name_h": "EVE",
                "team_h_difficulty": 2,
                "name_a": "Norwich",
                "short_name_a": "NOR",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 6,
                "finished": false,
                "name_h": "Leeds",
                "short_name_h": "LEE",
                "team_h_difficulty": 3,
                "name_a": "West Ham",
                "short_name_a": "WHU",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 6,
                "finished": false,
                "name_h": "Leicester",
                "short_name_h": "LEI",
                "team_h_difficulty": 2,
                "name_a": "Burnley",
                "short_name_a": "BUR",
                "team_a_difficulty": 3
            },
            {
                "gameweek": 6,
                "finished": false,
                "name_h": "Man Utd",
                "short_name_h": "MUN",
                "team_h_difficulty": 2,
                "name_a": "Aston Villa",
                "short_name_a": "AVL",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 6,
                "finished": false,
                "name_h": "Watford",
                "short_name_h": "WAT",
                "team_h_difficulty": 2,
                "name_a": "Newcastle",
                "short_name_a": "NEW",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 6,
                "finished": false,
                "name_h": "Brentford",
                "short_name_h": "BRE",
                "team_h_difficulty": 4,
                "name_a": "Liverpool",
                "short_name_a": "LIV",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 6,
                "finished": false,
                "name_h": "Southampton",
                "short_name_h": "SOU",
                "team_h_difficulty": 2,
                "name_a": "Wolves",
                "short_name_a": "WOL",
                "team_a_difficulty": 2
            },
            {
                "gameweek": 6,
                "finished": false,
                "name_h": "Arsenal",
                "short_name_h": "ARS",
                "team_h_difficulty": 3,
                "name_a": "Spurs",
                "short_name_a": "TOT",
                "team_a_difficulty": 4
            },
            {
                "gameweek": 6,
                "finished": false,
                "name_h": "Crystal Palace",
                "short_name_h": "CRY",
                "team_h_difficulty": 2,
                "name_a": "Brighton",
                "short_name_a": "BHA",
                "team_a_difficulty": 2
            }
    ]

    //Delete before deployment
    const rawData = [
        {
            "id": 50,
            "full_name": "Douglas Luiz Soares de Paulo",
            "web_name": "Douglas Luiz",
            "position": "MID",
            "team": "Aston Villa",
            "short_name": "AVL",
            "price": 4.5,
            "total_points": 72,
            "minutes": 2781,
            "points_per_minute": 0.025889967637540454,
            "points_per_price": 16.0,
            "points_per_game": 2.2,
            "points_per_price_per_minute": 0.005753326141675656,
            "points_per_price_per_game": 0.48888888888888893,
            "status": "Available",
            "takes_corners": false,
            "takes_freekicks": false,
            "takes_penalties": false,
            "form": 0.0,
            "ict_index": 90.0
        },
        {
            "id": 51,
            "full_name": "Jacob Ramsey",
            "web_name": "Ramsey",
            "position": "MID",
            "team": "Aston Villa",
            "short_name": "AVL",
            "price": 4.5,
            "total_points": 28,
            "minutes": 611,
            "points_per_minute": 0.04582651391162029,
            "points_per_price": 6.222222222222222,
            "points_per_game": 1.3,
            "points_per_price_per_minute": 0.010183669758137844,
            "points_per_price_per_game": 0.2888888888888889,
            "status": "Available",
            "takes_corners": false,
            "takes_freekicks": false,
            "takes_penalties": false,
            "form": 0.0,
            "ict_index": 28.9
        },
        {
            "id": 53,
            "full_name": "Adam Lallana",
            "web_name": "Lallana",
            "position": "MID",
            "team": "Brighton",
            "short_name": "BHA",
            "price": 5.5,
            "total_points": 58,
            "minutes": 1584,
            "points_per_minute": 0.036616161616161616,
            "points_per_price": 10.545454545454545,
            "points_per_game": 1.9,
            "points_per_price_per_minute": 0.006657483930211203,
            "points_per_price_per_game": 0.34545454545454546,
            "status": "Available",
            "takes_corners": false,
            "takes_freekicks": false,
            "takes_penalties": false,
            "form": 0.0,
            "ict_index": 91.0
        },
        {
            "id": 55,
            "full_name": "Pascal Groß",
            "web_name": "Groß",
            "position": "MID",
            "team": "Brighton",
            "short_name": "BHA",
            "price": 6.0,
            "total_points": 116,
            "minutes": 2479,
            "points_per_minute": 0.04679306171843485,
            "points_per_price": 19.333333333333332,
            "points_per_game": 3.4,
            "points_per_price_per_minute": 0.007798843619739142,
            "points_per_price_per_game": 0.5666666666666667,
            "status": "Available",
            "takes_corners": true,
            "takes_freekicks": true,
            "takes_penalties": true,
            "form": 0.0,
            "ict_index": 212.3
        },
        {
            "id": 57,
            "full_name": "Davy Pröpper",
            "web_name": "Pröpper",
            "position": "MID",
            "team": "Brighton",
            "short_name": "BHA",
            "price": 4.5,
            "total_points": 9,
            "minutes": 209,
            "points_per_minute": 0.0430622009569378,
            "points_per_price": 2.0,
            "points_per_game": 1.3,
            "points_per_price_per_minute": 0.009569377990430622,
            "points_per_price_per_game": 0.2888888888888889,
            "status": "Unavailable",
            "takes_corners": false,
            "takes_freekicks": false,
            "takes_penalties": false,
            "form": 0.0,
            "ict_index": 8.2
        },
        {
            "id": 58,
            "full_name": "Dan Burn",
            "web_name": "Burn",
            "position": "DEF",
            "team": "Brighton",
            "short_name": "BHA",
            "price": 4.5,
            "total_points": 64,
            "minutes": 2057,
            "points_per_minute": 0.031113271754982984,
            "points_per_price": 14.222222222222221,
            "points_per_game": 2.4,
            "points_per_price_per_minute": 0.006914060389996218,
            "points_per_price_per_game": 0.5333333333333333,
            "status": "Available",
            "takes_corners": false,
            "takes_freekicks": false,
            "takes_penalties": false,
            "form": 0.0,
            "ict_index": 78.2
        },
        {
            "id": 59,
            "full_name": "Lewis Dunk",
            "web_name": "Dunk",
            "position": "DEF",
            "team": "Brighton",
            "short_name": "BHA",
            "price": 5.0,
            "total_points": 130,
            "minutes": 2932,
            "points_per_minute": 0.04433833560709413,
            "points_per_price": 26.0,
            "points_per_game": 3.9,
            "points_per_price_per_minute": 0.008867667121418827,
            "points_per_price_per_game": 0.78,
            "status": "Available",
            "takes_corners": false,
            "takes_freekicks": false,
            "takes_penalties": false,
            "form": 0.0,
            "ict_index": 130.2
        },
        {
            "id": 60,
            "full_name": "Solomon March",
            "web_name": "March",
            "position": "MID",
            "team": "Brighton",
            "short_name": "BHA",
            "price": 5.5,
            "total_points": 69,
            "minutes": 1670,
            "points_per_minute": 0.04131736526946108,
            "points_per_price": 12.545454545454545,
            "points_per_game": 3.3,
            "points_per_price_per_minute": 0.007512248230811105,
            "points_per_price_per_game": 0.6,
            "status": "Available",
            "takes_corners": false,
            "takes_freekicks": false,
            "takes_penalties": false,
            "form": 0.0,
            "ict_index": 110.5
        },
        {
            "id": 61,
            "full_name": "Adam Webster",
            "web_name": "Webster",
            "position": "DEF",
            "team": "Brighton",
            "short_name": "BHA",
            "price": 4.5,
            "total_points": 85,
            "minutes": 2594,
            "points_per_minute": 0.03276792598303778,
            "points_per_price": 18.88888888888889,
            "points_per_game": 2.9,
            "points_per_price_per_minute": 0.007281761329563951,
            "points_per_price_per_game": 0.6444444444444444,
            "status": "Available",
            "takes_corners": false,
            "takes_freekicks": false,
            "takes_penalties": false,
            "form": 0.0,
            "ict_index": 84.6
        },
        {
            "id": 62,
            "full_name": "Joël Veltman",
            "web_name": "Veltman",
            "position": "DEF",
            "team": "Brighton",
            "short_name": "BHA",
            "price": 4.5,
            "total_points": 96,
            "minutes": 2280,
            "points_per_minute": 0.042105263157894736,
            "points_per_price": 21.333333333333332,
            "points_per_game": 3.4,
            "points_per_price_per_minute": 0.00935672514619883,
            "points_per_price_per_game": 0.7555555555555555,
            "status": "Available",
            "takes_corners": false,
            "takes_freekicks": false,
            "takes_penalties": false,
            "form": 0.0,
            "ict_index": 102.1
        },
        {
            "id": 63,
            "full_name": "Neal Maupay",
            "web_name": "Maupay",
            "position": "FWD",
            "team": "Brighton",
            "short_name": "BHA",
            "price": 6.5,
            "total_points": 105,
            "minutes": 2508,
            "points_per_minute": 0.041866028708133975,
            "points_per_price": 16.153846153846153,
            "points_per_game": 3.2,
            "points_per_price_per_minute": 0.006440927493559072,
            "points_per_price_per_game": 0.49230769230769234,
            "status": "Available",
            "takes_corners": false,
            "takes_freekicks": false,
            "takes_penalties": false,
            "form": 0.0,
            "ict_index": 198.5
        },
    ]

    const [playerData, setPlayerData] = useState(rawData);
    const [playerData2, setPlayerData2] = useState(rawData);

    const [fixData, setFixData] = useState(rawFixData);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/app/players')
        .then(res => res.json())
        .then(data => {
            setPlayerData(data);
            setPlayerData2(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []); 

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/app/fixtures')
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