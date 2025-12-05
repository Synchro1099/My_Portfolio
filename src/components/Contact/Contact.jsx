import React, { useState, useRef } from 'react';
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        
         emailjs.sendForm('service_em1z6kn', 'template_cjshpvu', form.current, 'bFrw2BZPiL6alq3jP')

        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
        } else {
            const formDataObj = new FormData(form.current);
            formDataObj.append('service_id', 'service_em1z6kn');
            formDataObj.append('template_id', 'template_30qsoxg');
            formDataObj.append('user_id', 'bFrw2BZPiL6alq3jP');

            try {
                const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
                    method: 'POST',
                    body: formDataObj,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    setDone(true);
                    setNotDone(false);
                    setFormData({ from_name: '', reply_to: '', message: '' });
                } else {
                    setNotDone(true);
                }
            } catch (error) {
                console.error('Error sending email:', error);
                setNotDone(true);
            }
        }
    };

    return (
        <div className="contact-form-wrapper">
            <Row className="justify-content-center">
                <Col lg={8} md={10}>
                    <div className="contact-form-container">
                        <form ref={form} onSubmit={sendEmail} className="professional-contact-form">
                            <div className="form-group">
                                <label htmlFor="from_name" className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    id="from_name"
                                    name="from_name" 
                                    className="form-input"  
                                    placeholder="Your name" 
                                    onChange={handleChange} 
                                    value={formData.from_name}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="reply_to" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    id="reply_to"
                                    name="reply_to" 
                                    className="form-input" 
                                    placeholder="your.email@example.com" 
                                    onChange={handleChange} 
                                    value={formData.reply_to}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea 
                                    id="message"
                                    name="message" 
                                    className="form-textarea" 
                                    placeholder="Tell me about your project or inquiry..." 
                                    onChange={handleChange} 
                                    value={formData.message}
                                    rows={6}
                                    required
                                />
                            </div>

                            {notDone && (
                                <div className="form-error">
                                    Please fill in all the required fields
                                </div>
                            )}

                            {done && (
                                <div className="form-success">
                                    Thank you! I've received your message and will get back to you soon.
                                </div>
                            )}

                            <Button 
                                type="submit" 
                                className="contact-submit-btn" 
                                disabled={done}
                            >
                                {done ? 'Message Sent ✓' : 'Send Message'}
                            </Button>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
