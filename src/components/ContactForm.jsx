import React, { useState } from 'react';

const ContactForm = () => {
    const [hadMessage, setHadMessage] = useState(false);
    const [message, setMessage] = useState([]);
    const [inputMessage, setInputMessage] = useState(''); // Menambahkan state untuk input pesan

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setHadMessage(true);
        setMessage([...message, inputMessage]);
        setInputMessage(''); // Mengosongkan input setelah mengirim
        console.log('Pesan yang dikirim:', inputMessage);
    }

    return (
        <div className='contactform'>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Pesan:<br />
                    <input
                        type="text"
                        value={inputMessage} // Menggunakan inputMessage sebagai value
                        onChange={(e) => setInputMessage(e.target.value)} // Menggunakan setInputMessage
                    />
                </label><br />
                <button type="submit">Kirim</button>
            </form>
            <aside>
                {hadMessage && (
                    <div>
                        <span>Pesan yang telah dikirim:</span>
                        {message.map((msg, index) => (
                            <div key={index}>
                                <span>Pesan ke-{index + 1}:</span>
                                <p>{msg}</p>
                            </div>
                        ))}
                    </div>
                )}
            </aside>
        </div>
    );
}

export default ContactForm;
