import { useEffect, useState } from "react";
import PositionsButtonGroup from "./PositionsButtonGroup";
import NotIncludeTeamsList from "./NotIncludeTeamsList";
import Button from '@material-ui/core/Button';
import NumberInputField from './NumberInputField';

function RecommenderInput( props ) {

    //inputValue = [Bank, nGKP, nDEF, nMID, nFWD, [...teamsNotToInclude]]
    const [inputValues, setInputValues] = useState([0, 0, 0, 0, 0, []])

    const sendDataToParent = (inputValIndex, newValue) => {
        let newInputValues = [...inputValues];
        newInputValues[inputValIndex] = newValue;
        setInputValues(newInputValues);
    }

    useEffect(() => {
        props.sendDataToParent(inputValues);
    }, [inputValues])

    return (
        <div id="recommender-input-container">
            <div id="recommender-input-bank" className="rec-small-input-container">
                <h4>Total amount in bank after all sales</h4>
                <NumberInputField 
                    sendDataToParent={sendDataToParent}
                    inputValIndex={0}
                />
            </div>
            <div id="recommender-input-positions" className="rec-small-input-container">
                <h4>Number of players in each position needing replacement</h4>
                <div className="rec-position-button-container">
                    <p>Goalkeepers</p>
                    <PositionsButtonGroup 
                        sendDataToParent={sendDataToParent}
                        inputValIndex={1}
                        upperLimit={2}
                    />
                </div>
                <div className="rec-position-button-container">
                    <p>Defenders</p>
                    <PositionsButtonGroup 
                        sendDataToParent={sendDataToParent}
                        inputValIndex={2}
                        upperLimit={5}
                    />
                </div>
                <div className="rec-position-button-container">
                    <p>Midfielders</p>
                    <PositionsButtonGroup 
                        sendDataToParent={sendDataToParent}
                        inputValIndex={3}
                        upperLimit={5}
                    />
                </div>
                <div className="rec-position-button-container">
                    <p>Forwards</p>
                    <PositionsButtonGroup 
                        sendDataToParent={sendDataToParent}
                        inputValIndex={4}
                        upperLimit={3}
                    />
                    
                </div>
            </div>
            <div id="recommender-input-teams" className="rec-small-input-container">
                <div id="recommender-input-teams-labels-container">
                    <h4>Included teams</h4>
                    <h4>Not included teams</h4>
                </div>
                <NotIncludeTeamsList 
                    sendDataToParent={sendDataToParent}
                    inputValIndex={5}
                />
            </div>
            <div id="recommender-button-container" className="rec-small-input-container">
                <Button variant="contained" color="primary" onClick={props.searchButtonClicked}>
                    Search
                </Button>
            </div>
        </div>
    )
}

export default RecommenderInput;