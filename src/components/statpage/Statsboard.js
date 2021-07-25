import { useState, useEffect } from 'react';
import setTheme from "../../utils/Themes";
import OptionsContainer from "./sub-components/OptionsContainer";
import PlotContainer from './sub-components/PlotContainer';

function Statsboard( props ) {

    //Set theme to black when rendering the Statboard
    useEffect(() => {
        setTheme('black', '#272727');
    });

    useEffect(() => {
        props.handlePageSwitch('Plot Builder');
    })

    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/app/players')
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []); 

    const [ preferences, setPreferences ] = useState([]); 

    return (
        <div id="statsboard">
            <div id="statsboard-options-title" >
                <p id="options-button" onClick={showOrHideMenu}>+Options</p>
            </div>
            <OptionsContainer prefChange={(pref) => setPreferences(pref)}/>
            <PlotContainer data={data} preferences={preferences}/>
        </div>
    )
};

let optionsClicked = false;

function showOrHideMenu() {
    const dropDownMenu = document.getElementById('statsboard-options-container');
    const optionsButton = document.getElementById('options-button');

    if (!optionsClicked) {
        dropDownMenu.style.display = 'flex';
        optionsButton.innerHTML = 'Close';

    } 
    else {
        dropDownMenu.style.display = 'none';
        optionsButton.innerHTML = '+Options';
    }
    optionsClicked = !optionsClicked;
}


export default Statsboard;