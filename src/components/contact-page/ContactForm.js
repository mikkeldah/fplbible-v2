import { useForm, ValidationError } from '@formspree/react';

function ContactForm( props ) {

    const [ state, handleSubmit ] = useForm("mwkarwbl");

    const formSubmitted = () => {
        handleSubmit();
    }

    return (
        <div id="contact-form-container">
            <form onSubmit={formSubmitted} action="https://formspree.io/f/mwkarwbl" method="POST">
                <label htmlFor="name">Name</label>
                <input className="contact-form-text" type="text" name="name"  placeholder="Enter your name"></input>

                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
                <label htmlFor="email">Email</label>
                <input className="contact-form-text" type="email" name="email" placeholder="Enter your email address"></input>
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <label>Message</label>
                <textarea className="contact-form-textarea" name="message" rows="4" placeholder="Enter your message"/>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <input id="contact-form-button" type="submit"/>
            </form>
        </div>
    )
}

export default ContactForm;