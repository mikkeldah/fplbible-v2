import { useEffect, useState } from 'react';
import RadioButtonGroup from './RadioButtonGroup';
import CheckboxGroup from './CheckboxGroup';
import RegularSlider from './RegularSlider';
import Selector from './Selector';

function OptionsContainer( props ) {

    const defaultPreferences = ['Total points', 'Points per Game', true, true, true, true, 0, [3.5, 14.0], 'All teams', 'Available', 'Always']
    const [ preferences, setPreferences ] = useState(defaultPreferences);

    const sendDataToParent = (prefIndex, newValue) => {
        let newPref = [...preferences]
        newPref[prefIndex] = newValue;
        setPreferences(newPref);
    }

    useEffect(() => {
        props.prefChange(preferences);
    }, [preferences]);

    return (
        <div id="statsboard-options-container">
                {/* X-AXIS OPTIONS */}
                <div className="stats-option-box">
                    <h4>Horisontal axis</h4>
                    <Selector 
                        sendDataToParent={sendDataToParent}
                        prefIndex={0}
                        values={['Total points', 'Price', 'Total minutes']}
                        initialState={'Total points'}
                    />
                </div>
                {/* Y-AXIS OPTIONS */}
                <div className="stats-option-box">
                    <h4>Vertical axis</h4>
                    <Selector 
                        sendDataToParent={sendDataToParent}
                        prefIndex={1}
                        values={['Points per Game', 'Points per Price', 'Points per Price per Game']}
                        initialState={'Points per Game'}
                    />
                </div>
                {/* POSITIONS OPTIONS */}
                <div className="stats-option-box" id="statsboard-options-positions">
                    <h4>Select positions</h4>
                    <CheckboxGroup 
                        sendDataToParent={sendDataToParent}
                        prefIndex={[2, 3, 4, 5]}
                    />
                </div>
                {/* MINUTES OPTIONS */}
                <div className="stats-option-box" id="statsboard-options-minutes">
                   <h4>Min. minutes played</h4>
                    <RegularSlider 
                        sendDataToParent={sendDataToParent}
                        prefIndex={6}  
                        initialState={0}
                        min={0} max={3000}
                        step={10} 
                    />  
                </div>
                {/* MAX PRICE */}
                <div className="stats-option-box" id="statsboard-options-minutes" >
                    <h4>Price range</h4>
                    <RegularSlider 
                        sendDataToParent={sendDataToParent}
                        prefIndex={7}  
                        initialState={[3.5, 14.0]}
                        min={3.5} max={14.0} 
                        step={0.1}
                    />  
                </div>
                {/* TEAMS OPTIONS */}
                <div className="stats-option-box" id="statsboard-options-teams">
                    <h4>Select team</h4>
                    <Selector 
                        sendDataToParent={sendDataToParent}
                        prefIndex={8}
                        values={['All teams', 'Arsenal', 'Aston Villa', 'Brentford', 'Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Leeds',
                                'Leicester', 'Liverpool', 'Man City', 'Man Utd', 'Newcastle', 'Norwich', 'Southampton', 'Spurs', 'Watford', 'West Ham', 'Wolves']}
                        initialState={'All teams'}
                    />
                </div>
                {/* AVAILABILITY */}
                <div className="stats-option-box" id="statsboard-options-teams">
                    <h4>Player availability</h4>
                    <RadioButtonGroup 
                        sendDataToParent={sendDataToParent}
                        value1="Available" 
                        value2="All" 
                        name="radio-availability"
                        prefIndex={9}
                    />
                </div> 
                {/* SHOW NAMES */}
                <div className="stats-option-box" id="statsboard-options-teams">
                    <h4>Show names</h4>
                    <RadioButtonGroup 
                        sendDataToParent={sendDataToParent}
                        value1="Always" 
                        value2="On hover" 
                        name="radio-show"
                        prefIndex={10}    
                    />
                </div>  
            </div>
    )
}


export default OptionsContainer;