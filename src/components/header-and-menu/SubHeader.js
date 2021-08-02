import { useEffect, useState } from 'react';
import Counter from './Counter';
import DoubleGameweekWatch from './DoubleGameweekWatch';
import TeamsToWatch from './TeamsToWatch';



function SubHeader( props ) {
    
    const [ fixtureData, setFixtureData ] = useState([]);

    useEffect(() => {
        fetch(props.apiURL+'fixtures')
        .then(res => res.json())
        .then(data => {
            setFixtureData(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <div id="container-as-big-as-header">

            </div>
            <div id="subheader-main">
                <Counter gameweek={props.gameweek} />
                <TeamsToWatch fixtureData={fixtureData} gameweek={props.gameweek}/>
                <DoubleGameweekWatch fixtureData={fixtureData} gameweek={props.gameweek}/>
            </div>
        </div>
    )
}

window.onresize = function R() {

    const td = document.getElementById('subheader-item-transferdeadline');
    const ttw = document.getElementById('subheader-item-teamstowatch');
    const dgw = document.getElementById('subheader-item-double-gw');

    if (window.innerWidth > 801) {

        td.style.width = "32.5%";
        td.style.height = "95%";
        td.style.opacity = "1";
        td.style.visibility = "visible";

        ttw.style.width = "32.5%";
        ttw.style.height = "95%";
        ttw.style.opacity = "1";
        ttw.style.visibility = "visible";

        dgw.style.width = "32.5%";
        dgw.style.height = "95%";
        dgw.style.opacity = "1";
        dgw.style.visibility = "visible";
       
    }

    else {
        td.style.width = "100%";
        td.style.height = "100%";
        td.style.opacity = "1";
        td.style.visibility = "visible";

        ttw.style.width = "0";
        ttw.style.opacity = "0";
        ttw.style.visibility = "hidden";

        dgw.style.width = "0";
        dgw.style.opacity = "0";
        dgw.style.visibility = "hidden";        
    }
}


export default SubHeader;

