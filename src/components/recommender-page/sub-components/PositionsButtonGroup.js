import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function PositionsButtonGroup( props ) {

    const [ count, setCount ] = useState(0)

    const handleIncrement = () => {
        if ( (count + 1) <= props.upperLimit) {
            setCount(count + 1)
        }
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        props.sendDataToParent(props.inputValIndex, count);
    }, [count])

    return (
        <ButtonGroup size="small">
            <Button onClick={handleIncrement} color="primary">+</Button>
            <Button>{count}</Button>
            <Button onClick={handleDecrement} color="primary">-</Button>
        </ButtonGroup>
    )
}

export default PositionsButtonGroup;