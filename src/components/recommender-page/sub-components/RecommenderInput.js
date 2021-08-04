import { useEffect, useState } from "react";
import PositionsButtonGroup from "./PositionsButtonGroup";
import NotIncludeTeamsList from "./NotIncludeTeamsList";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { green, red} from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

function RecommenderInput( props ) {

    //inputValue = [Bank, nGKP, nDEF, nMID, nFWD, [...teamsNotToInclude]]
    const [inputValues, setInputValues] = useState([0, 0, 0, 0, 0, []])

    //Input field chang
    const inputFieldChange = (event) => {
        let newInputValues = [...inputValues];
        newInputValues[0] = event.target.value;
        setInputValues(newInputValues);
    }

    //Number of players buttons
    const handleIncrement = (index, upperLimit) => {
        if (inputValues[index] < upperLimit) {
            let newInputValues = [...inputValues]
            newInputValues[index] = newInputValues[index] + 1;
            setInputValues(newInputValues);
        }
    }

    const handleDecrement = (index) => {
        if (inputValues[index] > 0) {
            let newInputValues = [...inputValues]
            newInputValues[index] = newInputValues[index] - 1;
            setInputValues(newInputValues);
        }
    }

    //Included teams
    const [includedTeams, setIncludedTeams ] = useState(['Arsenal', 'Aston Villa', 'Brentford', 'Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Leeds',
    'Leicester', 'Liverpool', 'Man City', 'Man Utd', 'Newcastle', 'Norwich', 'Southampton', 'Spurs', 'Watford', 'West Ham', 'Wolves'])
    const [notIncludedTeams, setNotIncludedTeams ] = useState([])

    useEffect(() => {
        let newInputValues = [...inputValues];
        newInputValues[5] = notIncludedTeams;
        setInputValues(newInputValues);
    }, [notIncludedTeams])

    function moveTeamToNotIncluded( team ) {
        setIncludedTeams((teams) => teams.filter(t => t !== team))
        setNotIncludedTeams([...notIncludedTeams, team].sort((a, b) => a.localeCompare(b)))
    
    }

    const moveTeamToIncluded = (team) => {
        setNotIncludedTeams((teams) => teams.filter(t => t !== team))
        setIncludedTeams([...includedTeams, team].sort((a, b) => a.localeCompare(b)))
    }

    useEffect(() => {
        props.sendDataToParent(inputValues);
    }, [inputValues])


    const clearButtonClicked = () => {
        setInputValues([0, 0, 0, 0, 0, []])
        setIncludedTeams(['Arsenal', 'Aston Villa', 'Brentford', 'Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Leeds',
        'Leicester', 'Liverpool', 'Man City', 'Man Utd', 'Newcastle', 'Norwich', 'Southampton', 'Spurs', 'Watford', 'West Ham', 'Wolves'])
        setNotIncludedTeams([])
    }

    const fullSquadButtonClicked = () => {
        setInputValues([100, 2, 5, 5, 3, []])
    }

    return (
        <div id="recommender-input-container">
            <div id="recommender-input-bank" className="rec-small-input-container">
                <h4>Total amount in bank after all sales</h4>
                <TextField
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">£</InputAdornment>
                    }}
                    inputProps={{
                        step: "0.1",
                    }}
                    variant="outlined"
                    size="small"
                    onChange={inputFieldChange}
                    value={inputValues[0]}
                />
            </div>
            <div id="recommender-input-positions" className="rec-small-input-container">
                <h4>Number of players in each position needing replacement</h4>
                <div className="rec-position-button-container">
                    <p>Goalkeepers</p>
                    <PositionsButtonGroup 
                        inputValIndex={1}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        upperLimit={2}
                        count={inputValues[1]}
                    />
                </div>
                <div className="rec-position-button-container">
                    <p>Defenders</p>
                    <PositionsButtonGroup 
                        inputValIndex={2}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        upperLimit={5}
                        count={inputValues[2]}
                    />
                </div>
                <div className="rec-position-button-container">
                    <p>Midfielders</p>
                    <PositionsButtonGroup 
                        inputValIndex={3}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        upperLimit={5}
                        count={inputValues[3]}
                    />
                </div>
                <div className="rec-position-button-container">
                    <p>Forwards</p>
                    <PositionsButtonGroup 
                        inputValIndex={4}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        upperLimit={3}
                        count={inputValues[4]}
                    />
                    
                </div>
            </div>
            <div id="recommender-input-teams" className="rec-small-input-container">
                <div id="recommender-input-teams-labels-container">
                    <h4>Included teams</h4>
                    <h4>Not included teams</h4>
                </div>
                <NotIncludeTeamsList 
                    includedTeams={includedTeams}
                    notIncludedTeams={notIncludedTeams}
                    moveTeamToIncluded={moveTeamToIncluded}
                    moveTeamToNotIncluded={moveTeamToNotIncluded}
                    inputValIndex={5}
                />
            </div>
            <div id="recommender-button-container" className="rec-small-input-container">
                <ClearButton size="small" variant="contained" color="primary" onClick={clearButtonClicked}>
                    Clear
                </ClearButton>
                <Button variant="contained" color="primary" onClick={props.searchButtonClicked}>
                    Search
                </Button>
                <FullSquadButton size="small" variant="contained" color="primary" onClick={fullSquadButtonClicked}>
                    Full squad
                </FullSquadButton>
            </div>
        </div>
    )
}

const FullSquadButton = withStyles((theme) => ({
    root: {
        fontSize: "0.7rem",
        width: "80px",
        padding:"1px",
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
  }))(Button);

const ClearButton = withStyles((theme) => ({
    root: {
        fontSize: "0.7rem",
        width: "80px",
        padding:"1px",
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[700],
      '&:hover': {
        backgroundColor: red[900],
      },
    },
  }))(Button);

export default RecommenderInput;