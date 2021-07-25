import { useEffect } from 'react';
import setTheme from '../../utils/Themes';

function Contact( props ) {

    //set theme to purple when rendering the players page
    useEffect(() => {
        setTheme('#38003c', '#530553');
    }, [])

    useEffect(() => {
        props.handlePageSwitch('Contact');
    })

    return (
        <h1>Contact</h1>
    )
}

export default Contact;