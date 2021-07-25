import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

function NumberInputField( props ) {

    const [ textFieldValue, setTextFieldValue ] = useState(0);

    const handleChange = ( event ) => {
        setTextFieldValue(event.target.value);
        props.sendDataToParent(props.inputValIndex, parseFloat(event.target.value));
    }

    return (
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
            onChange={handleChange}
            value={textFieldValue}
        />
    )
}

export default NumberInputField;