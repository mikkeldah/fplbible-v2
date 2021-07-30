import Countdown from 'react-countdown';
import NextItemContainer from './NextItemContainer';

function Counter( props ) {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <span>EXPIRED</span>;
        } else {
          // Render a countdown
          return <span>{days}d : {hours}h : {minutes}m : {seconds}s</span>;
        }
      };

    const handleNextItem = () => {
      const subHeader = document.getElementById('subheader-main');
      subHeader.style.transform = 'translateX(-33.333333333333%)';
    }
      

    return (
        <div id="subheader-item-transferdeadline" className="subheader-item">
            <NextItemContainer display="none"/>
            <div id="transfer-deadline-container">
              <h4 style={{textAlign: 'center'}}>GW{props.gameweek ? props.gameweek.id : ""} Transfer Deadline</h4>
              <Countdown 
                  date={new Date(props.gameweek ? props.gameweek.deadline_time : "")}
                  renderer={renderer}    
              />
            </div>
            <NextItemContainer display="block" rotation="-90" handleNextItem={handleNextItem}/>
        </div>
    )
}
export default Counter;