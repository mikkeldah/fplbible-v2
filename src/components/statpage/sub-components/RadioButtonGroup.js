import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

function RadioButtonGroup(props) {

      //For the show name radio buttons
      const [selectedValue, setSelectedValue] = useState(props.value1);

      const handleChange = (event) => {
          setSelectedValue(event.target.value);
          props.sendDataToParent(props.prefIndex, event.target.value);

      };
  
    return (
        <div className="radio-buttons">
            <div className="radio-button-group">
                <p>{props.value1}</p>
                    <GreenRadio 
                        checked={selectedValue === props.value1}
                        onChange={handleChange}
                        value={props.value1}
                        name={props.name}
                    />
            </div>
            <div className="radio-button-group" id="radio-margin-left">
                <p>{props.value2}</p>
                    <GreenRadio
                        checked={selectedValue === props.value2}
                        onChange={handleChange}
                        value={props.value2}
                        name={props.name}
                    />
            </div>
        </div>
    )
}

const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  export default RadioButtonGroup;