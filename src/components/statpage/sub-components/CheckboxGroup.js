import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

function CheckBoxGroup( props ) {

    
    //For the checkboxes
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });

    const handleChangeA = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.sendDataToParent(props.prefIndex[0], event.target.checked);
    };

    const handleChangeB = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.sendDataToParent(props.prefIndex[1], event.target.checked);
    };

    const handleChangeF = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.sendDataToParent(props.prefIndex[2], event.target.checked);
    };

    const handleChangeG = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.sendDataToParent(props.prefIndex[3], event.target.checked);
    };

    return (
        <div id="stats-checkbox-container">
            <div className="checkbox-label-container">
                <p className="checkbox-label">GKP</p>
                <GreenCheckbox checked={state.checkedA} onChange={handleChangeA} name="checkedA" id="GKP-CB" />
            </div>
            <div className="checkbox-label-container">
                <p className="checkbox-label">DEF</p>
                <GreenCheckbox checked={state.checkedB} onChange={handleChangeB} name="checkedB" id="DEF-CB" />
            </div>
            <div className="checkbox-label-container">
                <p className="checkbox-label">MID</p>
                <GreenCheckbox checked={state.checkedF} onChange={handleChangeF} name="checkedF" id="MID-CB" /> 
            </div>
            <div className="checkbox-label-container">
                <p className="checkbox-label">FWD</p>
                <GreenCheckbox checked={state.checkedG} onChange={handleChangeG} name="checkedG" id="FWD-CB" />
            </div>               
        </div>
    )
}

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      padding: '6px',
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

export default CheckBoxGroup;