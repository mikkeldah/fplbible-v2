import { useEffect, useState } from 'react';
import setTheme from '../../utils/Themes';
import GeneralCaptainPicks from './sub-components/GeneralCaptainPicks';
import CustomizedCaptainPicks from './sub-components/CustomizedCaptainPicks';

function CaptainPicks( props ) {

    //set theme to purple when rendering the players page
    useEffect(() => {
        setTheme('#38003c', '#530553');
    }, [])

    useEffect(() => {
        props.handlePageSwitch('Captain Picks');
    }, [])

    const [ selected, setSelected ] = useState('GENERAL')

    return (
        <div id="captain-picks-main">
            <TabContainer 
                setSelected={(newSelection) => { setSelected(newSelection)}}
                selected={selected}
            />
            {selected === 'GENERAL' && <GeneralCaptainPicks />}
            {selected === 'CUSTOM' && <CustomizedCaptainPicks />}
        </div>
    )
}

function TabContainer( props ) {
    return (
        <div id="captain-picks-tab-container">
            <Tab text={'GENERAL'} setSelected={props.setSelected} color={props.selected === 'GENERAL' ? '#f0f0f0' : '#ccc'}/> 
            <Tab text={'CUSTOM'} setSelected={props.setSelected} color={props.selected === 'CUSTOM' ? '#f0f0f0' : '#ccc'}/> 
        </div>
    )
}

function Tab( props ) {

    const handleClick = () => {
        props.setSelected(props.text)
    }

    return (
        <div className="captain-picks-tab" onClick={handleClick} style={{backgroundColor: props.color}}>
            <h4>{props.text} <span className="hide-when-small-screen">CAPTAIN PICKS</span></h4>
        </div>
    )
}

export default CaptainPicks;