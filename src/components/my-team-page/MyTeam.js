import { useState, useEffect } from 'react';
import setTheme from '../../utils/Themes';

function MyTeam( props ) {

    //set theme to purple when rendering the players page
    useEffect(() => {
        setTheme('#38003c', '#530553');
    }, [])

    useEffect(() => {
        props.handlePageSwitch('My Team');
        document.title = "The FPL Bible | My Team";
    })

    return (
        <h1>My Team Page</h1>
    );
}

export default MyTeam;