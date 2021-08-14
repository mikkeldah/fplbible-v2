import Modal from 'react-modal';
import Player from '../components/players-page/sub-components/Player';

Modal.setAppElement('#root');

function PlayerModal( props ) {

    const customStyles = {
        content: {
            width: '300px',
            height: '330px',
            backgroundColor: 'rgb(243, 243, 243)',
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
            // border: '1px solid rgb(29, 0, 29)'
        },
    };

    return (
        <Modal 
            isOpen={props.isOpen}
            style={customStyles}
            onRequestClose={props.onRequestClose}
        >
            <Player name={props.player.full_name} web_name={props.player.web_name} price={props.player.price} total_points={props.player.total_points} team={props.player.team} short_name={props.player.short_name}
                minutes={props.player.minutes} points_per_game={props.player.points_per_game} points_per_price={props.player.points_per_price}
                points_per_price_per_game={props.player.points_per_price_per_game} nextFiveFix={nextFiveGames(props.fixData, props.player.short_name)}/>
            <div className="player-modal-x-container">
                <p onClick={props.onRequestClose}>×</p>
            </div>
        </Modal>
    )
}

function nextFiveGames(fixData, teamNameShort) {
    let fixList = []
    for (const fixId in fixData) {
        const fix = fixData[fixId]
        if (!fix['finished'] && ( fix['short_name_h'] === teamNameShort || fix['short_name_a'] === teamNameShort ) ) {
            if ( fix['short_name_h'] === teamNameShort ) {
                fixList.push([fix['gameweek'], fix['short_name_a'], fix['team_h_difficulty'], 'H'])
            }
            if ( fix['short_name_a'] === teamNameShort ) {
                fixList.push([fix['gameweek'], fix['short_name_h'], fix['team_a_difficulty'], 'A'])
            }
            if (fixList.length === 5) {
                return fixList;
            }
        }
    }
    return fixList;
}

export default PlayerModal;