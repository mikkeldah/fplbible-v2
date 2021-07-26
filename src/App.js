import React from 'react';
import { 
    BrowserRouter as Router,
    Switch, 
    Route, 
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from './components/header-and-menu/Header';
import DropInMenu from './components/header-and-menu/DropInMenu';
import Counter from './components/header-and-menu/Counter';
import Home from './components/homepage/Home';
import Statsboard from './components/statpage/Statsboard';
import Recommender from './components/recommender-page/Recommender';
import Players from './components/players-page/Players';
import CaptainPicks from './components/captain-picks-page/CaptainPicks';
import Contact from './components/contact-page/Contact';

function App() {

    const [ dropInMenuHidden, setDropInMenuVisibility ] = useState(true);
    const [ page, setPage ] = useState('Home')

    /* Hides the drop in menu when a link or the rest of the page are clicked */
    function hideMenuOnClick() {
        const menu = document.getElementById('menu');
        const shadowDiv = document.getElementById('shadow-div');

        let opacity = document.getElementById("bar2");
        opacity.style.opacity = 1;

        let rotateRight = document.getElementById("bar1");
        rotateRight.style.transform = "translateY(0) rotate(0)";

        let rotateLeft = document.getElementById("bar3");
        rotateLeft.style.transform = "translateY(0) rotate(0)";

        menu.style.transform = "translateX(-251px)";
        shadowDiv.style.display = "none";

        setDropInMenuVisibility(true);

    }

    const handlePageSwitch = (newPage) => {
        setPage(newPage);
    }

    //Delete before deployment
    const rawGameweekData = [
        {
            "id": 1,
            "deadline_time": "2021-08-13T17:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": true
        },
        {
            "id": 2,
            "deadline_time": "2021-08-21T10:00:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 3,
            "deadline_time": "2021-08-28T10:00:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 4,
            "deadline_time": "2021-09-11T10:00:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 5,
            "deadline_time": "2021-09-17T17:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 6,
            "deadline_time": "2021-09-25T10:00:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 7,
            "deadline_time": "2021-10-02T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 8,
            "deadline_time": "2021-10-16T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 9,
            "deadline_time": "2021-10-23T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 10,
            "deadline_time": "2021-10-30T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 11,
            "deadline_time": "2021-11-06T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 12,
            "deadline_time": "2021-11-20T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 13,
            "deadline_time": "2021-11-27T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 14,
            "deadline_time": "2021-11-30T18:15:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 15,
            "deadline_time": "2021-12-04T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 16,
            "deadline_time": "2021-12-11T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 17,
            "deadline_time": "2021-12-14T18:15:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 18,
            "deadline_time": "2021-12-18T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 19,
            "deadline_time": "2021-12-26T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 20,
            "deadline_time": "2021-12-28T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 21,
            "deadline_time": "2022-01-01T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 22,
            "deadline_time": "2022-01-15T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 23,
            "deadline_time": "2022-01-22T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 24,
            "deadline_time": "2022-02-08T18:15:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 25,
            "deadline_time": "2022-02-12T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 26,
            "deadline_time": "2022-02-19T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 27,
            "deadline_time": "2022-02-26T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 28,
            "deadline_time": "2022-03-05T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 29,
            "deadline_time": "2022-03-12T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 30,
            "deadline_time": "2022-03-19T13:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 31,
            "deadline_time": "2022-04-02T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 32,
            "deadline_time": "2022-04-09T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 33,
            "deadline_time": "2022-04-16T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 34,
            "deadline_time": "2022-04-23T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 35,
            "deadline_time": "2022-04-30T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 36,
            "deadline_time": "2022-05-07T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 37,
            "deadline_time": "2022-05-15T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        },
        {
            "id": 38,
            "deadline_time": "2022-05-22T12:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": false
        }
    ]
    
    // //Gameweek data handling
    const [ gameweekData, setGameweekData ] = useState(rawGameweekData)
    
    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/api/app/gameweeks')
    //     .then(res => res.json())
    //     .then(data => {
    //         setGameweekData(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }, []); 

    return (
        <React.Fragment>
            <Router>
                <Header page={page} dropInMenuHidden={dropInMenuHidden} dropInMenuVisibilityChange={(newVisibilty) => setDropInMenuVisibility(newVisibilty) }/>
                <DropInMenu hidden={dropInMenuHidden} dropInMenuVisibilityChange={(newVisibilty) => setDropInMenuVisibility(newVisibilty) }/>
                <Counter gameweek={getCurrentGameweek(gameweekData)}/>
                <Switch>
                    <Route exact path="/">
                        <Home handlePageSwitch={handlePageSwitch}/>
                        <div id="shadow-div" onClick={hideMenuOnClick}></div>
                    </Route> 
                    <Route exact path="/recommender">
                        <Recommender handlePageSwitch={handlePageSwitch} gameweek={getCurrentGameweek(gameweekData)}/>
                        <div id="shadow-div" onClick={hideMenuOnClick}></div>
                    </Route>
                    <Route exact path="/plot-builder">
                        <Statsboard handlePageSwitch={handlePageSwitch}/>
                        <div id="shadow-div" onClick={hideMenuOnClick}></div>
                    </Route> 
                    <Route exact path="/captain-picks">
                        <CaptainPicks handlePageSwitch={handlePageSwitch} gameweek={getCurrentGameweek(gameweekData)}/>
                        <div id="shadow-div" onClick={hideMenuOnClick}></div>
                    </Route>
                    <Route exact path="/players">
                        <Players handlePageSwitch={handlePageSwitch}/>
                        <div id="shadow-div" onClick={hideMenuOnClick}></div>
                    </Route>
                    <Route exact path="/contact">
                        <Contact handlePageSwitch={handlePageSwitch}/>
                        <div id="shadow-div" onClick={hideMenuOnClick}></div>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
};

function getCurrentGameweek(gwData) {
    for (const key in gwData) {
        const gameweek = gwData[key]
        if (gameweek.is_next || (gameweek.is_current && !gameweek.finished)) {
            return gameweek;
        }
    }
}

export default App;