import React, { useState, useRef } from 'react';
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_eegilxo';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_cjshpvu';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'bFrw2BZPiL6alq3jP';

const formatCurrentDateTime = (date) => {
    const parts = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    }).formatToParts(date);

    const getPart = (type) => parts.find((part) => part.type === type)?.value || '';
    return `${getPart('month')} ${getPart('day')}, ${getPart('year')}, ${getPart('hour')}:${getPart('minute')} ${getPart('dayPeriod')}`;
};

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [sending, setSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        title: 'New portfolio contact form message',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
        setErrorMessage('');
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const submittedValues = new FormData(form.current);
        const userName = (submittedValues.get('user_name') || '').toString().trim();
        const userEmail = (submittedValues.get('user_email') || '').toString().trim();
        const title = (submittedValues.get('title') || '').toString().trim();
        const message = (submittedValues.get('message') || '').toString().trim();

        if (!userName || !userEmail || !message) {
            setNotDone(true);
            setErrorMessage('');
            return;
        }

        setSending(true);

        try {
            const time = formatCurrentDateTime(new Date());

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    user_name: userName,
                    user_email: userEmail,
                    title: title || 'New portfolio contact form message',
                    message,
                    time,
                },
                EMAILJS_PUBLIC_KEY
            );

            setDone(true);
            setNotDone(false);
            setErrorMessage('');
            setFormData({
                user_name: '',
                user_email: '',
                title: 'New portfolio contact form message',
                message: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            setNotDone(false);
            setDone(false);
            // Details stay in the console; visitors get a friendly fallback.
            setErrorMessage('Sorry, your message could not be sent right now. Please try again, or email me directly at peredajanmark@gmail.com.');
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="contact-form-wrapper">
            <Row className="justify-content-center">
                <Col lg={8} md={10}>
                    <div className="contact-form-container">
                        {done ? (
                            <div className="contact-success" role="status">
                                <svg className="contact-success-check" viewBox="0 0 52 52" aria-hidden="true">
                                    <circle className="contact-success-circle" cx="26" cy="26" r="24" fill="none" />
                                    <path className="contact-success-tick" fill="none" d="M15 27 l7.5 7.5 L37 19" />
                                </svg>
                                <h3>Message sent!</h3>
                                <p>Thank you for reaching out. I've received your message and will get back to you soon.</p>
                                <Button
                                    variant="outline-primary"
                                    className="btn-secondary-hero"
                                    onClick={() => setDone(false)}
                                >
                                    Send another message
                                </Button>
                            </div>
                        ) : (
                        <form ref={form} onSubmit={sendEmail} className="professional-contact-form">
                            <div className="form-group">
                                <label htmlFor="user_name" className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    id="user_name"
                                    name="user_name" 
                                    className="form-input"  
                                    placeholder="Your name" 
                                    onChange={handleChange} 
                                    value={formData.user_name}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="user_email" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    id="user_email"
                                    name="user_email" 
                                    className="form-input" 
                                    placeholder="your.email@example.com" 
                                    onChange={handleChange} 
                                    value={formData.user_email}
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

                            <input type="hidden" name="title" value={formData.title} />

                            {notDone && (
                                <div className="form-error">
                                    Please fill in all the required fields
                                </div>
                            )}

                            {errorMessage && (
                                <div className="form-error">
                                    {errorMessage}
                                </div>
                            )}

                            <Button 
                                type="submit" 
                                className="contact-submit-btn" 
                                disabled={sending}
                            >
                                {sending ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
