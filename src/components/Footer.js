// import React from 'react';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function Footer() {
    return (
        <div class="footer" id="footer">
            <a href="tel:999-999-9999">&#9743</a>
            <a href="mailto:contact@NutriRite.com">&#9993</a>
            <p>NutriRite is dedicated to your health by helping you craft fresh, healthy meals at home or delivered directly to your door. Systematizing your diet is the key to eating healthy. These meal plans are designed with your goals in mind.</p>
            <p>
                {/* &copy; NutriRite | <a href="https://github.com/brianthoang/Project-3-Nutririte" class="link">NutriRite Repo</a> | <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">color palette</a>  |  designed with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/> */}
            </p>
        </div>
    )
};

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid =validateEmail(e.target.value);

                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                };
        };

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
            };
    };

   

    function handleSubmit(e) {
        e.preventDefault();
    };
    
    return (
        <section class="justify-content-center" id="contact-section">
            <h1 data-testid='h1tag' className="contact">Contact: NutriRite</h1>
            <hr></hr>
            <form class="justify-content-center" id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input class="form-control" type="text" name ="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input class="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} rows="7" />
                </div>
                <div>
                    <label htmlFor="messsage">Message:</label>
                    <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} row="7" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div>
                    <button data-testid='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </section>
    );
};
export default Footer;