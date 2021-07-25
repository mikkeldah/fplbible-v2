import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';


function Selector( props ) {

    const classes = useStyles();
    const [state, setState] = useState(props.initialState);

    const handleChange = (event) => {
        setState(event.target.value);
        props.sendDataToParent(props.prefIndex, event.target.value);
    }
    
    return (
        <FormControl className={classes.formControl} autoWidth={true}>
            <Select
                className={classes.selectItem}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state}
                onChange={handleChange}
                classes={{icon:classes.icon}}
                MenuProps={{
                    PaperProps: {
                        style: {
                            width: 220,
                        },
                    }
                  }}
                >
                {props.values.map((value) => {
                    return (
                        <MenuItem value={value} className={classes.menuItem}>{value}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
    
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: 200,
        backgroundColor: 'white',
        display: "flex",
        justifyContent: "center",
    },
    selectItem:{
        paddingLeft: "5px",
        fontSize: "14px",
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    menuItem: {
        fontSize: "14px",
        paddingLeft: "5px",
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        textAlign: "center",
    },
    icon: {
        marginLeft: 170,
    }

  }));

export default Selector;