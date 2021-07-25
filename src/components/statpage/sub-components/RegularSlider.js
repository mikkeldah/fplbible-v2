import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

function RegularSlider( props ) {

  const [ value, setValue ] = useState(props.initialState);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.sendDataToParent(props.prefIndex, value);
  }

  return (
      <PrettoSlider 
        valueLabelDisplay="auto" 
        aria-label="pretto slider" 
        defaultValue={props.initialState}
        min={props.min} max={props.max}  
        step={props.step}
        onChange={handleChange}
      />
  )
}

const PrettoSlider = withStyles({
    root: {
      color: '#66bb6a',
      height: 8,
      width: 200
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

export default RegularSlider;