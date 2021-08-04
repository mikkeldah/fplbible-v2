import { useEffect } from 'react';
import setTheme from '../../utils/Themes';

function Contact( props ) {

    //set theme to purple when rendering the players page
    useEffect(() => {
        setTheme('#38003c', '#530553');
    }, [])

    useEffect(() => {
        props.handlePageSwitch('Contact');
        document.title = "The FPL Bible | Contact";
    })

    return (
        <div id="contact-main">
            <p style={{textAlign: 'center'}}>For inquiries send an email to admin@fplbible.com</p>
        </div>
    )
}

export default Contact;