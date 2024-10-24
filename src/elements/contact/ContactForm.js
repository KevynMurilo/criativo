import React, { useState } from 'react';

const Result = ({ message }) => {
    return (
        <p className="success-message">{message}</p>
    );
}

function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [resultMessage, setResultMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setResultMessage('');

        const form = e.target;
        const formData = new FormData(form);
        
        fetch('https://formsubmit.co/ajax/luizasimazaki@gmail.com', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
        .then((response) => {
            setLoading(false);
            if (response.ok) {
                setResultMessage('Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.');
                form.reset();

                // Ocultar mensagem após 5 segundos
                setTimeout(() => {
                    setResultMessage('');
                }, 5000);
            } else {
                setResultMessage('Erro ao enviar o formulário. Tente novamente.');
                console.error('Erro ao enviar o formulário');
            }
        })
        .catch((error) => {
            setLoading(false);
            setResultMessage('Erro ao enviar o formulário. Tente novamente mais tarde.');
            console.error('Erro:', error);
        });
    };

    return (
        <form onSubmit={sendEmail}>
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
                <button className="rn-button-style--2 btn-solid" type="submit" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar Agora'}
                </button>
            </div> 

            <div className="rn-form-group">
                {resultMessage && <Result message={resultMessage} />}
            </div> 
        </form>
    );
}

export default ContactForm;
