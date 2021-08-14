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
        },
    };

    return (
        <Modal 
            isOpen={props.isOpen}
            style={customStyles}
            onRequestClose={props.onRequestClose}
        >
            <Player name={props.player ? props.player.full_name : "Not found"} web_name={props.player ? props.player.web_name : "Not found"} price={props.player ? props.player.price : "Not found"} total_points={props.player ? props.player.total_points : "Not found"} team={props.player ? props.player.team : "Not found"} short_name={props.player ? props.player.short_name : "MUN"}
                minutes={props.player ? props.player.minutes : "Not found"} points_per_game={props.player ? props.player.points_per_game : "Not found"} points_per_price={props.player ? props.player.points_per_price : "Not found"}
                points_per_price_per_game={props.player ? props.player.points_per_price_per_game : "Not found"} nextFiveFix={nextFiveGames(props.fixData, props.player ? props.player.short_name : "MUN")}/>
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