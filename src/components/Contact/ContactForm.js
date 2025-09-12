import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        reason: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.reason) {
            newErrors.reason = 'Please select a reason for contact';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.useplunk.com/v1/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_PLUNK_API_KEY}`
                },
                body: JSON.stringify({
                    to: process.env.REACT_APP_SUBMISSION_EMAIL,
                    subject: `Contact Form: ${formData.subject}`,
                    body: `
                        <h2>New Contact Form Submission</h2>
                        <p><strong>Name:</strong> ${formData.name}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        <p><strong>Subject:</strong> ${formData.subject}</p>
                        <p><strong>Reason for Contact:</strong> ${formData.reason}</p>
                        <p><strong>Message:</strong></p>
                        <p>${formData.message.replace(/\n/g, '<br>')}</p>
                        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                    `
                })
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                reason: '',
                message: ''
            });

        } catch (error) {
            console.error('Submission error:', error);
            setErrors({ submit: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className='text-center bg-green-100 border border-green-400 text-green-700 px-8 py-12 rounded-[30px]'>
                <h2 className='text-2xl font-bold mb-4'>Thank You!</h2>
                <p className='text-base mb-6'>Your message has been sent successfully. Our team will get in touch with you soon.</p>
                <button
                    onClick={() => setSubmitSuccess(false)}
                    className='px-6 py-3 bg-green-600 text-white rounded-[25px] hover:bg-green-700 transition-colors'
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <div className='w-full bg-[#D9D5D5] py-8 px-[34px] rounded-[30px] flex flex-col gap-2.5'>
            {errors.submit && (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
                    {errors.submit}
                </div>
            )}

            <div className='flex flex-col gap-1'>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`bg-white p-[15px] ${errors.name ? 'border-2 border-red-500' : ''}`}
                    placeholder='Name *'
                />
                {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
            </div>

            <div className='flex flex-col gap-1'>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`bg-white p-[15px] ${errors.email ? 'border-2 border-red-500' : ''}`}
                    placeholder='Email *'
                />
                {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
            </div>

            <div className='flex flex-col gap-1'>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`bg-white p-[15px] ${errors.subject ? 'border-2 border-red-500' : ''}`}
                    placeholder='Subject *'
                />
                {errors.subject && <span className='text-red-500 text-sm'>{errors.subject}</span>}
            </div>

            <div className='flex flex-col gap-1'>
                <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className={`bg-white p-[15px] ${errors.reason ? 'border-2 border-red-500' : ''}`}
                >
                    <option value="">--Reason for contact--</option>
                    <option value="Support">Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Feedback">Feedback</option>
                    <option value="General Inquiry">General Inquiry</option>
                </select>
                {errors.reason && <span className='text-red-500 text-sm'>{errors.reason}</span>}
            </div>

            <div className='flex flex-col gap-1'>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`h-[150px] bg-white p-[15px] resize-vertical ${errors.message ? 'border-2 border-red-500' : ''}`}
                    placeholder='Message *'
                />
                {errors.message && <span className='text-red-500 text-sm'>{errors.message}</span>}
            </div>

            <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`mt-[14px] w-[120px] h-14 relative rounded-[35px] border transition-colors ${isSubmitting
                        ? 'bg-gray-400 border-gray-400 cursor-not-allowed text-white'
                        : 'bg-red-600 border-red-600 hover:bg-white text-white hover:text-red-600'
                    }`}
            >
                <p className="font-semibold text-lg font-['Sans'] leading-tight tracking-tight">
                    {isSubmitting ? 'Sending...' : 'Send'}
                </p>
            </button>
        </div>
    );
};

export default ContactForm;