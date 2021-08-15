import React from 'react';
import { 
    BrowserRouter as BRouter,
    Switch, 
    Route, 
} from "react-router-dom"; 
import { useEffect, useState } from 'react';
import Header from './components/header-and-menu/Header';
import DropInMenu from './components/header-and-menu/DropInMenu';
import SubHeader from './components/header-and-menu/SubHeader';
import PageTitleAndDesc from './components/header-and-menu/PageTitleAndDesc';
import Home from './components/homepage/Home';
import Statsboard from './components/statpage/Statsboard';
import Recommender from './components/recommender-page/Recommender';
import Players from './components/players-page/Players';
import CaptainPicks from './components/captain-picks-page/CaptainPicks';
import Contact from './components/contact-page/Contact';

function App() {

    useEffect(() => {
        const script1 = document.createElement('script');
        script1.async = true; 
        script1.src = "https://www.googletagmanager.com/gtag/js?id=G-FHM7FVGK44";

        const script2 = document.createElement('script');
        script2.text = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', 'G-FHM7FVGK44');";

        document.body.appendChild(script1);
        document.body.appendChild(script2);
    }, [])

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


    const [ dropInMenuHidden, setDropInMenuVisibility ] = useState(true);

    const [ page, setPage ] = useState('Home')

    const descriptions = {
        'Home': 'The FPL Bible is created to help you optimise your Fantasy Premier League team. Get started by selecting one of the features below.',
        'Recommender': "This recommender are created with the goal of finding the optimal group of players to fill the empty slots of your team."+
                       " The algorithm used rank the players based on availability, stats, performance and the difficulty of upcoming fixtures. Recommendations for GW1 are based on stats from the 20/21 season.",
        'Plot Builder': "If you find your plot clustered and difficult to read, try to filter out players by, for example, increasing minimum minutes played or narrow down the price range."+
                        " This tool are best suited for wider screens (desktop or tablet). Before GW1 the plots are based on data from the 20/21 season.", 
        'Captain Picks': "Wondering who to pick for captaincy before the next gameweek? Selecting the right captain are vital for FPL success. This page will provide you with the best picks before each gameweek."
                        +" The algorithm used rank the players based on availability, stats, performances and the difficulty of the next opponent.",
        'Players': "Get key information about every player in the FPL player database by using the search-field.",
        'Contact': "Got any ideas for new features or improvement of existing ones? Or maybe you've found a bug or something that's not working properly on the site? I would love to hear your input so feel free to fill out the contact form and submit, and I will answer as soon as possible."
    }

    const handlePageSwitch = (newPage) => {
        setPage(newPage);
    }

    const [ apiURL, setApiURL ] = useState('https://www.fplbible.com/api/app/');
    
    const backupGameweek = {
        "id": 2,
        "deadline_time": "2100-08-21T10:00:00Z",
        "finished": false,
        "data_checked": false,
        "is_previous": false,
        "is_current": false,
        "is_next": true
    }
    
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
            <BRouter>
                <Header page={page} dropInMenuHidden={dropInMenuHidden} dropInMenuVisibilityChange={(newVisibilty) => setDropInMenuVisibility(newVisibilty) }/>
                <DropInMenu hidden={dropInMenuHidden} dropInMenuVisibilityChange={(newVisibilty) => setDropInMenuVisibility(newVisibilty) }/>
                <SubHeader gameweek={gameweekData.length > 0 ? getCurrentGameweek(gameweekData) : backupGameweek} apiURL={apiURL}/>
                <PageTitleAndDesc page={page} description={descriptions[page]}/>
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
            </BRouter>
        </React.Fragment>
    )
};

function getCurrentGameweek(gwData) {
    for (const key in gwData) {
        const gameweek = gwData[key]
        if (gameweek.is_next) {
            return gameweek;
        }
    }
}

export default App;