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

    const [ apiURL, setApiURL ] = useState('https://fplbible.herokuapp.com/api/app/');
    
    const [ backupGameweek, setBackupGameweek ] = useState([
        {
            "id": 1,
            "deadline_time": "2021-08-13T17:30:00Z",
            "finished": false,
            "data_checked": false,
            "is_previous": false,
            "is_current": false,
            "is_next": true
        }])

    //Fetching gameweek data
    const [ gameweekData, setGameweekData ] = useState([])
    
    useEffect(() => {
        fetch(apiURL+'gameweeks')
        .then(res => res.json())
        .then(data => {
            setGameweekData(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []); 

    return (
        <React.Fragment>
            <Router>
                <Header page={page} dropInMenuHidden={dropInMenuHidden} dropInMenuVisibilityChange={(newVisibilty) => setDropInMenuVisibility(newVisibilty) }/>
                <DropInMenu hidden={dropInMenuHidden} dropInMenuVisibilityChange={(newVisibilty) => setDropInMenuVisibility(newVisibilty) }/>
                <Counter gameweek={gameweekData.length > 0 ? getCurrentGameweek(gameweekData) : backupGameweek}/>
                <Switch>
                    <Route exact path="/">
                        <Home handlePageSwitch={handlePageSwitch}/>
                        <div id="shadow-div" onClick={hideMenuOnClick}></div>
                    </Route> 
                    <Route exact path="/recommender">
                        <Recommender 
                            handlePageSwitch={handlePageSwitch} 
                            gameweek={gameweekData.length > 0 ? getCurrentGameweek(gameweekData) : backupGameweek}
                            apiURL={apiURL}
                        />
                        <div id="shadow-div" onClick={hideMenuOnClick}></div>
                    </Route>
                    <Route exact path="/plot-builder">
                        <Statsboard 
                            handlePageSwitch={handlePageSwitch}
                            apiURL={apiURL}
                        />
                        <div id="shadow-div" onClick={hideMenuOnClick}></div>
                    </Route> 
                    <Route exact path="/captain-picks">
                        <CaptainPicks 
                            handlePageSwitch={handlePageSwitch} 
                            gameweek={gameweekData.length > 0 ? getCurrentGameweek(gameweekData) : backupGameweek}
                            apiURL={apiURL}
                        />
                        <div id="shadow-div" onClick={hideMenuOnClick}></div>
                    </Route>
                    <Route exact path="/players">
                        <Players 
                            handlePageSwitch={handlePageSwitch}
                            apiURL={apiURL}
                        />
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