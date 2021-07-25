import Modal from 'react-modal';
import Button from '@material-ui/core/Button';

Modal.setAppElement('#root');

function CustomModal( props ) {

    const customStyles = {
        content: {
            width: '300px',
            height: '150px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
    };

    return (
        <Modal 
            isOpen={props.isOpen}
            style={customStyles}
            onRequestClose={props.onRequestClose}
        >
            <p style={{ color: 'red', fontSize:'1.25rem', textAlign: 'center'}}>{props.text}</p>
            <Button variant="contained" color="secondary" onClick={props.onRequestClose}>
                Dismiss
            </Button>
        </Modal>
    )
}

export default CustomModal;