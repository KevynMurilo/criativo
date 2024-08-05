import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.</p>
    );
}

function ContactForm() {
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_p4x3hv8',
                'template_jgfr42f',
                e.target,
                'user_jrfTH2e0Ely35ZCVFdT9S'
            )
            .then((result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showResult(true);
    };

    setTimeout(() => {
        showResult(false);
    }, 5000);

    return (
        <form action="" onSubmit={sendEmail}>
            <div className="rn-form-group">
                <input 
                    type="text"
                    name="fullname"
                    placeholder="Seu Nome"
                    required
                />
            </div>

            <div className="rn-form-group">
                <input 
                    type="email"
                    name="email"
                    placeholder="Seu E-mail"
                    required
                />
            </div>

            <div className="rn-form-group">
                <input 
                    type="text"
                    name="phone"
                    placeholder="Seu Telefone"
                    required
                />
            </div>

            <div className="rn-form-group">
                <input 
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                    required
                />
            </div>
            
            <div className="rn-form-group">
                <textarea 
                    name="message"
                    placeholder="Sua Mensagem"
                    required
                />
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Enviar Agora</button>
            </div> 

            <div className="rn-form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    );
}

export default ContactForm;
