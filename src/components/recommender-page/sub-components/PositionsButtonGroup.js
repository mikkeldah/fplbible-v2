import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function PositionsButtonGroup( props ) {

    const handleIncrement = () => {
        props.handleIncrement(props.inputValIndex, props.upperLimit)
    }

    const handleDecrement = () => {
        props.handleDecrement(props.inputValIndex)
    }

    return (
        <ButtonGroup size="small">
            <Button onClick={handleIncrement} color="primary">+</Button>
            <Button>{props.count}</Button>
            <Button onClick={handleDecrement} color="primary">-</Button>
        </ButtonGroup>
    )
}

export default PositionsButtonGroup;