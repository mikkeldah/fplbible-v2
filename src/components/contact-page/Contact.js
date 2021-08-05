import { useEffect } from 'react';
import setTheme from '../../utils/Themes';
import ContactForm from './ContactForm';

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
            <ContactForm/>
        </div>
    )

}

export default Contact;