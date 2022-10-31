import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Contact from '../../assets/Contact-page.jpg';

const ContactForm = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`);
                } else {
                    setErrorMessage('');
                }
                // console.log('errorMessage', errorMessage);
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div>
        <Box
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
        >
            <div className="contact-form">
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Name"
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="E-mail"
                />
            </div>

            <div className="contact-message">
                <TextField
                    required
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                />
            </div>
            <div className="order-submit">
            <Button onClick="submit">Leave A Message!</Button>
            </div>
            {/* <h1 data-testid="h1tag">Contact Us</h1>
            <form id="contact-form" className="contact-form"onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                {/* </div> */}
            {/* {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                </div>
                <button type="submit">Submit</button>
            </form> */}
        </Box>
        <img src={Contact} width="650px" height="300px" className="order-image" alt="chocolate"></img>
        </div>
    )
}

export default ContactForm;